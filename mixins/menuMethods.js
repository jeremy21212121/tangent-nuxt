export default {
  methods: {
    toggleMenu: function(event) {
      // this is hacky old legacy code. This should be accomplished with v-bind:class
      var elStyle = event.target.parentElement.nextElementSibling.style;
      if (elStyle.maxHeight === "" || elStyle.maxHeight === "0px") {
        elStyle.maxHeight = "5000px";
      } else {
        elStyle.maxHeight = "";
      }
    },
    toggleMaxHeightAndScroll: function(id) {
      // this is hacky old legacy code. This should be accomplished with v-bind:class
      var el = document.getElementById(id);
      el.style.maxHeight = "0px";
      window.scrollTo(0, 0);
    }
  }
}