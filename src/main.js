import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueQrcodeReader from "vue3-qrcode-reader"

import NaiveUI from 'naive-ui'

import App from './App.vue'

import "tailwindcss/tailwind.css"

import "./app.css"

import store from './store'

import router from './router.js'

import HtmlToPaper from "./plugins/htmltopeper.js"

const pinia = createPinia()
const app = createApp(App)

app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios) 
app.use(VueQrcodeReader)
app.use(NaiveUI)
app.use(HtmlToPaper)
app.use(pinia)
app.use(store)
app.use(router)
app.mount('#app')