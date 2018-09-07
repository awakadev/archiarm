<template>
    <header>
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
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/portfolio">Portfolio</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                        <li><router-link to="/services">Services</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
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
  name: 'Header'
}
</script>
