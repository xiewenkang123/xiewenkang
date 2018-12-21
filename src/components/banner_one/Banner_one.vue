<template>
  <div class="Banner_one">
   <div>
            <div class="sortDate_siblings">
          <span>搜索到<span class="red"> {{article_count}} </span>条与<span class="red"> {{search_input}} </span>相关的数据</span>
        </div>
       <li v-for="(article,index) in article_data" :key="index" class="article_one">
          <div class="article_left">
            <img :src="article.articleImages" width="100%" height="100%">
          </div>
          <div class="article_right">
            <div class="article_right_top">{{article.articleTitle}}</div>
            <div class="article_right_body">{{article.articleText}}</div>
            <div class="article_right_bottom">
              <div class="article_right_bottom_left">
                <span class="icon_one">
                  <i class="article_author"></i>
                  <span>{{article.articleUser}}</span>
                  </span>
                <span class="icon_two">
                  <i class="article_time"></i>
                  <span>{{article.articleDate}}</span>
                  </span>
                <span class="icon_three">
                  <i class="article_lable"></i>
                  <span>{{article.articleType}}</span>
                  </span>
              </div>
              <div class="article_right_bottom_right">
                <div class="article_button" href="javascript:;" @click="article_code(article.articleId)" >
                  阅读全文
                  </div>
              </div>
            </div>
          </div>
       </li>
               <div class="pages_list">
          <paginate class="pages_children" :page-count="pageCount" :page-range="4" :margin-pages="1" :click-handler="clickCallback" :prev-text="'<<'" :next-text="'>>'" :container-class="'pagination'" :page-class="'page-item'">
          </paginate>
        </div>
   </div>
</div>
</template>
<script>

export default {
  name: 'Banner_one',
  props: {
    search_input: {
      type: String
    }
  },
  data() {
    return {
      article_data: [],//分页数据
      article_count: 0,
      page: 1, //显示第一页
      sortFlag: true, //排序
      pageSize: 10, //每页十条数据
      pageCount: 0, //用来记录总页数
    }
  },
  created() {
 
  },
  mounted() {
    this.queryList();
  },
  methods: {
    //查询
    queryList() {
      //总查询
      this.$http.get('http://www.xiewenkang.com/api/article?'
        +'article_title='+this.search_input
        +'&article_user='+this.search_input
        +'&article_type='+this.search_input
        +'&article_content='+this.search_input)
      .then((response) => {
      //总页数计算公式
      let count = response.data;
      //搜索到的匹配的条数
      this.article_count = count.length;
      if(count.length % 10 == 0) {
        this.pageCount = count.length / 10;
      }else {
        let pageZ = count.length / 10 + 1;
        this.pageCount = parseInt(pageZ);
      }
      })
      //分页查询
      let param_one = {
        page: this.page,
        pageSize: this.pageSize,
        sort: this.sortFlag ? 1 : -1,
        article_title: this.search_input,
        article_user: this.search_input,
        article_type: this.search_input,
        article_content: this.search_input
      }
      this.$http.get('http://www.xiewenkang.com/api/article', {
        params: param_one
      }).then((response) => {
        this.article_data = response.data;
      });
    },
    //分页点击
    clickCallback(pageNum) {
      this.page = pageNum;
      this.queryList();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    //跳转传参
    article_code(index) {
    this.$router.push({name: 'article', query: {data_id: index}})
    }
  }
}
</script>
<style lang="scss" scoped rel="stylesheet/scss">
@import '../../common/scss/icon.scss';
@import '../../common/scss/banner.scss';
</style>
