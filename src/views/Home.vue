<template>
  <div class="home">
    <el-button @click="toCarouselUi" type="primary">Carousel-project with ElementUI<i class="el-icon-sunset el-icon--right"></i></el-button>
    <el-button @click ='toCarouselM' type="primary">Carousel-project(hand-writing)<i class="el-icon-moon-night el-icon--right"></i></el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods: {
    toCarouselUi () {
      this.$router.push('/carouseElementUI')
    },
    toCarouselM () {
      this.$router.push('/carouselWithoutElementUI')
    }
  }
}
</script>

<style scoped>
  .btn {
    margin: 60px auto;
  }
</style>
