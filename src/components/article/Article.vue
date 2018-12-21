<template>
  <div class="Article">
    <v-header/>
    <div class="col-xs-12 col-md-8 col-lg-8" style="padding:0">
      <v-article-text v-bind:data_code="data_code"/>
    </div>
    <div class="col-lg-4 col-md-4 hidden-xs hidden-sm" style="padding-left:30px;padding-right:0">
      <v-search/>
      <v-sidebar-article1/>
    </div>
    <div class="col-xs-12 col-md-12 col-lg-12">
      <v-footer/>
    </div>
  </div>
</template>
<script>
import Search from "../../components/search/Search.vue";
import ArticleText from "../../components/article_text/ArticleText.vue";
import Header from "../../components/header/Header.vue";
import Footer from "../../components/footer/Footer.vue";
import sidebar_article1 from "../../components/sidebar_article/sidebar_article1.vue";
export default {
  name: "Article",
  data() {
    return {
      data_id: 0,
      data_code: {}
    };
  },
  components: {
    "v-article-text": ArticleText,
    "v-search": Search,
    "v-sidebar-article1": sidebar_article1,
    "v-header": Header,
    "v-footer": Footer
  },
  created() {
    this.article_code1();
  },
  mounted() {},
  methods: {
    article_code1() {
      this.data_id = this.$route.query.data_id;
      this.$http
        .get(
          "http://www.xiewenkang.com/api/article/id?article_id=" + this.data_id
        )
        .then(response => {
          this.data_code = response.data[0];
        });
    }
  }
};
</script>
<style lang="scss" scoped rel="stylesheet/scss">
</style>
