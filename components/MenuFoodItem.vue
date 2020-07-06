<template>
   <div class="b-menu-item">
      <div class="flexgrid">
        <div class="box">
          <slot name="item-title"></slot>
        </div>
      </div>
      <slot name="item-price"></slot>
      <slot name="item-description"></slot>
      <slot name="item-addons"></slot>
   </div>
</template>

<script>
export default {
  name: 'MenuFoodItem'
}
</script>
