<template>
  <div id="member">
    <Header></Header>
    <section id="main-content">
      <div class="container event-wrap">
        <h1>{{event.title}}</h1>
        <img v-bind:src="event.headimg" alt="" id="head_img"/>
        <div class="container event-content">
          <img v-bind:src="event.img_1" alt=""/>
          <p>{{event.p_1}}</p>
          <img v-bind:src="event.img_2" alt=""/>
          <p>{{event.p_2}}</p>
          <img v-bind:src="event.img_3" alt=""/>
          <p>{{event.p_3}}</p>
          <img v-bind:src="event.img_4" alt=""/>
          <p>{{event.p_4}}</p>
          <img v-bind:src="event.img_5" alt=""/>
          <p>{{event.p_5}}</p>
          <img v-bind:src="event.img_6" alt=""/>
          <p>{{event.p_6}}</p>
          <img v-bind:src="event.img_7" alt=""/>
          <p>{{event.p_7}}</p>
          <img v-bind:src="event.img_8" alt=""/>
          <p>{{event.p_8}}</p>
          <p id="content_footer">{{event.content_footer}}</p>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './header'
import Footer from './footer'
export default {
  name: 'member',
  components: {
    'Header': Header,
    'Footer': Footer
  },
  data () {
    return {
      event: {
        title: '我校Hikmet Sari教授受邀在PIRMC2017做大会特邀报告',
        headimg: '/static/img/events/events_1/2.jpg',
        p_1: '2017年10月12日，南京邮电大学特聘教授 Hikmet Sari教授（IEEE院士、欧洲科学院院士、土耳其科学院院士、南邮高层次引进人才）应邀在第二十八届IEEE个人，室内和移动无线电通信国际研讨会（IEEE PIMRC 2017）作《MULTIPLE ACCESS FOR 5G – CHALLENGES AHEAD》主题报告。Hikmet Sari教授在本次报告中回顾了2G和3G蜂窝网络中使用的多址技术，以及WiFi和4G的蜂窝标准。虽然WiFi继续使用常规TDMA，但WiMAX使用正交频分多址（OFDMA），3GPP LTE在下行链路上使用OFDMA，在上行链路上使用单载波频分多址（SC-FDMA）。此后着重介绍了未来5G中，作为主要技术的基于非正交多址（NOMA）的基本原理，即叠加用户信号，并在接收机上使用串行干扰消除。并谈论了NOMA的潜力和所面临的挑战。',
        p_2: 'IEEE PIMRC 2017简介：第二十八届IEEE个人，室内和移动无线电通信国际研讨会（IEEE PIMRC 2017）将于2017年 10月8日至13日在加拿大魁北克省蒙特利尔举办，主题为“Engaged Citizens and their New Smart Worlds” ; 主题旨在强调通过人类团结实现和谐愿望的途径多样性。',
        p_3: 'PIMRC是无线研究领域的首要会议之一，具有悠久历史，将学术，行业和监管机构汇聚在一起。现如今，PIMRC已经成为IEEE通信协会在电信领域的旗舰会议之一。PIMRC举办各种常规技术会议，其中包括全球主题演讲会议和小组讨论。除此之外还有激动人心的社会文化活动。本次会议有来自加拿大、英国、日本、美国、法国、瑞典、中国等多个国家和地区，数十个高校和机构的专家学者参加会议。',
        content_footer: '编辑：张婕 校订：桂冠老师 杨洁老师'
      }
    }
  }
}
</script>

<style scoped>
#main-content {
  margin-top: 50px;
  padding: 50px 0;
}

.event-wrap h1 {
  text-align: center;
}

#head_img {
  width: 100%;
}

.event-content p {
  text-indent: 2em;
  font-size: 1.3em;
  margin-bottom: .72em;
}

.event-content img {
  width: 100%;
}

#content_footer {
  text-indent: 0;
  font-size: 1em;
  color: #006cb8;
}

@media screen and (max-width: 420px) {
  .footer {
    position: static;
  }
  .head-name {
    display: inline-block;
    text-align: center;
    position: relative;
  }
  #nav-menu {
    display: block;
    width: 1.7em;
    height: 1.5em;
    padding: .3em 0;
    border-top: .3em solid #444;
    border-bottom: .3em solid #444;
    background: #444;
    background-clip: content-box;
    position: absolute;
    top: .7em;
    right: 1.5em;
  }
  .nav-bar-wrap{
    background: #fff;
    padding: 0;
  }
  .nav-bar{
    width: 100%;
    display: none;
  }
  .nav-item{
    width: 50%;
    padding: 1em .5em;
    border: 1px solid #ddd;
    text-align: center;
  }
}
</style>
