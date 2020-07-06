<template>
  <div class="food-menus visible">
    <div
      v-for="(menu, menuIndex) in menus"
      :key="`menu-${menuIndex}`"
      v-bind:id="cssifyString(menu.title + '-menu-wrapper')"
    >

      <menu-show-button
        :title="menu.title"
        :clickHandler="toggleMenu"
      />

      <!-- MenuCategory { title: string, description: string, items: object[]  } -->
      <div v-bind:id="cssifyString(menu.title)" class="section">
        <div
          v-for="(category, categoryIndex) in menu.categories"
          :key="`cat-${categoryIndex}-${menuIndex}`"
          class="section"
        >
          <menu-category-header
            :title="category.title"
            :description="category.description"
          />

          <menu-food-item
            v-for="(item, itemIndex) in category.items"
            :key="`item-${itemIndex}cat-${categoryIndex}menu-${menuIndex}`"
          >
            <template v-slot:item-title>
              <menu-food-item-title
                :title="item.title"
                :meatFree="item.meatFree || false"
              />
            </template>
            <template v-slot:item-price>
              <menu-food-item-price
                :price="item.price"
              />
            </template>
            <template v-slot:item-description>
              <menu-food-item-description
                :description="item.description"
              />
            </template>
            <template v-slot:item-addons>
              <div v-if="item.addons" class="addon-wrapper">
                <menu-food-item-addon
                  v-for="(addon, addonIndex) in item.addons"
                  :key="`addon${addonIndex}-i${itemIndex}-c${categoryIndex}-m${menuIndex}`"
                  :title="addon.title"
                  :price="addon.price"
                />
              </div>
            </template>
          </menu-food-item>

        </div>

        <div v-if="menu.footer" class="food-menu-footer">
          <menu-food-footer-item
            v-for="(msg, msgIndex) in menu.footer"
            :key="`msg${msgIndex}-m${menuIndex}`"
            :msg="msg"
          />
        </div>

        <menu-food-legend />

        <menu-hide-button
          :clickHandler="() => { toggleMaxHeightAndScroll(cssifyString(menu.title)) }"
        />

      </div>
    </div>
  </div>
</template>

<script>
// data
import menuData from "@/assets/data/foodMenus.js";
// vue mixins
import cssifyString from '@/mixins/cssifyString.js';
import menuMethods from '@/mixins/menuMethods.js';
// components
import MenuShowButton from '@/components/MenuShowButton.vue';
import MenuCategoryHeader from '@/components/MenuCategoryHeader.vue';
import MenuFoodItemPrice from '@/components/MenuFoodItemPrice.vue';
import MenuFoodItemDescription from '@/components/MenuFoodItemDescription.vue';
import MenuFoodItemAddon from '@/components/MenuFoodItemAddon.vue';
import MenuFoodItemTitle from '@/components/MenuFoodItemTitle.vue';
import MenuFoodItem from '@/components/MenuFoodItem.vue';
import MenuHideButton from '@/components/MenuHideButton.vue';
import MenuFoodLegend from '@/components/MenuFoodLegend.vue';
import MenuFoodFooterItem from '@/components/MenuFoodFooterItem.vue';

export default {
  name: "FoodMenus",
  components: {
    MenuShowButton,
    MenuCategoryHeader,
    MenuFoodItemPrice,
    MenuFoodItemDescription,
    MenuFoodItemAddon,
    MenuFoodItemTitle,
    MenuFoodItem,
    MenuHideButton,
    MenuFoodLegend,
    MenuFoodFooterItem
  },
  mixins: [
    cssifyString,
    menuMethods
  ],
  data() {
    return {
      ...menuData
    };
  },
  mounted: function() {
    this.status.isLoaded = true;
    // check query string and open appropriate menu if desired. This is to support QR code menus for COVID-19 safety.
    if (window && window.location && window.location.search) {
      const searchString = window.location.search.replace(/\?/, "");
      const kvArray = searchString.split("=");
      if (kvArray.length === 2 && kvArray[0] === "menu") {
        const menu = kvArray[1];
        if (menu === "breakfast" || menu === "dinner") {
          const id = menu + "-button";
          const target = document.getElementById(id);
          if (target) {
            target.click();
          }
        }
      }
    }
  }
};
</script>