<template>
  <div class="home">
    <InputSearch />
    <ListCountry />
    {{filterInput.length}}
    <pre>{{filterSelect}}</pre>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import InputSearch from "@/components/InputSearch.vue";
import ListCountry from "@/components/ListCountry.vue";

export default {
  name: "Home",
  components: {
    InputSearch,
    ListCountry,
  },
  computed: {
    ...mapGetters({ filterInput: "filterInput" }),
    ...mapGetters({ filterSelect: "filterSelect" }),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_variables.scss";

.home {
  height: 100%;
}
</style>
