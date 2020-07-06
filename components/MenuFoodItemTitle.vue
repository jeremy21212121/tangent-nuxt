<template>
  <div class="b-title">
    <h4>{{ title }}</h4>
    <img
      v-if="meatFree"
      :src="require('@/static/img/plant2.png')"
      width="18px"
      height="18px"
      alt="Meat-free menu item"
      title="Meat-free"
    />
  </div>
</template>

<script>
export default {
  name: 'MenuFoodItemTitle',
  props: {
    title: {
      type: String,
      default: () => '',
      required: true
    },
    meatFree: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>
