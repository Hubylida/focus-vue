<template>
  <div class="about">
    <Header></Header>
    <section id="main-content">
      <div class="container">
        <div class="artical-1"><img v-bind:src="about_img" alt=""/>
          <h1>{{title}}</h1>
          <p>{{content_1}}</p>
          <p>{{content_2}}</p>
          <p>{{content_3}}</p>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/header'
import Footer from '../components/footer'
export default {
  name: 'about',
  components: {
    'Header': Header,
    'Footer': Footer
  },
  data () {
    return {
      about_img: 'http://ou2r9nim8.bkt.clouddn.com/1.jpg',
      title: 'FOCUSLAB',
      content_1: '南京邮电大学开放计算机与普适感知前沿实验室(FOCUS)团队主要依托“微纳期间与信息系统创新引智基地(111基地)”、“宽带无线通信与传感网技术”教育部重点实验室和”通信与网络技术“国家工程研究中心的支撑，一方面开拓超分辨稀疏信道估计、雷达成像等方向的研究；另外一方面开展人工智能、大数据分析以及深度学习方面的研究，拓展这些理论的应用领域。',
      content_2: '团队负责人桂冠教授、博士生导师。团队现有全职教师10名，其中欧洲科学院院士1名、IEEE Fellow 1名、教授4名、副教授1名、高级工程师2名、讲师3名。',
      content_3: '主要研究方向包括压缩感知、深度学习、机器学习、视频压缩与编码、无线通信、信道估计与信号检测、计算机视觉/图像处理/多媒体分析、自然语言处理等等。承担国家自然科学基金10余项，培养硕士、博士30余名，发表国际SCI期刊论文300余篇。该团队先后获得IEEE国际通信大会最佳论文奖2项、IEEE车载技术大会最佳学生论文奖1项、日本文部省外国人特别研究员奖学金1次、江苏省特聘教授1人、享受国务院政府津贴1人、欧洲科学院院士1人、IEEE院士1人。主持或参与过多项国家自然科学基金项目、国家“七五”攻关项目、国家863项目、企业横向项目、日本文部省自然科学基金项目和横向合作项目。在视频压缩与编码，大数据信号传输、自适应信号检测、图像恢复、目标特征抽取、运动目标检测与跟踪等方向有深厚的积累，形成了相关的产品级算法、设备。'
    }
  }
}
</script>

<style scoped>
#main-content {
  margin-top: 50px;
  padding: 50px 0;
}

.artical-1 {
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15), 0 3px 3px rgba(0, 0, 0, .15);
}

.artical-1 img {
  width: 100%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.artical-1 h1 {
  font-size: 2.5em;
  font-weight: 600;
}

.artical-1 p {
  margin: 0;
  padding: 1em 4em;
  text-indent: 2em;
  text-align: left;
  font-size: 1.2em;
  line-height: 2;
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
