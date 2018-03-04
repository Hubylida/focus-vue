<template>
  <div id="researchs">
    <Header></Header>
    <section id="main-content">
      <div class="container">
        <div class="row">
          <div v-for="item in researchs" :key="item.research_id" class="col-md-3 col-sm-6 item-wrap">
            <router-link :to="'/research/' + item.research_id" class="researchs-item">
              <div class="img-wrap">
                <img v-bind:src="item.research_img" alt=""/>
              </div>
              <div class="item-content">
                <p>{{item.title}}</p>
                <p>{{item.intro}}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <Footer class="footer-wrap"></Footer>
  </div>
</template>

<script>
import Header from '../components/header'
import Footer from '../components/footer'
export default {
  name: 'researchs',
  components: {
    'Header': Header,
    'Footer': Footer
  },
  data () {
    return {
      researchs: [{
        research_id: 1,
        title: 'Deep Learning & Picture',
        intro: 'Research on Image Semantic Segmentation Based on Depth Learning',
        research_img: '/static/img/research-1.jpg'
      }]
    }
  }
}
</script>

<style scoped>
@import '../assets/css/researchs.css';
</style>
