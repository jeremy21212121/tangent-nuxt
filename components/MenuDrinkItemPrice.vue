<template>
  <div class="flexgrid-s">
    <div class="box">
      <p v-if="prices && Array.isArray(prices) && prices.length" :class="{ center: prices.length === 1 }" class="price" aria-label="price">
        <span
          v-for="(price, priceIndex) in formattedPriceArray"
          :key="`price-${priceIndex}`"
          :aria-hidden="price === '|'"
        >
          {{ price }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuDrinkItemPrice',
  props: {
    prices: {
      type: Array,
      default: () => [0]
    }
  },
  computed: {
    formattedPriceArray() {
      let prices = [...this.prices]
      if (prices.length > 1) {
        const formattedPrices = []
        prices.forEach((price,index) =>{
          formattedPrices.push(price)
          if (index < prices.length - 1) {
            formattedPrices.push('|')
          }
        })
        prices = formattedPrices
      }
      return prices
    }
  }
}
</script>

<style lang="scss" scoped>
  div.flexgrid-s {
    width: 25%;
    // max-width: 125px;
    height: 100%;
    div.box {
      p.price {
        display: flex;
        justify-content: space-between;
        max-width: 125px;
        margin-left: auto;
        &.center {
          justify-content: space-around;
        }
      }
    }
  }
</style>
