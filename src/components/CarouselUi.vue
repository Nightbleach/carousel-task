<template>
  <div class="block">
    <el-carousel trigger="click" height="300px">
      <el-carousel-item v-for="item in slideList" :key="item">
        <img :src="item.imgSrc" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'CarouselUI',
  props: {
    slideList: {
      type: Array,
      default () {
        return []
      }
    }
  }

}
</script>

<style scoped>

</style>
