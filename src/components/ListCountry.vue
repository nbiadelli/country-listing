<template>
  <div class="home">
    <!-- <pre>{{ filterInput }}</pre> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "ListCountry",
  created() {},
  computed: {
    ...mapGetters({ filterInput: 'filterInput' }),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_variables.scss";

</style>