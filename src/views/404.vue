<template>
    <div class="content hor-content full-height">
        <div class="dynamic-title">404</div>
        <!-- Hero section   -->
        <div class="hero-wrap">
            <!-- Hero image   -->
            <div class="bg" data-bg="images/bg/1.jpg"></div>
            <!-- Hero image   end -->
            <div class="overlay"></div>
            <!-- Hero text   -->
            <div class="hero-wrap-item nFound-page-wrap">
                <span class="nFound-Page">404</span>
                <h2>Page not found</h2>
                <router-link to="/" class="hero-link">Back to home pag</router-link>
            </div>
            <!-- Hero text   end-->
        </div>
        <!-- Hero section   end -->
    </div>
</template>

<script>
export default {
  name: 'NoFindPage',

  data () {
    return {}
  },

  mounted () {
    this.$store.dispatch('clickPage', { page: '404' })
  }
}
</script>
