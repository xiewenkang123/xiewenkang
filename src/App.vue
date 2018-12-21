<template>
  <div id="app">
    <div class="content">
      <div class="container">
          <router-view/>
      </div>
    </div>
  </div>
</template>

<script>  
export default {
  name: "App"  
}
</script>
<style lang="scss">
@import './common/scss/page.css';
@import './common/scss/App.scss';
</style>
