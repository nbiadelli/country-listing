<template>
  <div class="home">
    <div><Search /></div>
    <div class="list-country">
      <div v-for="details in filter" :key="details.id">
        <router-link :to="{ name: 'details', params: { ...details } }">
          <ListCountry :list="details" />
        </router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import { mapGetters } from "vuex";
import Search from "@/components/Search.vue";
import ListCountry from "@/components/ListCountry.vue";

export default {
  name: "Home",
  components: {
    Search,
    ListCountry,
  },

  computed: {
    ...mapGetters({ filter: "filter" }),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_variables.scss";

a {
  text-decoration: none;
}

.home {
  height: 100%;
  margin: 20px;

  .list-country {
    display: grid;
    margin-top: 35px;
    grid-gap: 30px;
    grid-template-columns: 2fr 2fr 2fr 2fr;
    @media screen and (min-width: 375px) and (max-width: 1440px) {
      grid-template-columns: repeat(auto-fit, minmax(267px, 2fr));
    }
  }
}
</style>
