import {createRouter, createWebHistory} from "vue-router"

import Home from "src/views/pages/home"
import Download from "src/views/pages/download"
import BlogPrivacyCoin from "../views/pages/blog/privacy-coin"
import BlogPrivacyCoins from "../views/pages/blog/privacy-coins"
import BlogWhatIsBitcoin from "../views/pages/blog/what-is-bitcoin"
import BlogEconomicChallengesOfBitcoin from "../views/pages/blog/economic-challenges-of-bitcoin"
import BlogHistoryOfBitcoin from "../views/pages/blog/history-of-bitcoin"
import BlogMoneroAnonymity from "../views/pages/blog/monero-anonymity"
import BlogHowToSendMoneyAnonymously from "../views/pages/blog/how-to-send-money-anonymously"
import BlogHowToReceiveMoneyAnonymously from "../views/pages/blog/how-to-receive-money-anonymously"
import BlogPandoraWallet from "../views/pages/blog/pandora-wallet"
import BlogPrivacyCoinsList from "../views/pages/blog/privacy-coins-list"
import BlogUntraceableMoneyTransferApp from "../views/pages/blog/untraceable-money-transfer-app"
import Articles from "../views/pages/blog/articles"

const routes = [
    {path: '/', component: Home },
    {path: '/download', component: Download },
    {path: '/articles', component: Articles },
    {path: '/privacy-coin', component: BlogPrivacyCoin },
    {path: '/privacy-coins', component: BlogPrivacyCoins },
    {path: '/what-is-bitcoin', component: BlogWhatIsBitcoin },
    {path: '/monero-anonymity', component: BlogMoneroAnonymity },
    {path: '/economic-challenges-bitcoin', component: BlogEconomicChallengesOfBitcoin },
    {path: '/history-of-bitcoin', component: BlogHistoryOfBitcoin },
    {path: '/how-to-send-money-anonymously', component: BlogHowToSendMoneyAnonymously },
    {path: '/how-to-receive-money-anonymously', component: BlogHowToReceiveMoneyAnonymously },
    {path: '/privacy-coins-list', component: BlogPrivacyCoinsList },
    {path: '/untraceable-money-transfer-app', component: BlogUntraceableMoneyTransferApp },
    {path: '/pandora-wallet', component: BlogPandoraWallet},
];

export default createRouter({
    base: '/',
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash && to.hash.length) return { selector: to.hash }
        if (savedPosition) return savedPosition;
        return { x: 0, y: 0 }
    },
    routes
});

