// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import board from './components/showBoard/board'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
    el: '#wrapper',
    components: {
        board
    }
})