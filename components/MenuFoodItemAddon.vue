<template>
  <div class="addons">

    <div class="flexgrid">
      <div class="box">
        <p>{{ title }}</p>
      </div>
    </div>

    <div class="flexgrid-s">
      <div class="box">
        <p class="price">{{ price }}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MenuFoodItemAddon',
  props: {
    title: {
      type: String,
      default: () => ''
    },
    price: {
      type: Number,
      default: () => 0
    }
  }
}
</script>
