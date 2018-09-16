<template>
    <div>
        <div class="dynamic-title">Портфолио</div>
        <div class="content hor-content full-height">
            <section class="parallax-section">
                <div class="parallax-inner">
                    <div class="bg" data-bg="images/bg/1.jpg" data-top-bottom="transform: translateY(300px);"
                         data-bottom-top="transform: translateY(-300px);"></div>
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
        <div class="content">
            <section>
                <div class="container">
                    <div class="row" v-for="(item, index) in items" :key="index">
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
                                <div class="parallax-deck" data-top-bottom="transform: translateY(-200px);"
                                     data-bottom-top="transform: translateY(200px);">
                                    <div class="parallax-deck-item">
                                        <h3>{{item.title}} <strong>{{item.strong}}</strong></h3>
                                        <a href="portfolio-single.html"
                                           class="btn anim-button fl-l"><span>View Project</span><i
                                                class="fa fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5" v-if="index % 2 !== 1"></div>
                    </div>
                    <div class="content-nav">
                        <ul>
                            <li><a href="portfolio-parallax.html" class="text-link">previous page</a></li>
                            <li><a href="portfolio-parallax.html" class="text-link">next page</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
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

  mounted () {
    // this.$store.dispatch('setTrigger', { page: 'portfolio', portfolio: true })
    this.$store.dispatch('clickPage', { page: 'home' })
  }

  // destroyed () {
  //   this.$store.dispatch('setTrigger', { portfolio: false })
  // }
}
</script>
