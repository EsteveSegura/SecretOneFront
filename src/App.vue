<template>
  <!--<div class="container-header">
    <div class="menu">
      <div class="title"><router-link to="/">Keep Secrets</router-link></div>
    </div>
  </div> -->
  <router-view />
    <div class="footer">
    Made with ❤️ & 🔒 by <a href="http://girlazo.com">GiRLaZo</a>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Default Title",
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Encode+Sans:wght@500;600;700&display=swap");

a,
a:visited {
  text-decoration: none;
  color: #fff;
}
a:hover {
  text-decoration: underline;
}

.title {
  font-family: "Encode Sans", sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 2rem;
}

.footer {
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 0px;
  padding: 0.7rem 0rem;
  font-size: 12px;
}

.menu {
  width: 90%;
  margin: 0 auto;
  padding: 1rem 6rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;
}

body,
html {
  font-family: "Encode Sans", sans-serif;
  background-color: #1d1d1f;
  color: #fff;
  margin:0 0;

}
</style>
