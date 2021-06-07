<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Header />
  </div>
  <router-view />
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  async created() {
    await this.actionGetCountry();
  },
  methods: {
    ...mapActions(["actionGetCountry"]),
  },
};
</script>

<style lang="scss">
@import "./assets/sass/_variables.scss";

body {
  font-family: $font-family-sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--body-bg);
  color: var(--body-color);
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
