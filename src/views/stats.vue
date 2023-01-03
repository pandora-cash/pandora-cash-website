<template>
  <div class="schero__logo">
    <div class="grid">
      <div class="element">
        <h4 class="scfeatures__content-heading heading --h4">{{ $t('home.stats.blocks') }}</h4>
        <h3 class="scfeatures__content-heading heading --h3">{{show ? blocks : ''}}</h3>
      </div>
      <div class="element">
        <h4 class="scfeatures__content-heading heading --h4">{{ $t('home.stats.transfers') }}</h4>
        <h3 class="scfeatures__content-heading heading --h3">{{show ? transfers : ''}}</h3>
      </div>
      <div class="element">
        <h4 class="scfeatures__content-heading heading --h4">{{ $t('home.stats.accounts') }}</h4>
        <h3 class="scfeatures__content-heading heading --h3">{{show ? accounts : ''}}</h3>
      </div>
      <div class="element">
        <h4 class="scfeatures__content-heading heading --h4">{{ $t('home.stats.market-cap') }}</h4>
        <h3 class="scfeatures__content-heading heading --h3">{{ show ? '$'+marketCap :'' }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
      show: false,
      blocks: 0,
      transfers: 0,
      accounts: 0,
      assets: 0,
      price: 0,
      marketCap: 0,
      timeout: null,
    }
  },

  mounted(){
    this.load()
  },

  beforeUnmount() {
    clearTimeout(this.timeout)
  },

  methods: {
    async load(){

      try{
        const response = await fetch('https://seed.pandoracash.com:8443/chain');
        const json = JSON.parse(await response.text())

        this.blocks = json.height;
        this.transfers = json.transactions;
        this.accounts = json.accounts;
        this.assets = json.assets;
        this.supply = json.supply;

        const response3 = await fetch('https://imprezaftx.com:2053/price?pair=PCASH/USDT');
        this.price = await response3.text();

        let marketcap = Math.floor( this.supply * this.price / 100000 )
        if (marketcap > 1000000) marketcap = (marketcap/1000000).toFixed(2) + 'M'
        else if (marketcap > 100000) marketcap =(marketcap/1000) + 'K'

        this.marketCap = marketcap

        this.show = true;
      }catch(err){
        console.error(err)
      }

      this.timeout = setTimeout(()=>this.load(), 5000 )
    }
  },

}
</script>

<style scoped>

.grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
}

.grid .element{
  padding-top: 30px;
  padding-bottom: 30px;
}
.schero__logo{
  margin-top: 140px;
  margin-bottom: 50px;
}

@media screen and (max-width: 767px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 481px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

</style>