<template>
  <div class="sidebar_article">
    <div class="sidebar_article_body">
      <div class="font">
        <i class="article_menu"></i>
        <span>最新文章</span>
      </div>
      <div @click="xiewenkang(article.articleId)" class="font_one" v-for="(article, index) in article_data" :key="index">
        <li class="font_s">
          <i class="article_www"></i>
          <span>{{article.articleTitle}}</span>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar_article",
  data() {
    return {
      article_data: {},
       page: 1,//显示第一页
       sortFlag: true,//排序
       pageSize: 10,//每页十条数据
    };
  },
  created() {
    this.getArticleList();
  },
  methods: {
 getArticleList() {
  let param = {
    page: this.page,
    pageSize: this.pageSize,
    sort: this.sortFlag?-1:1
  }
  this.$http.get('http://www.xiewenkang.com/api/article',{
    params:param
  }).then((response) => {
    this.article_data =  response.data;
  })
 },
 xiewenkang(index) {
  this.$router.push({name: 'article', query: {data_id: index}});
  this.$router.go(0)
 }
  }

};
</script>
<style lang="scss" scoped rel="stylesheet/scss">
@import "../../common/scss/icon.scss";
@import "../../common/scss/sidebar_article.scss";
</style>
