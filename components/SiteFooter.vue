<template>
  <footer>
    <a
      href="/Workplace_COVID_19_Safety_Plan.pdf"
      target="_blank"
      rel="noopener"
    >COVID-19 safety plan</a>
    <img :src="require('@/static/img/tc_xs.png')" alt="Tangent cafe small logo" />
    <p>&copy; 2018 &mdash; {{ (new Date()).getFullYear() }} Tangent Cafe</p>
  </footer>
</template>