import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.interceptors.push((req, next) => {
  next(res => res)
})

export const apiUrlLocal = 'http://localhost:3030'
export const apiUrlGoogle = {
  api: 'https://www.googleapis.com/books/v1',
  props: [
    { vol:'volumes?q' },
    { orderBy: 'orderBy=newest' },
    { printType: 'printType=' }
  ]
}
