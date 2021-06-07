<template>
  <header>
    <div>
      <h1 class="fL">Where in the world?</h1>
    </div>
    <div>
      <input type="checkbox" id="control-nav" />
      <label for="control-nav" class="control-nav"></label>
      <label for="control-nav" class="control-nav-close"></label>
      <nav class="nav-itens">
        <ul class="l2">
          <button @click="setDarkMode" id="dark">Dark Mode</button>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },

  methods: {
  setDarkMode() {
     const $html = document.querySelector('html')
     const $button = document.querySelector('#dark')
     $button.addEventListener('click', function(){
         $html.classList.toggle('dark-mode')
     })
  }
}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/sass/_variables.scss";

input {
  display: none;
}

@media screen and (min-width: 1440px) {
  header {
    display: grid;
    grid-template-columns: 10fr 2fr;

    h1 {
      display: flex;
      align-items: stretch;
    }
  }
}

@media screen and (max-width: 375px) {
  header {
    .control-nav {
      position: absolute;
      right: 20px;
      top: 20px;
      display: block;
      width: 30px;
      padding: 5px 0;
      border: solid #333;
      border-width: 3px 0;
      z-index: 2;
      cursor: pointer;
    }

    .control-nav:before {
      content: "";
      display: block;
      height: 3px;
      background: #333;
    }

    .control-nav-close {
      position: fixed;
      right: 0;
      top: 0;
      bottom: 0;
      left: 0;
      display: block;
      z-index: 1;
      background: rgba(0, 0, 0, 0.4);
      -webkit-transition: all 500ms ease;
      transition: all 500ms ease;
      -webkit-transform: translate(100%, 0);
      -ms-transform: translate(100%, 0);
      transform: translate(100%, 0);
    }

    .nav-itens {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 250px;
      border-left: 1px solid #ccc;
      background: #fff;
      overflow-x: auto;
      z-index: 2;
      -webkit-transition: all 500ms ease;
      transition: all 500ms ease;
      -webkit-transform: translate(100%, 0);
      -ms-transform: translate(100%, 0);
      transform: translate(100%, 0);
    }
  }
}
#control-nav:checked ~ .control-nav-close {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
}

#control-nav:checked ~ .nav-itens {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
}
</style>
