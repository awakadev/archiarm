<template>
    <div>
        <div class="dynamic-title">Контакт</div>
        <!-- content  -->
        <div class="content">
            <section class="parallax-section">
                <div class="parallax-inner">
                    <div class="bg" data-bg="images/bg/1.jpg" data-top-bottom="transform: translateY(300px);" data-bottom-top="transform: translateY(-300px);"></div>
                    <div class="overlay"></div>
                </div>
                <div class="container">
                    <div class="page-title">
                        <div class="row">
                            <div class="col-md-6">
                                <h2> Our <strong> Contacts </strong></h2>
                            </div>
                            <div class="col-md-6">
                                <ul class="creat-list">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- content end -->
        <!-- content  -->
        <div class="content">
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <h2 class="section-title">Where to <strong>Find us </strong></h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="contact-details">
                                <div class="row">
                                    <div class="col-md-4">
                                        <h3 class="bold-title">Contact  details : </h3>
                                    </div>
                                    <div class="col-md-4">
                                        <h4>Office in New York</h4>
                                        <ul>
                                            <li><a href="#">27th Brooklyn New York, NY 10065</a></li>
                                            <li><a href="#">+7(111)123456789</a></li>
                                            <li><a href="#">yourmail@domain.com</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <h4>Find Us On : </h4>
                                        <ul>
                                            <li><a href="#">Facebook</a></li>
                                            <li><a href="#">Twitter </a></li>
                                            <li><a href="#">Instagram</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- content end-->
    </div>
</template>

<script>
export default {
  name: 'Contact',

  data () {
    return {}
  },

  mounted () {
    // this.$store.dispatch('setTrigger', { page: 'contact', contact: true })
    this.$store.dispatch('clickPage', { page: 'home' })
  }

  // destroyed () {
  //   this.$store.dispatch('setTrigger', { contact: false })
  // }
}
</script>
