<template>
  <section class="footer">
    <div class="row">
      <router-link to="/" class="footer-title col-md-2">FOCUS LAB</router-link>
      <div class="col-md-10">
        <p class="footer-content">
          <router-link to="/members">members</router-link>
          <router-link to="/researchs">research</router-link>
          <router-link to="/about">about</router-link>
        </p>
        <p class="footer-content">@Nanjing University of Posts and Telecommunications. FOCUS</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
  .footer{
    padding: 1em 1.5em;
    font-size: 1.5em;
    font-family: Stanford, Source Serif Pro, Georgia, Times, Times New Roman, serif!important;
    /*background: #820000;*/
    background: #fff;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
    letter-spacing: 1px;
  }

  .footer-content,
  .footer-content a{
    color: #222;
    font-size: .8em;
  }

  .footer-content a:hover{
    text-decoration: underline;
  }

  .footer-title{
    color: #222;
  }

  .footer-title:hover{
    color: #222;
    text-decoration: none;
  }
</style>
