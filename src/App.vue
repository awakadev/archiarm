<template>
    <div id="app">

        <app-header/>
        <router-view/>
        <app-footer/>

    </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',

  data () {
    return {}
  },

  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>
