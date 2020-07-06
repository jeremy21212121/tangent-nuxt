<template>
  <div class="flexgrid-s">
    <div class="box">
      <p v-if="price" class="price">{{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuFoodItemPrice',
  props: {
    price: {
      type: Number,
      default: () => 0
    }
  }
}
</script>
