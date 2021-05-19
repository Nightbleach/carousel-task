<template>
    <div>
      <div>This is Carousel without ElementUI</div>
      <carousel-manual :slideList = slideList :inv="invTime"></carousel-manual>
    </div>
</template>

<script>
import CarouselManual from '../components/CarouselManual'
export default {
  name: 'PageCarousel2',
  components: {
    CarouselManual
  },
  data () {
    return {
      slideList: [
        {
          imgSrc: require('../assets/img/1.jpeg')
        },
        {
          imgSrc: require('../assets/img/2.jpeg')
        },
        {
          imgSrc: require('../assets/img/3.jpeg')
        },
        {
          imgSrc: require('../assets/img/4.jpg')
        },
        {
          imgSrc: require('../assets/img/5.jpg')
        },
        {
          imgSrc: require('../assets/img/6.jpg')
        }
      ],
      invTime: 3000
    }
  }
}
</script>

<style scoped>

</style>
