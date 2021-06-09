<template>
  <header>
    <div class="container-header">
      <h1 class="fL">Where in the world?</h1>
    </div>
    <div class="">
      <button @click="setDarkMode" id="dark">
        <img src="../assets/icon-svg/moon-outline.svg" alt="Moon" />Dark Mode
        <span v-if="theme == 'darkMode'"> Light</span>
        <span v-else> Dark</span>
      </button>
    </div>
  </header>
</template>

<script>
// import Moon from "../assets/icon-svg/moon-outline.svg";

export default {
  name: "Header",

  data() {
    return {
      theme: "",
    };
  },

  methods: {
    setDarkMode(event) {
      event.preventDefault();
      const $html = document.querySelector("html");
      $html.classList.toggle("dark-mode");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/sass/_variables.scss";

input {
  display: none;
}

button {
  background-color: var(--body-white);
  border: none;
  color: var(--body-color);
  position: relative;
  top: 2px;
  left: 51px;
  cursor: pointer;

  img {
    width: 22px;
    position: relative;
    top: 8px;
    padding-right: 7px;
  }
}

button:focus {
  outline: none;
}

@media screen and (min-width: 375px) and (max-width: 1200px) {
  button {
    left: 0;
  }
}

@media screen and (min-width: 1440px) {
  header {
    display: grid;
    grid-template-columns: 10fr 2fr;
    background-color: var(--body-white);
    border-bottom: 1px solid var(--body-gray);
    height: 45px;

    h1 {
      display: flex;
      align-items: stretch;
      font-size: $font-size-detail;
      margin-left: 34px;
      font-weight: 800;
    }
  }
}
</style>
