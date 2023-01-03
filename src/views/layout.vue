<template>
  <div>
    <nav :class="`navmobile ${menu ? '--show' : ''}`" id="home">
      <div class="navmobile__background blue-circle"></div>
      <div class="navmobile__background purple-circle"></div>
      <div class="navmobile__inner">
        <div class="navmobile__top">
          <div :class="`navmobile__button ${menu ? 'active' : ''}`" @click="menu = false">
            <span class="navmobile__button-line1"></span>
            <span class="navmobile__button-line2"></span>
          </div>
          <ul class="navmobile__menu">
            <li><router-link to="/#home" :class="route === '/' ? 'active' : ''">{{$t('menu.home')}}</router-link></li>
            <li><router-link to="/#exchanges">{{$t('menu.exchanges')}}</router-link></li>
            <li><router-link to="/#how-it-works">{{$t('menu.how-it-works')}}</router-link></li>
            <li><router-link to="/#features">{{$t('menu.features')}}</router-link></li>
            <li><a href="https://wallet.pandoracash.com/" target="_blank" rel="noopener">{{$t('menu.wallet')}}</a></li>
            <li><router-link to="/download" :class="route === '/download' ? 'active' : ''">{{$t('menu.download')}}</router-link></li>
            <li><router-link to="/articles" :class="route === '/articles' ? 'active' : ''">{{$t('menu.articles')}}</router-link></li>
            <li>
              <div class="navmobile-select-language">
                <img :src="'/static/img/lang/'+$i18n.locale+'.png'">
                <select class="select-language" v-model="$i18n.locale">
                  <option value="en">English</option>
                  <option value="ru">Русский</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="wrapper">
      <header class="header">
        <div class="header-background"></div>
        <div class="container-fluid">
          <router-link class="header__logo" to="/" aria-label="Home">
            <img src="/static/img/logo.png" alt="Pandora Cash" draggable="false" loading="lazy">
            <h1 class="title --t5">Pandora Cash</h1>
          </router-link>
          <div class="header__right">
            <ul class="header__nav">
              <li><router-link to="/#home" :class="route === '/' ? 'active' : ''">{{$t('menu.home')}}</router-link></li>
              <li><router-link to="/#exchanges">{{$t('menu.exchanges')}}</router-link></li>
              <li><router-link to="/#how-it-works">{{$t('menu.how-it-works')}}</router-link></li>
              <li><router-link to="/#features">{{$t('menu.features')}}</router-link></li>
              <li><a href="https://wallet.pandoracash.com/" target="_blank" rel="noopener">{{$t('menu.wallet')}}</a></li>
              <li><router-link to="/download" :class="route === '/download' ? 'active' : ''">{{$t('menu.download')}}</router-link></li>
              <li><router-link to="/articles" :class="route === '/articles' ? 'active' : ''">{{$t('menu.articles')}}</router-link></li>
              <li>
                <div class="header-select-language">
                  <img :src="'/static/img/lang/'+$i18n.locale+'.png'">
                  <select class="select-language" v-model="$i18n.locale">
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                  </select>
                </div>
              </li>
            </ul>
            <div class="header__btnmenu" @click="menu=true">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div class="scrollmain">
      <main class="mainwrapper">
        <slot/>
      </main>
    </div>

    <footer class="footer" data-scroll-position="bottom">
      <div class="container-fluid --grid-12">
        <div class="footer__brand">
          <div>
            <img class="footer__brand-logo" src="/static/img/sphere-hero.png" alt="" draggable="false" loading="lazy">
          </div>
          <p class="copy">Pandora Cash</p>
        </div>
        <div class="footer__right">
          <div class="footer__right-top">
            <div :class="`colnav ${footer1 ? 'active' : ''}`" @click="footer1=!footer1">
              <p class="title">{{ $t('footer.resources')}} <i></i></p>
              <div class="submenu">
                <ul>
                  <li><a href="https://github.com/pandora-cash/" target="_blank" rel="noopener">GitHub</a>
                  </li>
                  <li><a href="#">{{ $t('footer.faq')}}</a></li>
                </ul>
              </div>
            </div>
            <div :class="`colnav ${footer2 ? 'active' : ''}`" @click="footer2=!footer2">
              <p class="title">{{ $t('footer.communities')}}<i></i></p>
              <div class="submenu">
                <ul>
                  <li class="submenu-inline">
                    <a href="https://discord.com/invite/Fndv63dejC" target="_blank" rel="noopener"><img src="/static/img/discord.png"/></a>
                  </li>
                  <li class="submenu-inline">
                    <a href="https://t.me/PandoraCashOfficial" target="_blank" rel="noopener"><img src="/static/img/telegram.png"/></a>
                  </li>
                  <li class="submenu-inline">
                    <a href="https://github.com/pandora-cash/" target="_blank" rel="noopener"><img src="/static/img/github.png"/></a>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="`colnav --other ${footer3 ? 'active' : ''}`" @click="footer3=!footer3">
              <p class="title">{{ $t('footer.other')}} <i></i></p>
              <div class="submenu">
                <ul>
                  <li class="submenu-inline">
                    <router-link to="/articles">Articles</router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="colcontact">
              <div class="itemcontact"><label>{{ $t('footer.contact')}}</label>xiangwei pandoracash com</div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {

  data(){
    return {
      menu: false,
      footer1: false,
      footer2: false,
      footer3: false,
    }
  },

  computed:{
    route(){
      return this.$route.path
    }
  },

}
</script>

<style scoped>
.footer__right-top ul .submenu-inline {
  display: inline-block;
  padding-right: 10px;
}

.header-select-language{
  height: 100%;
  padding: 0 25px;
  position: relative;
  font-family: im, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
}

.header-select-language img{
  position: relative;
  left: 35px;
  top: -7px;
  width: 24px;
}

.navmobile-select-language img {
  position: relative;
  width: 24px;
  top: 36px;
  left: 12px;
}

.select-language {
  margin-bottom: 1.5rem;
  border: 1px solid rgba(129,75,246,.3);
  background: transparent;
  width: 100%;
  padding: 16px 30px 16px 40px;
  font-size: 1.25rem;
  color: var(--color-on-primary-1);
  transition: border ease 500ms;
}
.header-background{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(17, 1, 39, 0.7);
  backdrop-filter: blur(0.8);
  -webkit-backdrop-filter: blur(8px);
  z-index: -10;
}

</style>