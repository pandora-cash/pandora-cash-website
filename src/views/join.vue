<template>
  <section class="sccta">
    <div class="container">
      <div>
        <img class="sccta__logo --center" src="/static/img/sphere-hero.png" alt="" draggable="false" loading="lazy">
      </div>
      <div class="textbox">
        <h2 class="textbox__heading heading --h2">{{ $t('home.join.title') }}</h2>
        <p class="textbox__des"><strong>{{ $t('home.exchanges.tagline') }}</strong></p>
      </div>
      <div class="grid">
        <div class="element">
          <a href="https://imprezaftx.com/" title="ImprezaFTX" target="_blank">
            <img src="/static/img/exchanges/imprezaFTX.png" class="logo"/>
          </a>
        </div>
        <div class="element">
        </div>
        <div class="element">
          <a href="https://libertytown.org/" title="Liberty Town decentralized market" target="_blank">
            <img src="/static/img/dapps/liberty-town.png" class="logo" alt="LibertyTown decentralized market"/>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo {
  width: 50%
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
}

.grid .element {
  padding-top: 30px;
  padding-bottom: 30px;
}

.grid .element a {
  display: block;
}

@media screen and (max-width: 767px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 481px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>