<template>
  <layout>

    <section class="scheaddetail" style="padding-top: 150px">
      <div class="container --small">
        <ul class="scheaddetail__bread breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/articles">Articles</router-link></li>
          <li><router-link to="" class="current">{{ title }}</router-link></li>
        </ul>
        <h1 class="heading --h2">{{ title }}</h1>
        <div class="scheaddetail__info">
          <div class="scheaddetail__info-item"><i>
            <img src="/static/img/icontime.svg" alt="time" draggable="false" loading="lazy"></i><b>31.12.2022</b>
          </div>
        </div>
      </div>
    </section>

    <section class="scdetail">
      <div id="fixed-scdetail" class="container --small">
        <div class="scdetail__featured" v-if="img">
          <img :src="img" :alt="title">
        </div>
        <div class="scdetail__inner">
          <div class="scdetail__content">
            <div id="fixed-share" class="scdetail__content-inner contentdetail">
              <slot/>
            </div>
            <div class="scdetail__content-share-container" data-scroll-target="#fixed-share">
              <div class="share"><p class="title">SHARE</p>
                <ul>
                  <li>
                    <div class="tooltip">Share on Twitter</div>
                    <a :href="`http://twitter.com/share?text=${title}&amp;url=${page}&amp;hashtags=pcash`"><img
                        src="/static/img/icontwitter.svg" alt="" draggable="false" loading="lazy"></a>
                  </li>
                  <li>
                    <div class="tooltip">Share on Facebook</div>
                    <a :href="`https://www.facebook.com/sharer.php?u=${page}`"><img
                        src="/static/img/iconfacebook.svg" alt="" draggable="false" loading="lazy"></a>
                  </li>
                  <li>
                    <div class="tooltip">Share on LinkedIn</div>
                    <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${page}`"><img
                        src="/static/img/iconin.svg" alt="" draggable="false" loading="lazy"></a>
                  </li>
<!--                  <li>-->
<!--                  <div class="tooltip copy-link">Copy the link</div>-->
<!--                    <a class="clipboard"><img src="/static/img/iconcopylink.svg" alt="" draggable="false" loading="lazy"></a>-->
<!--                  </li>-->
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="bgblurblog" data-scroll-target="#fixed-scdetail">
          <img src="/static/img/bgblur-blog.webp" alt="" draggable="false">
        </div>
      </div>
    </section>

  </layout>
</template>

<script>
require('./article.css')
import layout from "../../layout"

export default {
  components: {layout},
  props: {
    title: {default: ""},
    img: {default: ""},
  },
  data(){
    return {
      page: window.location.href,
    }
  },
  mounted(){
    window.scrollTo(0, 0)
  }
}
</script>
