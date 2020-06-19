<template>
  <div id="food-menus" v-bind:class="{visible : status.isLoaded}">
    <div
      v-for="(menu, menuIndex) in menus"
      :key="`menu-${menuIndex}`"
      v-bind:id="cssifyString(menu.title + '-menu-wrapper')"
    >
      <div class="item-wrap">
        <a
          href="#"
          class="menus-list-items"
          v-on:click.prevent="toggleMenu"
          v-bind:id="cssifyString(menu.title + '-button')"
          title="Click to open menu"
        >{{menu.title}} menu</a>
      </div>
      <div v-bind:id="cssifyString(menu.title)" class="section">
        <div
          v-for="(category, categoryIndex) in menu.categories"
          :key="`cat-${categoryIndex}-${menuIndex}`"
          class="section"
        >
          <div class="category-container">
            <h2>{{category.title}}</h2>

            <p v-if="category.description">{{category.description}}</p>
            <!-- <p v-if="categoryIndex==0">
              <img src="./img/plant2.png" width="18px" height="18px" alt="Meat-free menu item" title="Meat-free"> = meat-free
            </p>-->
          </div>

          <div
            v-for="(item, itemIndex) in category.items"
            :key="`item-${itemIndex}cat-${categoryIndex}menu-${menuIndex}`"
            class="b-menu-item"
          >
            <div class="flexgrid">
              <div class="box">
                <div class="b-title">
                  <h3>{{item.title}}</h3>
                  <img
                    v-if="item.meatFree"
                    :src="require('@/static/img/plant2.png')"
                    width="18px"
                    height="18px"
                    alt="Meat-free menu item"
                    title="Meat-free"
                  />
                </div>
              </div>
            </div>

            <div class="flexgrid-s">
              <div class="box">
                <p v-if="item.price" class="price">{{item.price}}</p>
              </div>
            </div>

            <div class="flex-description">
              <div class="box">
                <p>{{item.description}}</p>
              </div>
            </div>

            <div v-if="item.addons">
              <div
                v-for="(addon, addonIndex) in item.addons"
                :key="`addon${addonIndex}-i${itemIndex}-c${categoryIndex}-m${menuIndex}`"
                class="addons"
              >
                <div class="flexgrid">
                  <div class="box">
                    <p>{{addon.title}}</p>
                  </div>
                </div>

                <div class="flexgrid-s">
                  <div class="box">
                    <p class="price">{{addon.price}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="menu.footer" class="food-menu-footer">
          <p
            v-for="(msg, msgIndex) in menu.footer"
            :key="`msg${msgIndex}-m${menuIndex}`"
            class="food-menu-footer-msg"
          >{{msg}}</p>
        </div>
        <p class="meat-free-legend">
          <img
            :src="require('@/static/img/plant2.png')"
            width="18px"
            height="18px"
            alt="Meat-free menu item"
            title="Meat-free"
          /> = meat-free
        </p>
        <p class="hide">
          <a
            href="#"
            v-on:click.prevent="toggleMaxHeightAndScroll(cssifyString(menu.title))"
          >hide &#x25B2;</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import menuData from "@/assets/data/foodMenus.js";

export default {
  name: "FoodMenus",
  data() {
    return {
      ...menuData
    };
  },
  methods: {
    toggleMenu: function(event) {
      var elStyle = event.target.parentElement.nextElementSibling.style;
      if (elStyle.maxHeight === "" || elStyle.maxHeight === "0px") {
        elStyle.maxHeight = "10000px";
      } else {
        elStyle.maxHeight = "";
      }
    },
    cssifyString: function(string) {
      //hacky little function to make an ID name from the human readable name. It is mostly to handle "Lunch & Dinner" -> "lunch-dinner".
      var cssString = string;
      cssString = cssString.replace("&", "");
      cssString = cssString.replace(" ", "");
      cssString = cssString.replace(/\s/g, "-").toLowerCase();

      return cssString;
    },
    toggleMaxHeightAndScroll: function(id) {
      // this.toggleMaxHeight(id);
      var el = document.getElementById(id);
      el.style.maxHeight = "0px";
      window.scrollTo(0, 0);
      // console.log("scroll2top");
    }
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