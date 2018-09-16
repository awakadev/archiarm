<template>
    <div id="app">
        <app-header/>
        <div id="wrapper">
            <div class="content-holder">
                <div class="hide" id="trigger-header" ref="header"></div>
                <div class="hide" id="trigger-page" ref="page"></div>
                <router-view/>
                <div class="height-emulator"></div>
                <app-bottom/>
                <app-share/>
            </div>
        </div>
        <app-footer/>
    </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Bottom from './components/Bottom'
import Share from './components/Share'

export default {
  name: 'App',

  data () {
    return {}
  },

  // computed: {
  //   trigger () {
  //     return this.$store.getters.trigger
  //   }
  // },
  //
  // watch: {
  //   'trigger.header': function (val, oldVal) {
  //     if (this.trigger[this.trigger.page]) {
  //       this.$refs.header.click()
  //       console.log('header 1')
  //     }
  //   },
  //   'trigger.page': function (val, oldVal) {
  //     if (this.trigger.header) {
  //       this.$refs.header.click()
  //       console.log('header 2')
  //     }
  //     this.$refs.page.click()
  //     console.log('page')
  //   },
  //   trigger: function (val, oldVal) {
  //     console.log('trigger')
  //   }
  // },

  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-bottom': Bottom,
    'app-share': Share
  }
}
</script>

<style>
    .hide {
        display: none;
    }
</style>
