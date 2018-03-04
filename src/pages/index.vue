<template>
  <div id="index">
    <Header></Header>
    <section class="container-fluid cover-scroll">
      <div class="big-title">FOCUSLAB</div>
      <a id="btn-scroll" href="#member-wrap" class="cover-footer">Welcome to FOCUS LAB</a>
    </section>
    <section id="member-wrap">
      <div class="container">
        <div class="title">
          <h1>FOCUS MEMBERS</h1>
          <p>We work together and attempt to change the world.</p>
        </div>
      </div>
      <div class="container">
        <div class="row count-wrap">
          <div class="col-md-4 count-item">
            <p>committee members</p>
            <p>{{memberNum[0]}}</p>
          </div>
          <div class="col-md-4 count-item">
            <p>core members</p>
            <p>{{memberNum[1]}}</p>
          </div>
          <div class="col-md-4 count-item">
            <p>Master&Doctor</p>
            <p>{{memberNum[2]}}</p>
          </div>
        </div>
        <div class="row">
          <div v-for="item in committee_members" :key="item.member_id" class="col-md-3 col-sm-6 item-wrap">
            <router-link :to="'/member/' + item.member_id" class="members-item">
              <img v-bind:src="item.headimg" alt="图片丢失了"/>
              <div class="members-p-wrap">
                <p>{{item.name}}</p>
                <p>{{item.title}}</p>
              </div>
            </router-link>
          </div>
        </div>
        <a href="members" class="find-more">Find More</a>
      </div>
    </section>
    <section class="research-wrap">
      <div class="container">
        <div class="title">
          <h1>Research </h1>
          <p>We hope our researchs could solve the problems around the world.</p>
          <p>We bring the convience to the world.</p>
        </div>
      </div>
      <div class="container">
        <div class="row count-wrap">
          <div class="col-md-4 count-item">
            <p>Directions</p>
            <p>{{researchNum[0]}}</p>
          </div>
          <div class="col-md-4 count-item">
            <p>Cooperation </p>
            <p>{{researchNum[1]}}</p>
          </div>
          <div class="col-md-4 count-item">
            <p>Future </p>
            <p>{{researchNum[2]}}</p>
          </div>
        </div>
        <div class="row">
          <div v-for="item in research_items" :key="item.research_id" class="col-md-3 col-sm-6 item-wrap">
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
        <a href="researchs" class="find-more">Find More</a>
      </div>
    </section>
    <section class="events-wrap">
      <div class="container">
        <div class="title">
          <h1>Events </h1>
          <p>There are many interesting events.</p>
        </div>
        <div class="row">
          <div v-for="item in event_items" :key="item.event_id" class="col-md-3 col-sm-6 event-wrap">
            <router-link :to="'/event/' + item.event_id" class="events-item">
              <div class="img-wrap">
                <img v-bind:src="item.event_img" alt=""/>
              </div>
              <div class="event-content">
                <p>{{item.title}}</p>
                <p>{{item.intro}}</p>
                <div class="event-time"> <span>{{item.event_month}}</span><span>{{item.event_day}}</span></div>
              </div>
            </router-link>
          </div>
        </div>
        <a href="events" class="find-more">Find More</a>
      </div>
    </section>
    <section class="about-wrap">
      <div class="container">
        <div class="title">
          <h1>About Focus</h1>
          <p>A place for learning, discovery, innovation, expression and courage.</p>
        </div>
      </div>
      <div class="container">
        <div class="row count-about">
          <div class="col-md-4 count-item">
            <p>{{teacherNum}}</p>
            <p>teachers</p>
          </div>
          <div class="col-md-4 count-item">
            <p>{{paperNum}}</p>
            <p>papers</p>
          </div>
          <div class="col-md-4 count-item">
            <p>{{studentNum}}</p>
            <p>students</p>
          </div>
        </div>
      </div>
      <div class="explore">
        <p>Explore Focus</p>
        <div class="explore-nav">
          <div class="row">
            <div class="col-md-4 col-sm-4 explore-item"><router-link to="/members">Members </router-link></div>
            <div class="col-md-4 col-sm-4 explore-item"><router-link to="/researchs">Research </router-link></div>
            <div class="col-md-4 col-sm-4 explore-item"><router-link id="last-a" to="events">Events</router-link></div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../components/header'
import Footer from '../components/footer'
export default {
  name: 'index',
  components: {
    'Header': Header,
    'Footer': Footer
  },
  data () {
    return {
      memberNum: [],
      researchNum: [],
      committee_members: [],
      research_items: [],
      event_items: [],
      teacherNum: '',
      paperNum: '',
      studentNum: ''
    }
  },
  getData (url) {
    let result
    axios.get(url)
      .then(function (d) {
        result = d.data.data
      })
      .catch(function (error) {
        console.log(error)
      })
    return result
  },
  created () {
    let that = this
    that.committee_members = getData('https://easy-mock.com/mock/5a8c5215ceff962779055b3f/focus/committee_members')
    axios.get('https://easy-mock.com/mock/5a8c5215ceff962779055b3f/focus/research_items')
      .then(function (d) {
        let data = d.data.data
        data.map((item) => {
          that.research_items.push(item)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    axios.get('https://easy-mock.com/mock/5a8c5215ceff962779055b3f/focus/event_items')
      .then(function (d) {
        let data = d.data.data
        data.map((item) => {
          that.event_items.push(item)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    axios.get('https://easy-mock.com/mock/5a8c5215ceff962779055b3f/focus/memberNum')
      .then(function (d) {
        let data = d.data.data.memberNum
        that.memberNum[0] = data.committee_member
        that.memberNum[1] = data.core_member
        that.memberNum[2] = data.student_member
      })
      .catch(function (error) {
        console.log(error)
      })
    axios.get('https://easy-mock.com/mock/5a8c5215ceff962779055b3f/focus/researchNum')
      .then(function (d) {
        let data = d.data.data.researchNum
        that.researchNum[0] = data.directions
        that.researchNum[1] = data.cooperation
        that.researchNum[2] = data.future
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
<style scoped>
@import "../assets/css/index.css";
</style>
