<style scoped>
section {
  display: flex;
  justify-content: space-around;
}
</style>

<template>
  <section id="social-media">
    <a
      v-for="(link, linkIndex) in links"
      :key="`social-link-${linkIndex}`"
      :href="link.href"
      target="_blank"
      rel="noopener"
    >
      {{ link.text }}
    </a>
  </section>
</template>

<script>
export default {
  name: 'SocialMedia',
  data() {
    return {
      links: [
        {
          text: 'Facebook',
          href: 'https://www.facebook.com/pages/Tangent-Cafe/420386921358640'
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/TangentCafe'
        },
        {
          text: 'Instagram',
          href: 'https://instagram.com/tangentcafe'
        },
      ]
    }
  }
}
</script>