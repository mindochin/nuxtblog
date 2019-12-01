import Vue from 'vue'
import VuetifyMessage from 'vuetify-message'
Vue.use(VuetifyMessage, {
  timeout: 5000,
  property: '$message',
  x:''
})
