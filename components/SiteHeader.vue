<style scoped>
@media screen and (min-width: 699px) {
  p {
    font-size: 1.2rem;
  }
}
</style>

<template>
  <header class="header-container">
    <nav>
      <ul id="nav">
        <li
          v-for="(link, linkIndex) in nav"
          :key="`nav-link-${linkIndex}`"
          :class="{ fullwidth: link.fullWidth }"
        >
          <a
            :href="link.href"
            :target="link.external ? '_blank' : '_self'"
            :rel="link.external ? 'noopener external' : ''"
          >
            {{ link.text }}
          </a>
        </li>
      </ul>
    </nav>
    <section>
      <img id="logo" :src="image.src" :alt="image.alt" />
      <p id="motto">{{ paragraph.text }}</p>
    </section>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      nav: [
        {
          text: 'hours',
          href: '#hours'
        },
        {
          text: 'menus',
          href: '#menus-list'
        },
        {
          text: 'find us',
          href: '#findus'
        },
        {
          text: 'COVID-19 safety plan',
          href: './Workplace_COVID_19_Safety_Plan.pdf',
          external: true,
          fullWidth: true
        }
      ],
      image: {
        src: require('@/static/img/tc_logo.svg'),
        alt: 'Tangent cafe logo'
      },
      paragraph: {
        text: 'gathering friends around great food & beer'
      }
    }
  }
}
</script>