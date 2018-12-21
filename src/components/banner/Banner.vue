<template>
  <div class="Banner">
   <div>
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
                <div @click="article_code(article.articleId)" class="article_button" href="javascript:;">
                  阅读全文
                  </div>
              </div>
            </div>
          </div>
       </li>
   </div>
</div>
</template>
<script>

export default {
  name: 'Banner',
  props: {
    digest: {
        default: 0
    },
    article_data: {
      type: Array
    },
    page: {
      type: Number
    },
    sortFlag: {
      type: Boolean
    },
    pageSize: {
      type: Number
    },
    pageCount: {
      type: Number
    },
    article_type: {
      type: String
    }    
  },
  data() {
    return {
      data_code:[]
    }
  },
  created() {
    this.a();
  },
  mounted() {

  },
methods: {
  a() {
      this.$http.get('http://www.xiewenkang.com/api/article').then((response) => {
      this.data_code = response.data;
    })
  },
  article_code(index) {
      this.$router.push({name: 'article', query: {data_id: index}})
  }
}
}
</script>
<style lang="scss" scoped rel="stylesheet/scss" >
@import '../../common/scss/icon.scss';
@import '../../common/scss/banner.scss';
</style>

