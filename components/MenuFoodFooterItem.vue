<template>
  <p class="food-menu-footer-msg">
    {{msg}}
  </p>
</template>

<script>
export default {
  name: 'MenuFoodFooterItem',
  props: {
    msg: {
      type: String,
      default: () => '',
      required: true
    }
  }  
}
</script>
