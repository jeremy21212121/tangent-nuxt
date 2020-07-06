<template>
  <div class="drink-menu food-menus visible">
    <div :class="cssSafeTitle + '-menu-wrapper'">

      <menu-show-button
        :title="menu.title"
        :clickHandler="toggleMenu"
      />

      <div :id="cssSafeTitle + '-section'" :class="cssSafeTitle" class="section">
        <div
          v-for="(category, categoryIndex) in menu.categories"
          :key="`cat-${categoryIndex}-${menu.title}`"
          class="section"
        >
          <menu-category-header
            :title="category.title"
            :description="category.description"
          />

          <div v-if="category.subcategories">
            <div
              v-for="(subcategory, subcatIndex) in category.subcategories"
              :key="`subcategory-${subcatIndex}`"
              class="drink-category-wrapper"
            >
              <h3>{{ subcategory.title }}</h3>

              <menu-food-item
                v-for="(item, itemIndex) in subcategory.items"
                :key="`item-${itemIndex}subcat-${subcatIndex}cat-${cssSafeTitle}`"
              >

                <template v-slot:item-title>
                  <menu-food-item-title
                    :title="item.title"
                    :meatFree="false"
                  />
                </template>

                <template v-slot:item-price>
                  <menu-drink-item-price
                    :prices="item.prices"
                  />
                </template>

                <template v-slot:item-description>
                  <menu-food-item-description
                    :description="item.description"
                  />
                </template>

              </menu-food-item>
            </div>
          </div>

          <div v-else>
            <div
              class="drink-category-wrapper"
            >

              <menu-food-item
                v-for="(item, itemIndex) in category.items"
                :key="`item-${itemIndex}cat-${cssifyString(category.title)}`"
              >

                <template v-slot:item-title>
                  <menu-food-item-title
                    :title="item.title"
                    :meatFree="false"
                  />
                </template>

                <template v-slot:item-price>
                  <menu-drink-item-price
                    :prices="item.prices"
                  />
                </template>

                <template v-slot:item-description>
                  <menu-food-item-description
                    :description="item.description"
                  />
                </template>

              </menu-food-item>
            </div>
          </div>
        </div>
        <menu-hide-button
          :clickHandler="() => { toggleMaxHeightAndScroll(cssSafeTitle + '-section') }"
        />
      </div>
    </div>
  </div>
</template>

<script>
// data
import drinkMenuData from "@/assets/data/drinkMenu.js";
// vue mixins
import cssifyString from '@/mixins/cssifyString.js';
import menuMethods from '@/mixins/menuMethods.js';
// components
import MenuShowButton from '@/components/MenuShowButton.vue';
import MenuCategoryHeader from '@/components/MenuCategoryHeader.vue';
import MenuFoodItem from '@/components/MenuFoodItem.vue';
import MenuFoodItemTitle from '@/components/MenuFoodItemTitle.vue';
import MenuDrinkItemPrice from '@/components/MenuDrinkItemPrice.vue';
import MenuFoodItemDescription from '@/components/MenuFoodItemDescription.vue';
import MenuHideButton from '@/components/MenuHideButton.vue';

export default {
  name: 'DrinkMenu',
  components: {
    MenuShowButton,
    MenuCategoryHeader,
    MenuFoodItem,
    MenuFoodItemTitle,
    MenuDrinkItemPrice,
    MenuFoodItemDescription,
    MenuHideButton
  },
  mixins: [
    cssifyString,
    menuMethods,
  ],
  data() {
    return {
      menu: drinkMenuData
    }
  },
  methods: {
    hasSubcategories(category) {
      return typeof category === 'object' && category.hasOwnProperty('subcategories')
    }
  },
  computed: {
    cssSafeTitle() {
      return this.menu ? this.cssifyString(this.menu.title) : ''
    }
  }
}
</script>

<style lang="scss">
// Unscoped to override default component styles
// Using quite specific selectors to avoid unintended consequences
div.drink-menu.food-menus {
  div.category-container {
    padding-top: 8px;
  }
  p.hide {
    margin-top: 20px;
  }
}
div.drink-category-wrapper {
  div.b-menu-item {
    .flexgrid {
      width: 75%;
      .box {
        .b-title {
          h4 {
            text-transform: capitalize;
          }
        }
      }
    }
    .flex-description {
      .box {
        p {
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>