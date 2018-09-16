<template>
  <div>
    <div class="dynamic-title">О нас</div>
    <div class="content hor-content pad-con no-bg-con">
      <section id="sec1">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <h2 class="section-title">Mila<strong> Slavko</strong></h2>
              <p>Our team takes over everything, from an idea and concept development to realization. We believe in
                traditions and incorporate them within our innovations. All our projects incorporate a unique artistic
                image and functional solutions. Client is the soul of the project. Our main goal is to illustrate
                his/hers values and individuality through design.</p>
              <p>Our team takes over everything, from an idea and concept development to realization. We believe in
                traditions and incorporate them within our innovations. All our projects incorporate a unique artistic
                image and functional solutions. Client is the soul of the project. Our main goal is to illustrate
                his/hers values and individuality through design.</p>
              <div class="process-box">
                <h3>Responsibility</h3>
                <ul class="creat-list">
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Architecture</a></li>
                  <li><a href="#">Construction</a></li>
                </ul>
              </div>
              <h3 class="bold-title">Skills</h3>
              <div class="skillbar-box animaper">
                <!-- skill 1-->
                <div class="custom-skillbar-title"><span>Photoshop</span></div>
                <div class="skill-bar-percent">95%</div>
                <div class="skillbar-bg" data-percent="95%">
                  <div class="custom-skillbar"></div>
                </div>
                <!-- skill 2-->
                <div class="custom-skillbar-title"><span>Illustrator</span></div>
                <div class="skill-bar-percent">65%</div>
                <div class="skillbar-bg" data-percent="65%">
                  <div class="custom-skillbar"></div>
                </div>
                <!-- skill 3-->
                <div class="custom-skillbar-title"><span>3D MAX</span></div>
                <div class="skill-bar-percent">75%</div>
                <div class="skillbar-bg" data-percent="75%">
                  <div class="custom-skillbar"></div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="parallax-box" data-top-bottom="transform: translateY(-150px);"
                   data-bottom-top="transform: translateY(150px);">
                <img src="images/team/small/1.jpg" class="respimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',

  data () {
    return {}
  },

  mounted () {
    // this.$store.dispatch('setTrigger', { page: 'about', about: true })
    this.$store.dispatch('clickPage', { page: 'home' })
  }

  // destroyed () {
  //   this.$store.dispatch('setTrigger', { about: false })
  // }
}
</script>
