<template>
    <header class="fw-head">
        <!-- header-inner  -->
        <div class="header-inner">
            <!-- header logo -->
            <div class="logo-holder">
                <a href="index.html"><img src="images/logo.png" alt=""></a>
            </div>
            <!-- header logo end -->
            <!-- mobile nav button -->
            <div class="nav-button-holder">
                <div class="nav-button vis-m"><span></span><span></span><span></span></div>
            </div>
            <!-- mobile nav button end -->
            <!-- navigation  -->
            <div class="nav-holder">
                <nav>
                    <ul>
                        <li><router-link to="/" active-class="act-link" exact>{{ $t('home') }}</router-link></li>
                        <li><router-link to="/portfolio" active-class="act-link" exact>{{ $t('portfolio') }}</router-link></li>
                        <li><router-link to="/about" active-class="act-link" exact>{{ $t('about') }}</router-link></li>
                        <li><router-link to="/services" active-class="act-link" exact>{{ $t('services') }}</router-link></li>
                        <li><router-link to="/contact" active-class="act-link" exact>{{ $t('contact') }}</router-link></li>
                        <li v-if="$i18n.locale === 'en'"><a href="" @click.prevent="$i18n.locale = 'ru'">RU</a></li>
                        <li v-else><a href="" @click.prevent="$i18n.locale = 'en'">EN</a></li>
                    </ul>
                </nav>
            </div>
            <!-- navigation  end -->
        </div>
        <!-- header-inner  end -->
        <!-- share button  -->
        <div class="show-share isShare">
            <span>Share</span>
            <i class="fa fa-chain-broken"></i>
        </div>
        <!-- share  end-->
    </header>
</template>

<script>
export default {
  name: 'Header',

  mounted () {
    // this.$store.dispatch('setTrigger', { header: true })
  }
}
</script>

<style>
    .header-hide {
        display: none;
    }
</style>
