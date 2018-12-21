<template>
  <div class="SearchArticle">
    <v-header/>
    <div class="col-xs-12 col-md-8 col-lg-8" style="padding:0">
      <div class="article_sun">
        <v-banner-one v-bind:search_input="search_input"/>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 hidden-xs hidden-sm" style="padding-left:30px;padding-right:0">
      <v-search-one/>
      <v-sidebar-article/>
    </div>
    <div class="col-xs-12 col-md-12 col-lg-12">
      <v-footer/>
    </div>
  </div>
</template>
<script>
import BannerOne from "../../components/banner_one/Banner_one.vue";
import SearchOne from "../../components/search_one/SearchOne.vue";
import Header from "../../components/header/Header.vue";
import Footer from "../../components/footer/Footer.vue";
import sidebar_article from "../../components/sidebar_article/sidebar_article.vue";
export default {
  name: "SearchArticle",
  data() {
    return {
      search_input_one: ""
    };
  },
  components: {
    "v-banner-one": BannerOne,
    "v-search-one": SearchOne,
    "v-sidebar-article": sidebar_article,
    "v-header": Header,
    "v-footer": Footer
  },
  created() {
    this.queryList();
  },
  mounted() {},
  methods: {
    //接收传参
    queryList() {
      this.search_input = this.$route.query.search_input;
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../common/scss/icon.scss";
@import "../../common/scss/banner.scss";
</style>
