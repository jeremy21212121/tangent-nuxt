<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  color: #222;
  font-size: 1em;
  line-height: 1.4;
}
::-moz-selection {
  background: #b3d4fc;
  text-shadow: none;
}
::selection {
  background: #b3d4fc;
  text-shadow: none;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}
audio,
canvas,
iframe,
img,
svg,
video {
  vertical-align: middle;
}
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
textarea {
  resize: vertical;
}
.browserupgrade {
  margin: 0.2em 0;
  background: #ccc;
  color: #000;
  padding: 0.2em 0;
}
/* ==========================================================================
Author's custom styles */
@font-face {
  font-family: 'raleway';
  src: url('../static/font/raleway-regular-webfont.woff2') format('woff2'),
  url('../static/font/raleway-regular-webfont.woff') format('woff'),
  url('../static/font/raleway-regular-webfont.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'courierprime';
  src: url('../static/font/courier_prime-webfont.woff2') format('woff2'),
  url('../static/font/courier_prime-webfont.woff') format('woff'),
  url('../static/font/courier_prime-webfont.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
html {
  scroll-behavior: smooth;
}
body {
  background: #ffdd79;
  background: linear-gradient(180deg,#ffe393 0%, #ffdd79 10%, #ffdd79 90%, #ffe393 100%);
  background: -webkit-linear-gradient(180deg,#ffe393 0%, #ffdd79 10%, #ffdd79 90%, #ffe393 100%);
  color: #333;
  font-family: "courierprime", Courier, monospace;
  margin:3px;
}
.site-container {
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  min-width: 340px;
  margin: 0 auto;
}
.content-container {
  text-align: center;
  margin: 0 2px;
}
a {
  color: #333;
  text-decoration-color: rgba(0, 0, 0, 0.4);
}
div.addon-wrapper {
  width: 100%;
}
#logo {
  display: block;
  width: 80%;
  max-width: 600px;
  margin: 20px auto;
}
#nav {
  padding:0;
  font-family: "raleway";
  list-style-type: none;
  text-align: center;
  margin-bottom: 60px;
}
#nav li {
  width: 28%;
  display: inline-block;
}
#nav li.fullwidth {
  width: 100%;
}
#motto {
  text-align: center;
  width:75%;
  max-width: 401px;
  margin: 0 auto;
}
.menus-list-items {
  justify-content: center;
  text-align: center;
  text-decoration: none;
  margin: 20px auto;
  padding: 0 10px;
  font-family: "raleway", sans-serif;
  font-size: 1.5em;
  border: 2px solid #333;
  text-transform: uppercase;
}
div.food-menus {
  font-family: "raleway", sans-serif;
}
div.food-menus h2 {
  text-transform: uppercase;
  font-size: 0.9em;
}

div.food-menus h3 {
  padding-left: 4px;
  text-transform: uppercase;
  font-size: 0.8em;
}
div.food-menus h4 {
  text-transform: uppercase;
  font-size: 0.8em
}
div.food-menus p {
  font-size: 0.8em;
}
div.food-menus p.hide a {
  /* font-size: 16px; */
  font-size: 1.25em;
}

.item-wrap {
  display: flex;
  width: 100%;
}
p.menus-list-items a {
  color:inherit;

}
.menus-list-items:active {

  color: #E83128;
  border-color: #E83128;
}
.menu-section-list {
  list-style-type: none;
  width: 100%;
  margin: 1px;
  padding: 1px;
}
.food-menu-footer-msg {
  margin: 1%;
}
.meat-free-legend {
  margin-left: 1%;
  margin-top: auto;
}
section {
  margin-top: 60px;
  margin-bottom: 60px;
}
#findus h2, #hours h2 {
  /* text-transform: capitalize; */
  font-family: "raleway";
}

#static-map {
  transition: all 1s ease;
  width: 300px;
  height: 300px;
  margin: 20px auto;
  /* max-width: 95%; */
  background-image: url("../static/img/staticmap1n.png");
  background-size: contain;
}
#maplink {
  transition: all 1s ease;
  display: block;
  width: 100%;
  height: 100%;
  line-height: 315px;
  text-decoration:none;
  color:#ffdd79;
  font-size: 3.1em;
}
#social-media a {
  display: inline-block;
  width: 23%;
}
.food-menus {
  opacity: 0;
  transition: opacity 1s ease;
  text-align: left;
}
.food-menus.visible {
  opacity: 1;
}
#breakfast, #dinner, #lunch, .drinks {
  max-height: 0px;
  transition: all 1s ease;
  overflow: hidden;
}
.menus-list-items {
  justify-content: center;
  text-align: center;
  text-decoration: none;
  margin: 20px auto;
  padding: 0 10px;
  font-family: "raleway", sans-serif;
  font-size: 1.5em;
  border: 2px solid #333;
  text-transform: uppercase;
}
.section {
  background-color:#ffc;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0 auto;
}
div.category-container + div.b-menu-item {
  border-top: 1px solid #333;
}
div.section div.b-menu-item:last-of-type {
  border-bottom: none;
  background-image: url("../static/img/borderpattern2.png");
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: 10px;
  border-bottom: none;
  padding-bottom: 10px;
}

.b-title h3, .b-title h4, p {
  margin: 0;
  padding: 0;
}
h3, h4 {
  display: inline-block;
}
.addons {
  width: 100%;
  display: flex;
}
.price {
  text-align: right;
}
.b-menu-item {
  border-bottom: 1px solid #333;
  background-color: #ffe;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-wrap: wrap;
  padding: 6px;
}
.category-container {
  padding: 4px;
}
.flexgrid {
  width: 80%;
  /*   display: flex; */
  /* flex: 80% 0; */
  /*   flex-basis: column; */
}
.flexgrid-s {
  /* flex: 20% 0; */
  width: 20%;
}
div.flex-description {
  /* flex: 100%; */
  width: 100%;
}
p.hide {
  width: 100%;
  text-align: center;
  margin-bottom: 12px;
}

footer img {
  display: block;
  margin: 20px auto;
}
@media all and (min-width: 699px) {
  #static-map {
    /* transition: all 1s ease; */
    width: 600px;
    height: 400px;
    /* margin: 0 auto; */
    /* max-width: 95%; */
    background-image: url("../static/img/staticmap2.png");
    /* background-size: contain; */
  }
  #maplink {
    line-height: 417px;
    font-size: 3em;
  }
  #motto {
    font-size: 1.2em;
  }

}
@media all and (min-width: 900px) {
  body {
    font-size: 1.1em;
  }
  #motto {
    font-size: 1.2em;
    width: 35%;
  }
  #maplink {
    line-height: 420px;
  }
  #nav li.fullwidth {
    width: auto;
  }
}

@media all and (min-width: 1260px) {
  body {
    font-size: 1.2em;
  }
  #motto {
    font-size: 1.3em;
  }
  .site-container {
    max-width: 90%;
  }
  #breakfast, #lunch, #dinner, .drinks {
    transition: all 0.2s ease;
    display: flex;
    flex-wrap: wrap;
  }
  #breakfast div.section, #lunch div.section, #dinner div.section, .drinks div.section {
    transition: all 1s ease;
    width: 48%;
    margin: 1%;
  }

  #breakfast::after, #lunch::after, #dinner::after {
    content: "";
    display: block;
    clear: both;
  }
  .food-menu-footer {
    display: flex;
    width: 100%;
  }
  .food-menu-footer-msg {

    width: 48%;
    margin:1%;
  }

  div.tab-content {
    max-width: 900px;
  }

}

@media all and (min-width: 1920px) {
  .content-container {
    max-width: 1920px;
    margin: 0 auto;
  }
}


/* ==========================================================================
Helper classes
========================================================================== */

/*
* Hide visually and from screen readers
*/

.hidden {
  display: none !important;
}

/*
* Hide only visually, but have it available for screen readers:
* https://snook.ca/archives/html_and_css/hiding-content-for-accessibility
*
* 1. For long content, line feeds are not interpreted as spaces and small width
*    causes content to wrap 1 word per line:
*    https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
*/

.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap; /* 1 */
}

/*
* Extends the .visuallyhidden class to allow the element
* to be focusable when navigated to via the keyboard:
* https://www.drupal.org/node/897638
*/

.visuallyhidden.focusable:active,
.visuallyhidden.focusable:focus {
  clip: auto;
  -webkit-clip-path: none;
  clip-path: none;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
  white-space: inherit;
}

/*
* Hide visually and from screen readers, but maintain layout
*/

.invisible {
  visibility: hidden;
}

/*
* Clearfix: contain floats
*
* For modern browsers
* 1. The space content is one way to avoid an Opera bug when the
*    `contenteditable` attribute is included anywhere else in the document.
*    Otherwise it causes space to appear at the top and bottom of elements
*    that receive the `clearfix` class.
* 2. The use of `table` rather than `block` is only necessary if using
*    `:before` to contain the top-margins of child elements.
*/

.clearfix:before,
.clearfix:after {
  content: " "; /* 1 */
  display: table; /* 2 */
}

.clearfix:after {
  clear: both;
}

/* ==========================================================================
EXAMPLE Media Queries for Responsive Design.
These examples override the primary ('mobile first') styles.
Modify as content requires.
========================================================================== */

@media only screen and (min-width: 35em) {
  /* Style adjustments for viewports that meet the condition */
}

@media print,
(-webkit-min-device-pixel-ratio: 1.25),
(min-resolution: 1.25dppx),
(min-resolution: 120dpi) {
  /* Style adjustments for high resolution devices */
}

/* ==========================================================================
Print styles.
Inlined to avoid the additional HTTP request:
http://www.phpied.com/delay-loading-your-print-css/
========================================================================== */

@media print {
  *,
  *:before,
  *:after {
    background: transparent !important;
    color: #000 !important; /* Black prints faster:
    http://www.sanbeiji.com/archives/953 */
    box-shadow: none !important;
    text-shadow: none !important;
  }

  a,
  a:visited {
    text-decoration: underline;
  }

  a[href]:after {
    content: " (" attr(href) ")";
  }

  abbr[title]:after {
    content: " (" attr(title) ")";
  }

  /*
  * Don't show links that are fragment identifiers,
  * or use the `javascript:` pseudo protocol
  */

  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: "";
  }

  pre {
    white-space: pre-wrap !important;
  }
  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }

  /*
  * Printing Tables:
  * http://css-discuss.incutio.com/wiki/Printing_Tables
  */

  thead {
    display: table-header-group;
  }

  tr,
  img {
    page-break-inside: avoid;
  }

  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }

  h2,
  h3 {
    page-break-after: avoid;
  }
}

</style>
