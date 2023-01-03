<template>
  <layout>
    <div class="scmainblog --pdtop" style="padding-top: 150px">
      <div id="fixed-bgblurblog" class="container --small">
        <div class="scmainblog__texttop"><label class="labelmain">The articles</label>
          <h1 class="heading">Privacy is the Pandora's Box</h1>
        </div>

        <div style="padding-top: 150px"></div>

        <div class="blog-tertiary-preview-list" v-for="(it, key ) in articles" :key="`article${key}`">
          <div class="scmainblog__item --fadeInTop is-inview">
            <div class="contentblog">
              <p :class="`label --${it.flag}`">{{it.category}}</p>
              <router-link :to="`${it.link}`">
                <h2 class="heading --h3">{{it.title}}</h2>
              </router-link>
            </div>
            <div class="imgblog" v-if="it.img">
              <router-link :to="`${it.link}`">
                <img :src="it.img" :alt="it.title">
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../../layout";

require('./article.css')
export default {
  components: {Layout},

  data(){
    return {
      articles: [
        {
          category:"privacy",
          title: "How to send money anonymously?",
          flag: "red",
          description: "",
          img: "/static/img/articles/how-to-send-money-anonymously.jpg",
          link: "/how-to-send-money-anonymously",
        },
        {
          category:"privacy",
          title: "How to receive money anonymously?",
          flag: "red",
          description: "",
          img: "/static/img/articles/how-to-receive-money-anonymously.jpg",
          link: "/how-to-receive-money-anonymously",
        },
        {
          category:"privacy",
          title: "What is a Privacy Coin?",
          flag: "red",
          description: "",
          img: "/static/img/articles/privacy-coin.jpg",
          link: "/privacy-coin",
        },
        {
          category:"privacy",
          title: "What are the Privacy Coins?",
          flag: "red",
          description: "",
          img: "/static/img/articles/privacy-coins.jpg",
          link: "/privacy-coins",
        },
        {
          flag: "purple",
          category:"economy",
          title: "The economic challenges of Bitcoin",
          description: "",
          img: "/static/img/articles/economic-challenges-bitcoin.jpg",
          link: "/economic-challenges-bitcoin",
        },
        {
          flag: "purple",
          category:"bitcoin",
          title: "What is Bitcoin?",
          description: "",
          img: "/static/img/articles/what-is-bitcoin.jpg",
          link: "/what-is-bitcoin",
        },
        {
          flag: "purple",
          category:"bitcoin",
          title: "History of Bitcoin: Why and when was it created?",
          description: "",
          img: "/static/img/articles/history-of-bitcoin.jpg",
          link: "/history-of-bitcoin",
        },
        {
          flag: "yellow",
          category: "security",
          title: "Monero anonymity? How good is it?",
          description: "",
          img: "/static/img/articles/monero-anonymity.jpg",
          link: "/monero-anonymity",
        }
      ],
    }
  },

  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>