<template>
  <section id="hours">
    <h2>hours</h2>
    <div v-if="hoursArray && hoursArray.length">
      <p
        v-for="(hourObject, hourIndex) in hoursArray"
        :key="`hour${hourIndex}`"
        :class="{ today: hourObject.isToday }"
      >
        <span
          v-for="(str, hourStringIndex) in processHoursString(hourObject.value)"
          :key="`hourstring${hourStringIndex}`"
        >
          {{ str }}
        </span>
      </p>
    </div>
    <div v-else>
      <a href="https://www.google.com/maps/place/Tangent+Caf%C3%A9/@49.2660886,-123.0721555,17z/data=!3m1!4b1!4m5!3m4!1s0x5486714625aacced:0x74880a1c56384f9d!8m2!3d49.2660886!4d-123.0699668?hl=en" target="_blank" rel="noopener">
        see Google Maps for our hours
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hours',
  props: {
    hoursArray: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    processHoursString(str) {
      const length = str.length
      const output = []
      const index = str.indexOf(': ') + 1
      if (length > 35 && index > 1) {
        // it is a really long string so we will split it for formatting purposes
        output.push(str.substring(0, index), str.substring(index + 1, length))
      } else {
        output.push(str)
      }
      return output
    }
  }
}
</script>

<style scoped>
p {
  padding-top: 4px;
  text-transform: lowercase;
}
p.today {
  background-color: rgba(255,255,255,0.42);
  border-radius: 3px;
}
p span {
  display: block;
  /* width: 100%; */
}

@media screen and (min-width: 699px) {
  p span {
    display: inline;
  }
}
</style>