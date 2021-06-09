<template>
  <div class="container-details">
    <div>
      <div>
        <router-link to="/">
          <button>
            <img
              src="../assets/icon-svg/arrow-back-outline.svg"
              alt="Moon"
            />Back
          </button>
        </router-link>
      </div>
      <div
        class="card-img"
        :style="{ backgroundImage: `url(${$route.params.flag})` }"
      ></div>
    </div>
    <div>
      <div class="card-info">
        <h2 class="card-title">{{ $route.params.name }}</h2>
        <div>
          <h3 class="card-title">
            <span>Native Name:</span> {{ $route.params.nativeName }}
          </h3>
          <h3 class="card-title">
            <span>Population:</span> {{ $route.params.population }}
          </h3>
          <h3 class="card-title">
            <span>Region:</span> {{ $route.params.region }}
          </h3>
          <h3 class="card-title">
            <span>Sub Region:</span> {{ $route.params.subregion }}
          </h3>
          <h3 class="card-title">
            <span>Capital:</span> {{ $route.params.capital }}
          </h3>
        </div>
      </div>
      <div>
        <h3 class="card-title">
          <span>Border Countries: </span>
          <div
            class="borders"
            v-for="details in $route.params.borders"
            :key="details.id"
          >
            {{ details }},
          </div>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "details",
};
</script>
<style scoped lang="scss">
@import "../assets/sass/_variables.scss";

.container-details {
  display: grid;
  grid-template-columns: 8fr 7fr;
  @media screen and (min-width: 375px) and (max-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(267px, 2fr));
    padding-left: 0px;
  }
  grid-gap: 50px;
  margin-top: 50px;
  padding-left: 37px;

  .card-info {
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: $font-size-detail;
    margin-top: 50px;
    padding-bottom: 50px;
  }

  .card-title {
    margin-top: 5px;
    margin-bottom: 10px;
    font-weight: $weights300;

    .borders {
      display: inline-block;
    }
  }

  h3,
  h2.card-title {
    text-decoration: none;
    text-align: left;
    color: $mediumBlue;
    font-weight: $weights800;
    color: var(--body-color);
  }

  span {
    font-weight: $weights800;
    color: var(--body-color);
  }

  .card-img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 60vh;
  }

  button {
    background-color: var(--body-white);
    border: none;
    color: var(--body-color);
    position: relative;
    bottom: 21px;
    display: flex;
    align-items: stretch;
    cursor: pointer;
    box-shadow: 0px 0px 6px 0px $mediumGray;
    border-radius: 4px;
    padding: 11px 15px 1px;
    img {
      width: 22px;
      position: relative;
      bottom: 4px;
      padding-right: 7px;
    }
  }

  a {
    text-decoration: none;
  }
}
</style>
