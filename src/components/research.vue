<template>
  <div id="member">
    <Header></Header>
    <section id="main-content">
      <div class="container">
        <div class="research-wrap">
          <h1>{{research.title}}</h1>
          <img v-bind:src="research.headimg" alt="" id="head_img"/>
          <div class="container research-content">
            <img v-bind:src="research.img_1" alt=""/>
            <p>{{research.p_1}}</p>
            <img v-bind:src="research.img_2" alt=""/>
            <p>{{research.p_2}}</p>
            <img v-bind:src="research.img_3" alt=""/>
            <p>{{research.p_3}}</p>
            <img v-bind:src="research.img_4" alt=""/>
            <p>{{research.p_4}}</p>
            <img v-bind:src="research.img_5" alt=""/>
            <p>{{research.p_5}}</p>
            <img v-bind:src="research.img_6" alt=""/>
            <p>{{research.p_6}}</p>
            <img v-bind:src="research.img_7" alt=""/>
            <p>{{research.p_7}}</p>
            <img v-bind:src="research.img_8" alt=""/>
            <p>{{research.p_8}}</p>
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
      research: {}
    }
  }
}
</script>

<style scoped>
#main-content {
  margin-top: 50px;
  padding: 50px 0;
}

.research-wrap {
  min-height: 71vh;
  border-radius: 5px;
  padding-bottom: 2em;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15), 0 3px 3px rgba(0, 0, 0, .15);
}

#head_img{
  width: 100%;
}

.research-wrap h1{
  padding: 0 2em;
  text-align: center;
  font-size: 2.2em;
}

.research-wrap  p{
  padding: 0 2em;
  text-indent: 2em;
  font-size: 1.5em;
}

.img-wrap{
  text-align: center;
}

.img-wrap img{
  width: 65%;
  border-radius: 5px;
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
