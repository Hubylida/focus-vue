<template >
  <section class="header">
    <div class="row">
      <div class="col-md-5">
        <a href="/" class="head-name">FOCUSLAB</a>
      <div id="nav-menu"></div>
      </div>
      <div class="col-md-7 nav-bar-wrap">
        <div class="nav-bar">
          <router-link to="/members" class="nav-item">Members</router-link>
          <router-link to="/researchs" class="nav-item">Researchs</router-link>
          <router-link to="/events" class="nav-item">Events</router-link>
          <router-link to="/join" class="nav-item">Join us</router-link>
          <router-link to="/about" class="nav-item">About</router-link>
          <router-link to="/login" class="nav-item">login</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    /*background: #b1040e;*/
    background: #fff;
    z-index: 999;
    box-shadow: 0 0 10px rgba(0, 0, 0, .15), 0 3px 3px rgba(0, 0, 0, .15);
  }

  .nav-item {
    display: inline-block;
    width: 110px;
    line-height: 50px;
    font-size: 18px;
    font-weight: 200;
    text-align: center;
    vertical-align: middle;
    transition: background .5s;
    color: #222;
  }

  .nav-item:hover {
    color: #b1040e;
    text-decoration: none;
  }

  .nav-bar {
    width: 681px;
    margin: 0 auto;
  }

  .head-name {
    display: block;
    width: 230px;
    font-size: 24px;
    font-family: Stanford, Source Serif Pro, Georgia, Times, Times New Roman, serif!important;
    line-height: 50px;
    margin: 0 auto;
    color: #222;
    text-decoration: none;
  }

  .head-name:hover{
    color: #222;
    text-decoration: none;
  }

  #nav-menu{
    display: none;
  }
</style>
