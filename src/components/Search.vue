<template>
  <div class="container-search">
    <div class="container-input">
      <div class="icon-input">
        <img
          id="search"
          src="../assets/icon-svg/search-outline.svg"
          alt="search"
        />
      </div>
      <div>
        <input
          id="placeholder-text"
          type="text"
          name="filter"
          v-model="searchInput"
          placeholder="Search for a country..."
          src="../assets/icon-svg/search-outline.svg"
        />
      </div>
    </div>
    <div>
      <select @change="filter" v-model="searchSelect">
        <option value="" disabled selected hidden>Filter by Region</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      selected: "Filter by Region",
    };
  },
  computed: {
    ...mapGetters({ filter: "filter" }),
    ...mapState({ listCountry: "listCountry" }),
    searchInput: {
      get() {
        return this.$store.state.searchInput;
      },
      set(valor) {
        this.$store.commit("setSearchInput", valor);
      },
    },

    filter() {
      return this.filter;
    },

    searchSelect: {
      get() {
        return this.$store.state.searchSelect;
      },
      set(valor) {
        this.$store.commit("setSearchSelect", valor);
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/sass/_variables.scss";

.container-search {
  display: grid;
  grid-template-columns: 10fr 2fr;
  padding-top: 20px;

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  }
  margin-left: 10px;

  .container-input {
    display: grid;
    grid-template-columns: 1px 242px;
    .icon-input {
      margin-top: 10px;
      padding-left: 10px;
    }

    img {
      width: 22px;
      position: relative;
      width: 15px;
    }

    input {
      width: 350px;
      @media screen and (max-width: 1440px) {
        min-width: 150px;
        width: 262px;
        margin-bottom: 10px;
      }
      height: 40px;
      display: flex;
      align-items: stretch;
      border: none;
      border-radius: 4px;
      box-shadow: 0px 0px 6px 0px $mediumGray;
      color: $mediumGray;
      background-color: var(--body-white);
    }

    input:focus {
      outline: none;
    }

    #placeholder-text {
      padding-left: 31px;
    }
  }

  select {
    min-width: 175px;
    height: 40px;
    border: none;
    box-shadow: 0px 0px 6px 0px $mediumGray;
    background-color: var(--body-white);
    border-radius: 4px;
    color: $mediumGray;
    padding: 10px;
    float: right;
    margin-right: 25px;
    @media screen and (min-width: 375px) and (max-width: 668px) {
      float: left;
    }
  }

  select:focus {
    outline: none;
  }
}
</style>
