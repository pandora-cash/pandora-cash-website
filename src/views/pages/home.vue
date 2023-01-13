<template>
  <layout>
    <section class="schero">
      <div class="container">
        <div class="schero__wrap">
          <div class="schero__content">
            <h1 class="schero__content-heading heading --h1">{{ $t('home.hero.title') }}</h1>
            <p class="schero__content-text --white-cl">
              {{ $t('home.hero.tagline') }}
            </p>
            <div class="schero__content-form">
              <div class="btn" style="margin-left: 0">
                <a href="https://wallet.pandoracash.com/" target="_blank">{{ $t('home.hero.button-webwallet') }}</a>
              </div>
              <div class="btn">
                <router-link to="/download">{{ $t('home.hero.button-download') }}</router-link>
              </div>
            </div>
            <ul class="schero__content-checklist">
              <li><i><img src="/static/img/iconchecked.svg" alt="" draggable="false"></i>
                <span class="break-word">{{ $t('home.hero.check1') }}</span>
              </li>
              <li><i><img src="/static/img/iconchecked.svg" alt="" draggable="false"></i>
                <span class="break-word">{{ $t('home.hero.check2') }}</span>
              </li>
              <li><i><img src="/static/img/iconchecked.svg" alt="" draggable="false"></i>
                <span class="break-word">{{ $t('home.hero.check3') }}</span>
              </li>
            </ul>
          </div>
          <div class="schero__img">
            <div class="schero__img-earth">
              <img class="bgearth" src="/static/img/sphere-hero.png" alt="" width="480" height="480" draggable="false">
              <canvas width="690" height="690" style="width: 460px; height: 460px;"></canvas>
            </div>
            <div class="schero__img-bg">
              <img src="/static/img/bgblur-hero.png" alt="" draggable="false"></div>
          </div>
        </div>

        <stats id="stats"/>

        <exchanges id="exchanges" style="padding-top: 50px"/>
        <dapps id="dapps" style="padding-top: 50px"/>
        <!--              <partners id="partners" style="padding-top: 50px" />-->

      </div>

      <div class="bgstart">
        <div class="stars"></div>
        <div class="twinkling"></div>
      </div>

    </section>


    <section class="scfeatures" id="how-it-works">
      <div class="container">
        <div class="scfeatures__row">
          <div class="scfeatures__img"><img src="/static/img/config-home.webp" alt="" draggable="false" loading="lazy">
          </div>
          <div class="scfeatures__content">
            <h2 class="scfeatures__content-heading heading --h3">{{ $t('home.how-it-works.feature1.title') }}</h2>
            <p class="scfeatures__content-text">{{ $t('home.how-it-works.feature1.content') }}</p></div>
          <div class="scfeatures__line"><img src="/static/img/line1-home.svg" alt="" draggable="false" loading="lazy">
          </div>
        </div>
        <div class="scfeatures__row --reverse">
          <div class="scfeatures__img"><img src="/static/img/pandora-cash-wallet.png" alt="Pandora Cash wallet"
                                            draggable="false" loading="lazy"></div>
          <div class="scfeatures__content">
            <h2 class="scfeatures__content-heading heading --h3">{{ $t('home.how-it-works.feature2.title') }}</h2>
            <p class="scfeatures__content-text">{{ $t('home.how-it-works.feature2.content') }} <a
                class="btnlink --regular" href="https://wallet.pandorcash.com/">wallet.pandoracash.com</a></p></div>
          <div class="scfeatures__line"><img src="/static/img/line2-home.svg" alt="" draggable="false" loading="lazy">
          </div>
        </div>
        <div class="scfeatures__row">
          <div class="scfeatures__img"><img src="/static/img/clound-home.png" alt="" draggable="false" loading="lazy">
          </div>
          <div class="scfeatures__content">
            <h2 class="scfeatures__content-heading heading --h3">{{ $t('home.how-it-works.feature3.title') }}</h2>
            <p class="scfeatures__content-text">{{ $t('home.how-it-works.feature3.content') }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="scfeatureslist" id="features">
      <div class="scfeatureslist__inner">
        <div class="container --small">
          <div class="textbox">
            <h3 class="textbox__heading heading --h2">{{ $t('home.other-features.title') }}</h3>
            <p class="textbox__des">{{ $t('home.other-features.tagline') }}</p></div>
          <div class="features__list">
            <div class="features__item is-inview">
              <div class="features__item-img">
                <img src="/static/img/code-search.png" alt="" draggable="false" loading="lazy">
              </div>
              <div class="features__item-content">
                <h4 class="heading --h4">{{ $t('home.other-features.feature1.title') }}</h4>
                <p class="des">{{ $t('home.other-features.feature1.content') }}</p>
              </div>
            </div>
            <div class="features__item is-inview">
              <div class="features__item-img">
                <img src="/static/img/sync.png" alt="sync in seconds" draggable="false" loading="lazy">
              </div>
              <div class="features__item-content">
                <h4 class="heading --h4">{{ $t('home.other-features.feature2.title') }}</h4>
                <p class="des">{{ $t('home.other-features.feature2.content') }}</p>
              </div>
            </div>
            <div class="features__item is-inview">
              <div class="features__item-img">
                <img src="/static/img/multi-assets.png" alt="" draggable="false" loading="lazy">
              </div>
              <div class="features__item-content">
                <h4 class="heading --h4">{{ $t('home.other-features.feature3.title') }}</h4>
                <p class="des">{{ $t('home.other-features.feature3.content') }}</p>
              </div>
            </div>

            <div class="features__item-content" style="margin-top: 150px">
              <img src="/static/img/comparison.png">
            </div>

          </div>

        </div>
        <div class="scfeatureslist__bgblur" data-scroll-target="#fixed-scfeatureslist">
          <img src="/static/img/bgblur-hero.png" alt="" draggable="false" loading="lazy">
        </div>
      </div>
      <div class="scfeatureslist__bg">
        <picture>
          <source media="(max-width:500px)" srcset="/static/img/bg-features-small.png">
          <source media="(max-width:991px)" srcset="/static/img/bg-features-mid.png">
          <img src="/static/img/bg-features-large.webp" alt="" draggable="false" loading="lazy">
        </picture>
      </div>
    </section>
    <join/>
    <section class="schelp">
      <div class="container">
        <div class="schelp__box"><i class="schelp__box-icon">
          <img src="/static/img/stop-privacy.png" alt="" draggable="false" loading="lazy"></i>
          <i class="schelp__box-content">
            <h4 class="heading --h4">{{ $t('home.footer.left.title') }}</h4>
            <p class="des">{{ $t('home.footer.left.content') }}</p>
          </i>
        </div>
        <div class="schelp__divide"></div>

        <div class="schelp__box">
          <i class="schelp__box-icon">
            <img src="/static/img/iconbook.svg" alt="" draggable="false" loading="lazy">
          </i>
          <i class="schelp__box-content">
            <h4 class="heading --h4">{{ $t('home.footer.right.title') }}</h4>
            <p class="des">{{ $t('home.footer.right.content') }}</p>
            <a class="btnlink --regular" href="https://github.com/pandora-cash/go-pandora-pay/blob/main/docs/api.md"
               target="_blank" rel="noopener">{{ $t('home.footer.right.link') }}</a>
          </i>
        </div>
      </div>
    </section>

  </layout>

</template>

<script>

import theme from "../res"
import stats from "../stats"
import exchanges from "../exchanges"
import partners from "../partners"
import dapps from "../dapps"
import join from "../join";
import layout from "../layout"
import Meta from "../../meta"

export default {

  components: {join, stats, exchanges, layout, partners, dapps},

  mounted() {
    theme.init()
    window.scrollTo(0, 0)
  },

  beforeCreate(){
    Meta.SetTitle()
    Meta.SetDescription()
    Meta.SetKeywords()
    Meta.SetImage()
    Meta.SetUrl("/")
    Meta.SetType()
  }

}
</script>

<style>
.break-word {
  word-break: break-word;
}

.schero__content-form div {
  display: inline-block;
  margin-left: 10px
}
</style>