<template>
  <div class="item-wrap">
    <a
      href="#"
      class="menus-list-items"
      @click.prevent="clickHandler"
      v-bind:id="cssifyString(title + '-show-button')"
      title="Click to open menu"
    >
      {{ `${title} menu` }}
    </a>
  </div>
</template>

<script>
import cssifyString from '@/mixins/cssifyString.js';

export default {
  name: 'MenuShowButton',
  mixins: [
    cssifyString
  ],
  props: {
    clickHandler: {
      type: Function,
      default: () => { () => {} },
      required: true
    },
    title: {
      type: String,
      default: () => '',
      required: true
    }
  }
}
</script>
