<template>
  <div class="Search">
      <div class="search_x">
          <i class="article_search"></i>
          <input class="search_input" value="" placeholder="输入关键字搜索"/>
          <input @click="articleQueryList()" class="search_submit" type="submit" value="搜 索"/>
      </div>
</div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      article_data: [],
      article_data_one: [],
       page: 1,//显示第一页
       sortFlag: true,//排序
       pageSize: 10,//每页十条数据
       pageCount: 0,//用来记录总页数
       article_title: '',
       article_user: '',
       article_type: '',
       article_content: ''
    }
  },
  mounted() {
  },
  created() {
  },
  methods: {
    //点击搜索
    articleQueryList() {
      //获取搜索框
      let search_input = document.getElementsByClassName('search_input')[0];
      //将搜索框里的值传给searchArticle
      this.$router.push({
        name: 'searchArticle',
        query: {
          search_input: search_input.value
        }
      });
      this.$router.go(0);
    }
  }

}
</script>
<style lang="scss" scoped rel="stylesheet/scss">
@import '../../common/scss/icon.scss';
@import '../../common/scss/search.scss';
</style>
