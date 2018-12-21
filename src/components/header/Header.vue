<template>
  <div class="Header">
    <header class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">
            <div class="hidden-xs b-nav-background"></div>
            <p class="b-logo-word" title="谢文康博客">谢文康博客</p>
          </a>
        </div>
        <div
          class="navbar-collapse collapse"
          id="bs-example-navbar-collapse-1"
         
        >
          <ul class="nav navbar-nav b-nav-parent">
           
            <li class="b-nav-cname xiewenkang">
              <router-link to="/" title="首页">首页</router-link>
            </li>
            <li class="b-nav-cname">
              <router-link to="/web" title="前端开发">前端开发</router-link>
            </li>
            <li class="b-nav-cname">
              <router-link to="/html" title="HTML">HTML</router-link>
            </li>
            <li class="b-nav-cname">
              <router-link to="/css" title="CSS">CSS</router-link>
            </li>
            <li class="b-nav-cname">
             <router-link to="/javascript" title="JavaScript">JavaScript</router-link>
            </li>
            <li class="b-nav-cname">
               <router-link to="/information" title="前端资讯">前端资讯</router-link>
            </li>
             <li class="b-nav-cname">
               <router-link to="/chaos" title="花里胡哨">花里胡哨</router-link>
            </li>
          </ul>
          <ul id="b-login-word" class="nav navbar-nav navbar-right">
            <li v-on:click="login()" class="b-nav-cname b-nav-login">
              <div class="hidden-xs b-login-mobile"></div>
              <a class="js-login-btn" href="javascript:;" title="登录">登录</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    login() {
      this.$router.push('/backstage/login');
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
