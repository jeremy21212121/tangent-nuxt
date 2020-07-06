<template>
  <div class="flex-description">
    <div class="box">
      <p v-if="description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuFoodItemDescription',
  props: {
    description: {
      type: String,
      default: () => ''
    }
  }
}
</script>
