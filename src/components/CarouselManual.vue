<template>
  <div class="slide-show" @mousemove="clear" @mouseout="autoRun">
    <div class="slide-img">
      <a>
        <transition name="slide-trans">
          <img v-if="isShow" :src="slideList[nowIndex].imgSrc" alt="">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slideList[nowIndex].imgSrc" alt="">
        </transition>
      </a>
    </div>
    <ul class="slide-pages">
      <li @click="goto(preIndex)">
        <el-button icon="el-icon-back" circle ></el-button>
      </li>
      <li v-for="(item, index) in slideList" :key="index" @click="goto(index)">
        <a :class="{ on: index === nowIndex }">{{ index + 1 }}
        </a>
      </li>
      <li @click="goto(nextIndex)">
        <el-button icon="el-icon-right" circle></el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CarouselManual',
  data () {
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  props: {
    slideList: {
      type: Array,
      default () {
        return []
      }
    },
    inv: {
      type: Number,
      default () {
        return []
      }
    }
  },
  computed: {
    //
    preIndex () {
      if (this.nowIndex === 0) {
        return this.slideList.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slideList.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    autoRun () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clear () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.autoRun()
  }
}
</script>

<style scoped>
  .slide-trans-enter-active {
    transition: all .5s;
  }
  .slide-trans-enter {
    transform: translateX(1500px);
  }
  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-1500px);
  }
  .slide-show {
    position: relative;
    margin: 15px 15px 15px 0;
    height: 500px;
    overflow: hidden;
  }
  .slide-img {
    width: 100%;
    margin: 8px;
  }
  .slide-img img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  .slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
  }
  .slide-pages li .on {
    text-decoration: underline;
  }
</style>
