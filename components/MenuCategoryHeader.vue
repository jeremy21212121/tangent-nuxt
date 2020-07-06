<template>
  <div class="category-container">
    <h2>{{ title }}</h2>
    <p v-if="description && typeof description === 'string'">{{ description }}</p>
    <p v-if="description && Array.isArray(description)" class="split">
      <span
        v-for="(descriptString, descriptIndex) in description"
        :key="`desc-${descriptIndex}`"
      >
        {{ descriptString }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'MenuCategoryHeader',
  props: {
    title: {
      type: String,
      default: () => '',
      required: true
    },
    description: {
      type: [String, Array],
      default: () => ''
      // required: true
    }
  }
}
</script>

<style scoped>
p.split {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
