<template>
  <div id="joinus">
    <Header></Header>
    <section id="main-content">
      <div class="container">
        <div class="row">
          <div v-for="item in callNote" :key="item.callNote_id" class="col-md-4">
            <div class="join-item">
              <h3>{{item.title}}</h3>
              <p>{{item.content_1}}</p>
              <p>{{item.content_2}}</p>
              <p>{{item.content_3}}</p>
            </div>
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
  name: 'joinus',
  components: {
    'Header': Header,
    'Footer': Footer
  },
  data () {
    return {
      callNote: [
        {
          title: 'Call for Master Students',
          content_1: '基本要求：具有良好的相关专业知识，英语通过四级或以上，热爱科研、体育运动，学生会干部和有意硕博连读的学生优先。',
          content_2: '基本待遇：FOCUS实验室可以提供基本的科研条件，如配备高性能计算机和笔记本电脑。根据实力科研能力和贡献，每个月发放助理研究费100~2000元，学校每个月再发600元，共计700～2600元。另外，发表SCI期刊论文1篇奖励1000~6000元（根据期刊级别），申请发明专利1项奖励1000元',
          content_3: '毕业要求：SCI期刊论文1篇，发明专利1项。'
        },
        {
          title: 'Call for Doctor Students',
          content_1: '基本要求：硕博连读优先考虑，具有良好的相关硕士专业知识，热爱科研、体育运动、性格开朗，立志将来从事科研相关工作。',
          content_2: '基本待遇：FOCUS实验室可以提供基本的科研条件，如配备高性能计算机和笔记本电脑。根据实力科研能力和贡献，每个月发放助理研究费1000~3000元，学校每个月再发2350元，基本助研费共计3350～5350元。另外，发表SCI期刊论文1篇奖励1000~6000元（根据期刊级别）。',
          content_3: '毕业要求：SCI期刊论文5篇以上。'
        },
        {
          title: 'Call for PostDoctor ',
          content_1: '基本待遇：年薪25万元~40万元，根据实际科研能力薪资可再面谈。博士后结束后评估为优秀可留校任教（有编制）。另外，博士后期间发表SCI期刊论文1篇奖励2000~6000元（根据期刊级别）。'
        }
      ]
    }
  }
}
</script>

<style scoped>

#main-content{
  margin-top: 50px;
  padding: 50px 0;
}

.join-item{
  margin-bottom: 1em;
  height: 30em;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15), 0 3px 3px rgba(0, 0, 0, .15);
}

.join-item h3{
  margin: 1em 0;
  padding: .5em;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background: #e38383;
  color: #fff;
  text-align: center;
}

.join-item p{
  padding: 0 1em;
}

.footer-wrap{
  width: 100%;
  position: absolute;
  bottom: 0;
}

@media screen and (max-width: 768px){
  .footer{
    position: static;
  }
  .head-name{
    display: inline-block;
    text-align: center;
    position: relative;
   }
   #nav-menu{
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
