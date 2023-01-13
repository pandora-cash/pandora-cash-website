<template>
  <layout>

    <div style="padding-top: 150px"/>

    <ul class="scheaddetail__bread breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
      <li property="itemListElement" typeof="ListItem">
        <router-link to="/" property="name">Home</router-link>
        <meta property="position" content="1">
      </li>
      <li property="itemListElement" typeof="ListItem">
        <router-link to="/articles" property="name">Articles</router-link>
        <meta property="position" content="2">
      </li>
      <li property="itemListElement" typeof="ListItem">
        <span class="current" property="name">{{ title }}</span>
        <meta property="position" content="3">
      </li>
    </ul>

    <div itemscope itemtype="https://schema.org/NewsArticle">

      <section class="scheaddetail">
        <div class="container --small">
          <h1 class="heading --h2" itemprop="headline">{{ title }}</h1>
          <meta v-if="img" itemprop="image" :content="img" />
          <div class="scheaddetail__info">
            <div class="scheaddetail__info-item">
              <i><img src="/static/img/icontime.svg" alt="time" draggable="false" loading="lazy"></i>
              <b itemprop="datePublished" :content="date.toUTCString()">{{date.toLocaleString()}}</b>
              <span v-if="dateModified" itemprop="dateModified" :content="date.toUTCString()">{{date.toLocaleString()}}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="scdetail">
        <div id="fixed-scdetail" class="container --small">
          <div class="scdetail__featured" v-if="img">
            <img :src="img" :alt="title" itemprop="image">
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
                          src="/static/img/icontwitter.svg" alt="share on twitter" draggable="false" loading="lazy"></a>
                    </li>
                    <li>
                      <div class="tooltip">Share on Facebook</div>
                      <a :href="`https://www.facebook.com/sharer.php?u=${page}`"><img
                          src="/static/img/iconfacebook.svg" alt="share on facebook" draggable="false" loading="lazy"></a>
                    </li>
                    <li>
                      <div class="tooltip">Share on LinkedIn</div>
                      <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${page}`"><img
                          src="/static/img/iconin.svg" alt="share on LinkedIn" draggable="false" loading="lazy"></a>
                    </li>
                    <!--                  <li>-->
                    <!--                  <div class="tooltip copy-link">Copy the link</div>-->
                    <!--                    <a class="clipboard"><img src="/static/img/iconcopylink.svg" alt="copy link" draggable="false" loading="lazy"></a>-->
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
    </div>

  </layout>
</template>

<script>
import layout from "../../layout"

export default {
  components: {layout},
  props: {
    title: {default: ""},
    img: {default: ""},
    date: {default: null},
    dateModified: {default: null},
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
