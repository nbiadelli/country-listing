<template>
  <div id="nav">
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
</style>
