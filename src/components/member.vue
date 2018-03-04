<template>
  <div id="member">
    <Header></Header>
    <section id="main-content">
      <div class="container member-wrap">
        <div class="row">
          <div class="col-md-3 member-img">
            <img v-bind:src="member.headimg" alt="图不见了。。"/>
          </div>
          <div class="col-md-9 member-title">
            <h2>{{member.name}}</h2>
            <h5>{{member.title}}</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 side-p">
            <p>电话: {{member.phone}}</p>
            <p>邮箱: {{member.email}}</p>
          </div>
          <div class="col-md-9 member-intro">
            <p>{{member.intro}}</p>
          </div>
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
      member: {
        headimg: '/static/img/members/guiguan.jpg',
        name: '桂冠',
        title: '江苏特聘教授 1311鼎山学者 江苏省双创人才',
        phone: '',
        email: '',
        intro: '桂冠，1982年出生于安徽省枞阳县。南京邮电大学高层次引进人才、教授、博士生导师、江苏特聘教授、江苏省高层次创新创业人才（双创）、“1311人才计划”鼎山学者、原日本学术振兴会（JSPS）特别研究员、日本华人学术交流学会（ACMC）创始人、开放计算与普适通信前沿研讨会（FOCUS）创始人之一。2006年9月起在电子科技大学硕博连读并受到电子科技大学优秀博士论文基金资助，2011年12月电子科技大学获信息与通信工程博士学位。攻读博士学位期间，2009年10月至2011年10月，受到国家留学基金委全额奖学金资助前往日本东北大学留学，师从Fumiyuki Adachi教授（无线通信3G之父）研究第四代无线通信系统核心技术。2011月12至2014年3月，与Fumiyuki Adachi教授合作从事第五代无线通信技术的博士后研究，期间受到东北大学博士后和JSPS的博士后奖学金资助（资助率小于10%）。2014年4月至2015年10月，在日本秋田县立大学电子与信息系统系担任助理教授。2015年11月至今，在南京邮电大学担任特聘教授。作为主要研究人员参与了国家863项目、国家自然科学基金以及教育部重点项目等。主持国家自然青年基金，江苏特聘教授专项经费，日本文部省JSPS科研项目以及秋田县立大学科研启动项目；另外作为主要参与人，在研日本文部省JSPS科研项目一项和国家自然科学基金面上项目两项。2014年5月和6月分别获得国际顶级会议IEEE VTC最佳学生论文奖和国际顶级会议IEEE ICC最佳论文奖。近几年来研究兴趣：压缩感知，超分辨雷达，无线通信，宽带信号传输技术以及自适应稀疏信号处理。近五年已在国际学术期刊以及国际会议上发表论文100余篇，其中SCI检索30余篇，EI检索35余篇，参与申请国家发明专利两项。2012年至今，担任”Wiley Journal of Security and Communication Networks”副编辑。近期担任IEEE ICC、WCNC、VTC、WCSP、ICCC等会议的程序委员会委员（TPC）或论坛主席（Symposium Co-Chair），并担任IEEE JSAC、IEEE Transaction on Signal Processing, IEEE Transactions on Wireless Communications, IEEE Transactions on Vehicle Technology, IEEE Transactions on Communications, IEEE Signal Processing Letters, IEICE Transactions on Communications, Digital Signal Processing, ETRI Journal, EURASIP Journals, China Communications, Wireless Communications and Mobile Computing, International Journal of Communication Systems,电子学报等期刊的审稿人。同时，也受邀担任国家自然科学基金评审专家和中科院国家电力科学研究院项目评估专家。'
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

.member-wrap {
  min-height: 71vh;
  border-radius: 5px;
  padding: 2em;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15), 0 3px 3px rgba(0, 0, 0, .15);
}

.member-img {
  text-align: center;
}

.member-img img {
  width: 75%;
  border-radius: 50%;
  margin: 0 auto;
}

.member-title {
  padding: 4em 1em 0 1em;
}

.side-p {
  margin: 2em 0;
  padding: 2em 1em;
}

.member-intro {
  margin: 0 auto;
}

.member-intro p {
  font-size: 1.1em;
}

@media screen and (max-width: 768px) {
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
