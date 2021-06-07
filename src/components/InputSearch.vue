<template>
  <div class="hello">
    <div>
      <input type="text" name="filterInput" v-model="searchInput" />
    </div>
    <div>
      <select @change="filterSelect" v-model="searchSelect">
        <option disabled>busca</option>
        <option v-for="item in listCountry" :key="item.id">
          {{ item.region }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "InputSearch",
  computed: {
    ...mapGetters(
      { filterInput: "filterInput" },
      { filterSelect: "filterSelect" }
    ),
    ...mapState({ listCountry: "listCountry" }),
    searchInput: {
      get() {
        return this.$store.state.searchInput;
      },
      set(valor) {
        this.$store.commit("setSearchInput", valor);
      },
    },

    filterInput() {
      return this.filterInput;
    },

    searchSelect: {
      get() {
        return this.$store.state.searchSelect;
      },
      set(valor) {
        this.$store.commit("setSearchSelect", valor);
      },
    },

    filterSelect() {
      return this.filterSelect;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
  min-width: 375px;
  max-width: 1075px;
}
</style>
