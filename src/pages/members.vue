<template>
  <div id="members">
    <Header></Header>
    <section id="main-content">
      <div class="container">
        <p class="head-title">FOCUSLAB学术指导委员会委员</p>
        <div class="row">
          <div v-for="item in committee_members" :key="item.member_id" class="col-md-2 col-sm-2 members-wrap">
            <router-link :to="'/member/' + item.member_id" class="members-item">
              <img v-bind:src="item.headimg" alt=""/>
              <p>{{item.name}}</p>
            </router-link>
          </div>
        </div>
        <p class="head-title">FOCUSLAB 核心成员</p>
          <div class="row">
            <div v-for="item in core_members" :key="item.member_id" class="col-md-2 col-sm-2 members-wrap">
              <router-link :to="'/member/' + item.member_id" class="members-item">
                <img v-bind:src="item.headimg" alt=""/>
                <p>{{item.name}}</p>
              </router-link>
            </div>
          </div>
        <p class="head-title">FOCUS研究生&博士生</p>
          <div class="row">
            <div v-for="item in student_members" :key="item.member_id" class="col-md-2 col-sm-2 members-wrap">
              <router-link :to="'/member/' + item.member_id" class="members-item">
                <img v-bind:src="item.headimg" alt=""/>
                <p>{{item.name}}</p>
              </router-link>
            </div>
          </div>
      </div>
    </section>
    <Footer></Footer>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../components/header'
import Footer from '../components/footer'
export default {
  name: 'members',
  components: {
    'Header': Header,
    'Footer': Footer
  },
  data () {
    return {
      committee_members: [
        {
          member_id: 1,
          name: '桂冠',
          headimg: '/static/img/members/guiguan.jpg'
        }
      ],
      core_members: [
        {
          member_id: 1,
          name: '桂冠',
          headimg: '/static/img/members/guiguan.jpg'
        }
      ],
      student_members: [
        {
          member_id: 1,
          name: '桂冠',
          headimg: '/static/img/members/guiguan.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '../assets/css/members.css';
</style>
