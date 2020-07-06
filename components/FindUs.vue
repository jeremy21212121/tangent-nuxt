<template>
  <section id="findus">
    <h2>find us</h2>
    <p>
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=tangent+cafe+vancouver+bc"
        title="Click for directions"
        target="_blank"
        rel="noopener"
      >2095 Commercial Drive</a>
    </p>
    <p>Vancouver BC, V5N 4A9</p>
    <p><a href="tel:+16045584641">tel: 604 558 4641</a></p>

    <div class="map">
      <div id="static-map">
        <a
          id="maplink"
          href="https://www.google.com/maps/place/Tangent+Cafe/@49.2644196,-123.0963723,14z/data=!4m8!1m2!3m1!2sTangent+Cafe!3m4!1s0x0:0x74880a1c56384f9d!8m2!3d49.2660683!4d-123.0699635"
          title="Click to open in Google Maps"
          target="_blank"
          noreferrer
          noopener
        >*</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
p a {
  text-decoration-color: rgba(0,0,0,0.3);
}
@media screen and (min-width: 699px) {
  p {
    font-size: 1.1rem;
  }
}
</style>