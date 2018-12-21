<template>
  <div class="Html">
    <v-header/>
    <div class="col-xs-12 col-md-8 col-lg-8" style="padding:0">
      <div class="sortDate">
        <li class="sortDate_left">按发布时间排序 :</li>
        <li class="sortDate_right">
          <i @click="sort" class="sortIcon"></i>
        </li>
      </div>
      <v-banner
        v-bind:article_data="article_data"
        v-bind:page="page"
        v-bind:sortFlag="sortFlag"
        v-bind:pageSize="pageSize"
        v-bind:pageCount="pageCount"
        v-bind:article_type="article_type"
      />
      <div class="pages_list">
        <paginate
          class="pages_children"
          :page-count="pageCount"
          :page-range="4"
          :margin-pages="1"
          :click-handler="clickCallback"
          :prev-text="'<<'"
          :next-text="'>>'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        ></paginate>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 hidden-xs hidden-sm" style="padding-left:30px;padding-right:0">
      <v-search/>
      <v-sidebar-article/>
    </div>
    <div class="col-xs-12 col-md-12 col-lg-12">
      <v-footer/>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/banner/Banner.vue";
import Search from "../../components/search/Search.vue";
import Header from "../../components/header/Header.vue";
import Footer from "../../components/footer/Footer.vue";
import sidebar_article from "../../components/sidebar_article/sidebar_article.vue";
export default {
  name: "Html",
  data() {
    return {
      article_data: [],
      article_data_one: [],
      article_title: "",
      page: 1, //显示第一页
      sortFlag: true, //排序
      pageSize: 10, //每页十条数据
      pageCount: 0, //用来记录总页数
      article_type: "HTML"
    };
  },
  components: {
    "v-banner": Banner,
    "v-search": Search,
    "v-sidebar-article": sidebar_article,
    "v-header": Header,
    "v-footer": Footer
  },
  created() {
    //分页显示数据
    this.getArticleList();
    //全部数据
    this.getArticleQuery();
  },
  methods: {
    //分页查询方法
    getArticleList() {
      let param = {
        page: this.page,
        pageSize: this.pageSize,
        sort: this.sortFlag ? 1 : -1,
        article_type: this.article_type
      };
      this.$http
        .get("http://www.xiewenkang.com/api/article1", {
          params: param
        })
        .then(response => {
          this.article_data = response.data;
        });
    },
    //总页数方法
    getArticleQuery() {
      this.$http
        .get(
          "http://www.xiewenkang.com/api/article1?article_type=" +
            this.article_type
        )
        .then(response => {
          //总页数计算公式
          let count = response.data;
          if (count.length % 10 == 0) {
            this.pageCount = count.length / 10;
          } else {
            let pageZ = count.length / 10 + 1;
            this.pageCount = parseInt(pageZ);
          }
        });
    },
    //分页点击
    clickCallback(pageNum) {
      this.page = pageNum;
      this.getArticleList();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    //排序
    sort() {
      this.sortFlag = !this.sortFlag;
      this.getArticleList();
    }
  }
};
</script>

<style lang="scss">
@import "../../common/scss/icon.scss";
@import "../../common/scss/banner.scss";
</style>
