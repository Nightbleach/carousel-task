<template>
    <div>
      <div>This is the Carousel with ElementUI</div>
      <carousel-ui :slideList = slideList></carousel-ui>
    </div>
</template>

<script>
import CarouselUi from '../components/CarouselUi'
export default {
  name: 'PageCarousel1',
  components: {
    CarouselUi
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
      ]
    }
  }

}
</script>

<style scoped>
</style>
