<template>
  <div class="home">
    <section class="cards">
      <article class="card">
        <div
          class="card-img"
          :style="{ backgroundImage: `url(${list.flag})` }"
        ></div>
        <div
          class="card-img--hover"
          :style="{ backgroundImage: `url(${list.flag})` }"
        ></div>

        <div class="card-info">
          <h2 class="card-title">{{ list.name }}</h2>
          <div>
            <h3 class="card-title">
              <span>Population:</span> {{ list.population }}
            </h3>
            <h3 class="card-title"><span>Region:</span> {{ list.region }}</h3>
            <h3 class="card-title"><span>Capital:</span> {{ list.capital }}</h3>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "ListCountry",
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_variables.scss";

.cards {
  width: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  -webkit-justify-content: center;
  max-width: 820px;
  font-size: $font-size-homepage;

  .card-img {
    visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 200px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .card-info-hover {
    position: absolute;
    padding: 16px;
    width: 100%;
    opacity: 0;
    top: 0;
  }

  .card-img--hover {
    transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 200px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    top: 0;
  }

  .card {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
    background-color: $white;
    width: 100%;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 13px 10px -7px $mediumGray;
  }

  .card:hover {
    box-shadow: 0px 30px 18px -8px $mediumGray;
    transform: scale(1.1, 1.1);
  }

  .card-info {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px 24px 24px 24px;
  }

  .card-title {
    margin-top: 5px;
    margin-bottom: 10px;
    font-weight: $weights300;
  }

  h3,
  h2.card-title {
    text-align: left;
    color: $mediumBlue;
    font-weight: $weights800;
  }

  span {
    font-weight: $weights800;
  }

  .card:hover .card-img--hover {
    height: 100%;
    opacity: 0.3;
  }

  .card:hover .card-info {
    background-color: transparent;
    position: relative;
  }

  .card:hover .card-info-hover {
    opacity: 1;
  }
}
</style>
