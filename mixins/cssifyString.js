export default {
  methods: {
    // make an arbitrary string safe to use as a CSS selector value (class, id, etc)
    cssifyString: function(string) {
      return string
        .replace(/^[^A-Za-z]+/, '') // ensure it starts with a letter or is an empty string if no letters are present
        .replace(/\W+/g, '-') // remove consecutive chars that are not a letter, number, or underscore and replace them with a dash
        .toLocaleLowerCase() // ensure all letters are lower case. This is not strictly required but it is a convention.
    }
  }
}
