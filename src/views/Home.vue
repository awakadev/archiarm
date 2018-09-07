<template>
  <div id="wrapper" ref="wrapper">
    <!-- content-holder  -->
    <div class="content-holder">
      <!-- Page title -->
      <div class="dynamic-title">Portfolio Parallax</div>
      <!-- Page title  end-->
      <!-- content  -->
      <div class="content">
        <section class="parallax-section">
          <div class="parallax-inner">
            <div class="bg" data-bg="images/bg/1.jpg" data-top-bottom="transform: translateY(300px);" data-bottom-top="transform: translateY(-300px);" style="background-image: url('/images/bg/1.jpg')"></div>
            <div class="overlay"></div>
          </div>
          <div class="container">
            <div class="page-title">
              <div class="row">
                <div class="col-md-6">
                  <h2> Our Work <strong> Parallax</strong></h2>
                </div>
                <div class="col-md-6">
                  <ul class="creat-list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="portfolio-parallax.html">Portfolio Parallax</a></li>
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
            <div class="row"  v-for="(item, index) in items" :key="index">
              <div class="col-md-5" v-if="index % 2 === 1"></div>
              <div class="col-md-7">
                <div :class="['parallax-item', index % 2 === 0 ? 'left-direction': 'right-direction']">
                  <div class="paralax-media">
                    <ul class="creat-list">
                      <li><a href="#">{{item.tags.date}}</a></li>
                      <li><a href="#">{{item.tags.skill}}</a></li>
                      <li><a href="#">{{item.tags.type}}</a></li>
                    </ul>
                    <div class="paralax-wrap">
                      <img :src="item.img" class="respimg" alt="">
                    </div>
                  </div>
                  <div class="parallax-deck" data-top-bottom="transform: translateY(-200px);" data-bottom-top="transform: translateY(200px);" ref="top">
                    <div class="parallax-deck-item">
                      <h3>{{item.title}} <strong>{{item.strong}}</strong></h3>
                      <a href="portfolio-single.html" class="btn anim-button fl-l"><span>View Project</span><i class="fa fa-long-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5" v-if="index % 2 !== 1"></div>
            </div>
            <div class="content-nav">
              <ul>
                <li><a href="portfolio-parallax.html" class="text-link">previous  page</a></li>
                <li><a href="portfolio-parallax.html" class="text-link">next page</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <!-- content end -->
      <!-- content footer-->
      <div class="height-emulator"></div>
      <footer class="content-footer">
        <!--  container  -->
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <!-- Footer logo -->
              <div class="footer-item footer-logo">
                <a href="index.html"><img src="images/footer-logo.png" alt=""></a>
                <p>Our team takes over everything, from an idea and concept development to realization. We believe in traditions and incorporate them within our innovations.Client is the soul of the project.  </p>
              </div>
              <!-- Footer logo end -->
            </div>
            <!-- Footer info -->
            <div class="col-md-2">
              <div class="footer-item">
                <h4 class="text-link">Call</h4>
                <ul>
                  <li><a href="#">+7(111)123456789</a></li>
                  <li><a href="#">+1(000)987654321</a></li>
                </ul>
              </div>
            </div>
            <!-- Footer info end-->
            <!-- Footer info -->
            <div class="col-md-2">
              <div class="footer-item">
                <h4 class="text-link">Write</h4>
                <ul>
                  <li><a href="#">yourmail@domain.com</a></li>
                  <li><a href="#">email@website.com</a></li>
                </ul>
              </div>
            </div>
            <!-- Footer info-->
            <!-- Footer info end-->
            <div class="col-md-2">
              <div class="footer-item">
                <h4 class="text-link">Visit</h4>
                <ul>
                  <li><span>USA 27TH BROOKLYN NY</span></li>
                  <li> <a href="" target="_blank">View on map</a></li>
                </ul>
              </div>
            </div>
            <!-- Footer info end-->
          </div>
          <!-- Footer copyright -->
          <div class="row">
            <div class="col-md-6"></div>
            <div class="col-md-6">
              <div class="footer-wrap">
                                        <span class="copyright">  &#169; Monolit   2016.  All rights reserved.
                                        </span>
                <span class="to-top">To Top</span>
              </div>
            </div>
          </div>
          <!-- Footer copyright end -->
        </div>
        <!--  container  end -->
        <!-- Hover animation  -->
        <canvas class="particular"></canvas>
        <!-- Hover animation  end -->
      </footer>
      <!-- content footer end -->
      <!-- share  -->
      <div class="share-inner">
        <div class="share-container  isShare"  data-share="['facebook','googleplus','twitter','linkedin']"></div>
        <div class="close-share"></div>
      </div>
      <!-- share end -->
    </div>
    <!-- content-holder  end-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data () {
    return {
      scrl: false,
      items: [
        {
          tags: {
            date: '02 December',
            skill: 'Architecture',
            type: 'Wood'
          },
          img: 'images/folio/thumbs/1.jpg',
          title: 'Donec rhoncus',
          strong: 'uccumsan dolor'
        },
        {
          tags: {
            date: '12 April',
            skill: 'Interior',
            type: 'Construction'
          },
          img: 'images/folio/thumbs/1.jpg',
          title: 'Sed ut Fusce',
          strong: 'unde ligula'
        },
        {
          tags: {
            date: '25 november',
            skill: 'Architecture',
            type: 'Interior'
          },
          img: 'images/folio/thumbs/1.jpg',
          title: 'Perspiciatis',
          strong: 'Maecenas porta'
        },
        {
          tags: {
            date: '02 December',
            skill: 'Architecture',
            type: 'Construction'
          },
          img: 'images/folio/thumbs/1.jpg',
          title: 'Etiam et',
          strong: 'unde accumsan'
        }
      ]
    }
  },
  methods: {
    handleScroll (event) {
      if (!this.scrl) {
        this.skrollr.init({
          easing: 'easeInOutElastic'
        })
        this.scrl = true
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
    this.skrollr.init().destroy()
    this.scrl = false
  }
}
</script>
