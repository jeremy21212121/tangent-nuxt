<template>
  <p class="hide">
    <a
      href="#"
      v-on:click.prevent="clickHandler"
    >hide &#x25B2;</a>
  </p>
</template>

<script>
export default {
  name: 'MenuHideButton',
  props: {
    clickHandler: {
      type: Function,
      default: () => () => {},
      required: true
    }
  }
}
</script>
