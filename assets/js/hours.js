const hoursUrl = 'https://tangentcafe.ca/api/v1/hours'

// The prod server is set to GMT timezone, but we want the current day in PST/PDT timezone. I came up with this to prevent getting the wrong day on SSR after 4pm local time, since it is not practical to acheive with a Date object alone.
const daysOfWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

// Returns the full name of the current day of the week in the given IANA timezone.
// @param {String} [timezone=America/Los_Angeles] - An IANA timezone string. Default is 'America/Los_Angeles' because 'America/Vancouver' is not as well supported by client devices IME.
// @returns {String} - The full name of the day of the week, eg. 'Friday'
const getDayOfWeekStringInTimezone = (timezone = 'America/Los_Angeles') => new Intl.DateTimeFormat('en-US', { timeZone: timezone, weekday: 'long' }).format(new Date())

// Gets the numeric current day of week in a given timezone. Returns a number 0 - 6 representing monday - sunday.
// @param {String} [timezone=America/Los_Angeles] - An IANA timezone string. Default is 'America/Los_Angeles' because 'America/Vancouver' is not as well supported by client devices IME.
// @returns {Number} - Represents the day of the week, staring with monday === 0
const getDayOfWeekNumericInTimezone = (timezone = 'America/Los_Angeles') => daysOfWeek.findIndex(str => str.toLocaleLowerCase() === getDayOfWeekStringInTimezone(timezone).toLocaleLowerCase())

/*
 Gets the business hours from our google places API proxy
 @returns {Promise} - Resolves to an object containing either the API response or { error: true }. Does not reject.
 
 */
const getWeekdayText = () =>
  fetch
    ? fetch( hoursUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .catch(e => ({ error: true }))
  : new Promise(resolve => resolve({ error: true }))

 /*
  namespace Hours {
    interface Intermediate {
      start_day: string,
      end_day: string,
      hours: string,
      isToday: boolean
    }
    interface Final {
      value: string,
      isToday: boolean
    }
  }
*/

/*
 * Takes weekday_text array from google places API and maps it to an intermediate format that makes it easier to merge consecutive days with the same hours.
 * @param {string[]} arr - weekday_text array from google places API opening_hours
 * @returns {Hours.Intermediate[]}
 */
const parseWeekdayText = (arr) => {
    const input = [...arr]
    // const currentDate = new Date()
    // // in javascript land, sunday === 0. But the google places api returns "weekday_text" which starts with monday (monday === 0)
    // // so we subtract 1 from the js day to get the index for the api results.
    // let currentDay = currentDate.getDay() - 1
    // let correctedDay = (currentDay < 0) ? currentDay + 7 : currentDay 
    const correctedDay = getDayOfWeekNumericInTimezone('America/Los_Angeles')
    const result = []
    if (input && input.length) {
      result.push(...input.map((timeString, i) => {
        const hour = timeString.split(': ')
        return {
          start_day: hour[0],
          end_day: hour[0],
          hours: hour[1],
          isToday: i === correctedDay // if true, these are todays hours
        }
      }))
    }
    return result
}

/*
 * Merges together multiple consecutive days with the same hours
 * @param {Hours.Intermediate[]} arr - Intermediate format ouput by parseWeekdayText()
 * @returns {Hours.Intermediate[]} - Consecutive days with the same hours have been merged into the same object
 */
const mergeHours = (arr) => {
  const result = [...arr]
  result.forEach((obj, i, arr) => {
      // we can't group the first item with its predecessor because there isnt one
      if (i > 0) {
        // if current item and the previous item have the same hours, group them together
        if (obj.hours === arr[i - 1].hours) {
          obj.start_day = arr[i - 1].start_day
          // flag the previous item for later removal
          arr[i - 1].flag = true
          if (arr[i - 1].isToday) {
            // mark this group as containing the current day (today) if the previous item was marked today
            // this allows us to visually indicate the relevant hours for today
            obj.isToday = true
          }
        }
      }
  })
  return result.filter(obj => !obj.flag)
}

/*
 * Converts hours into a format suitable for display
 * @param {Hours.Intermediate} obj - Intermediate hours format
 * @returns {Hours.Final} - Final hours display format
 */
const convertToDisplayHour = (obj) => {

  const output = { isToday: obj.isToday }

  const startAndEndOnSameDay = (obj.start_day === obj.end_day)

  output.value = startAndEndOnSameDay
    ? obj.start_day + ': ' + obj.hours
    : obj.start_day + ' — ' + obj.end_day + ': ' + obj.hours

  // does same as above but I think it is less clear.
  // output.value = `${obj.start_day}${startAndEndOnSameDay ? '' : (' — ' + obj.end_day)}: ${obj.hours}`

  return output
}

/*
  Removes ':00' from times that are on the hour for stylistic reasons
  @param {Hours.Final} obj - An hours object in it's display format
  @returns {Hours.Final}
 */
const removeZeroMinutesFromTime = (obj) => {
  obj.value = obj.value.replace(/\:00/g, '')
  return obj
}

const getHours = () => new Promise((resolve) => {

    getWeekdayText()
    .then(busHours => {

      let mergedBusHours

      if (busHours && !busHours.error && busHours.result && busHours.result.opening_hours && busHours.result.opening_hours.weekday_text) {
        // we have the businesss hours from the api. Let's work our magic and get them ready for display
        mergedBusHours = mergeHours(
          parseWeekdayText(busHours.result.opening_hours.weekday_text)
        )
      }
      let output = []
      if (mergedBusHours) {
        // we successfully merged any consecutive days with the same hours
        output = mergedBusHours
          .map(convertToDisplayHour) // map to {Hours.Final} for display
          .map(removeZeroMinutesFromTime) // Removes ':00' from even hours for stylistic reasons
      }
      resolve(output)
    })
})

export default getHours
