<template>
  <div class="events">
    <Header></Header>
    <section id="main-content">
      <div class="container">
        <div v-for="item in events" :key="item.event_id">
          <router-link :to="'/event/' + item.event_id" class="row artical-wrap">
            <div class="col-md-4 artical-pic">
              <img v-bind:src="item.event_img" alt=""/>
            </div>
            <div class="col-md-8 artical-p">
              <div class="p-wrap">
                <h1>{{item.title}}</h1>
                <p>{{item.intro}}</p>
              </div>
            </div>
            <div class="event-time">
              <span>{{item.event_month}}</span>
              <span>{{item.event_day}}</span>
            </div>
          </router-link>
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
  name: 'events',
  components: {
    'Header': Header,
    'Footer': Footer
  },
  data () {
    return {
      events: [{
        event_id: 1,
        title: 'Hikmet Sari教授受邀在PIRMC2017做大会特邀报告',
        intro: 'Hikmet Sari教授在第二十八届IEEE个人，室内和移动无线电通信国际研讨会（IEEE PIMRC 2017）作《MULTIPLE ACCESS FOR 5G – CHALLENGES AHEAD》主题报告。',
        event_img: '/static/img/events/events_1/1.jpg',
        event_month: 'Oct',
        event_day: 12
      }]
    }
  }
}
</script>

<style scoped>
@import '../assets/css/event.css';
</style>
