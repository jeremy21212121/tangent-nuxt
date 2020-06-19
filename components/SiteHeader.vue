<template>
  <header class="header-container">
    <nav>
      <ul id="nav">
        <!-- <li><a href="#about">about</a></li> -->
        <li>
          <a href="#hours">hours</a>
        </li>
        <li>
          <a href="#menus-list">menus</a>
        </li>
        <li>
          <a href="#findus">find us</a>
        </li>
        <li class="fullwidth">
          <a
            href="./Workplace_COVID_19_Safety_Plan.pdf"
            target="_blank"
            rel="noopener"
          >COVID-19 safety plan</a>
        </li>
      </ul>
    </nav>
    <section>
      <img id="logo" :src="require('@/static/img/tc_logo.svg')" alt="Tangent cafe logo" />
      <p id="motto">gathering friends around great food &amp; beer</p>
    </section>
  </header>
</template>
