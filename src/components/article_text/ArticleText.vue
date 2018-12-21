<template>
  <div class="ArticleText">
    <div class="Article_one">
      <!-- 标题 -->
      <div class="Article_one_title">{{data_code.articleTitle}}</div>
      <div class="Article_one_icon">
        <span class="icon_one"><i class="article_author"></i><span>{{data_code.articleUser}}</span></span>
        <span class="icon_two"><i class="article_time"></i> <span>{{data_code.articleDate}}</span></span>
        <span class="icon_three"><i class="article_lable"></i> <span>{{data_code.articleType}}</span></span>
      </div>
      <!-- 图片 -->
      <div class="Article_one_img">
        <img :src="data_code.articleImages" alt="">
      </div>
        <!-- 内容 -->
        <div class="Article_one_content" v-highlight v-html="data_code.articleContent">
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'ArticleText',
  props: {
    data_code: {
      type: Object
    }
  },
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {

  }
}

</script>
<style lang="scss" scoped rel="stylesheet/scss">
@import '../../common/scss/icon.scss';
@import '../../common/scss/banner.scss';
@import '../../common/scss/article_text.scss';
</style>
