<template>
  <div class="site-container">
    <site-header />
    <div class="content-container">
      <div id="menus-container">
        <div id="menus-list">
          <food-menus />
          <drink-menu />
        </div>
        <hours :hoursArray="hours" />
        <find-us />
        <social-media />
        <site-footer />
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import FoodMenus from '@/components/FoodMenus.vue'
import DrinkMenu from '@/components/DrinkMenu.vue'
import Hours from '@/components/Hours.vue'
import FindUs from '@/components/FindUs.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import SiteFooter from '~/components/SiteFooter.vue'

import getHours from '@/assets/js/hours.js'

export default {
  name: 'MainIndex',
  components: {
    SiteHeader,
    FoodMenus,
    DrinkMenu,
    Hours,
    FindUs,
    SocialMedia,
    SiteFooter
  },
  data() {
    return {
      hours: []
    }
  },
  methods: {
    getHours: getHours
  },
  mounted() {
    this.getHours().then(hoursArray => this.hours.push(...hoursArray))
  }
}
</script>

