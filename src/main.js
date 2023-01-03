import * as Vue from 'vue'
import App from './app'
import router from  "./router/router"

import { createI18n } from "vue-i18n";
import en from "./localization/en"
import ru from "./localization/ru"

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en', // set fallback locale
    messages: {
        en,
        ru,
    },
})

const app = Vue.createApp({
    render () {
        return Vue.h( App, {});
    }
});

document.addEventListener('DOMContentLoaded', function () {


    const app = Vue.createApp({
        render () {
            return Vue.h( App, {});
        }
    });

    app.use(router);
    app.use(i18n);
    app.mount('#app')

    document.dispatchEvent(new Event('render-event'))

})

