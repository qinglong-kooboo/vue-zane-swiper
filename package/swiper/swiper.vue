<template>
  <div class="slider" :style="style">
    <ul class="slider-wrapper">
      <transition-group :name="mode">
        <li v-for="slider in sliders.sliders" :key="slider.index" class="slider-item" v-show="slider.index === nowIndex">
          <a :href="slider.url || ''">
            <span class="slider-text" v-if="sliders.isPic">{{ slider.text }}</span>
            <img :src="slider.src" v-else>
          </a>
        </li>
      </transition-group>
    </ul>
    <div class="dots" v-if="sliders.isShowDots">
      <span class="dot" v-for="(item, index) in dots" :key="index" :class="{active: nowIndex === index }" @click="goto(index)"></span>
    </div>
    <div class="arrow-left-wrapper" @click="goByArrow(prevIndex)" v-if="sliders.isShowArrows">
      <span class="iconfont arrow-left">&#xe504;</span>
    </div>
    <div class="arrow-right-wrapper" @click="goByArrow(nextIndex)" v-if="sliders.isShowArrows">
      <span class="iconfont arrow-right">&#xe603;</span>
    </div>
  </div>
</template>

<script>
import '../../assets/iconfont.css'

export default {
  name: 'swiper',
  props: {
    sliders: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      inv: '',
      dots: this.sliders.sliders.length,
      nowIndex: 0,
      mode: this.sliders.mode || 'row',
      style: `width: ${this.sliders.width || '800px'} ;height: ${this.sliders.height || '400px'}`
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.sliders.sliders.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === (this.sliders.sliders.length - 1)) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.nowIndex = index
    },
    goByArrow (index) {
      this.goto(index)
      this.clearInv()
      this._runInv()
    },
    _runInv () {
      this.inv = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.sliders.interval || 3000)
    },
    clearInv () {
      clearInterval(this.inv)
    }
  },
  mounted () {
    this._runInv()
  }
}
</script>

<style scoped lang="scss">
  .slider {
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0;
    .slider-wrapper {
      width: 100%;
      height: 100%;
      list-style: none;
      overflow: hidden;
      margin: 0;
      padding: 0;
      .slider-item {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          text-decoration: none;
        }
        img {
          width: 100%;
          height: 100%;
        }
        &.row-enter-active {
          transition: all 0.5s ease;
          transform: translateX(0);
        }
        &.row-leave-active {
          transition: all 0.5s ease;
          transform: translateX(-100%);
        }
        &.row-enter {
          transform: translateX(100%);
        }
        &.row-leave {
          transform: translateX(0);
        }
        &.col-enter-active {
          transition: all 0.5s ease;
          transform: translateY(0);
        }
        &.col-leave-active {
          transition: all 0.5s ease;
          transform: translateY(-100%);
        }
        &.col-enter {
          transform: translateY(100%);
        }
        &.col-leave {
          transform: translateY(100%);
        }
        &.fade-enter-active, .fade-leave-active {
          transition: opacity 1s;
        }
        &.fade-enter, .fade-leave-active {
          opacity: 0.5;
        }
      }
    }
    .arrow-left-wrapper, .arrow-right-wrapper {
      position: absolute;
      top: 45%;
      display: flex;
      justify-content: center;
      width: 24px;
      height: 24px;
      line-height: 24px;
      border-radius: 50%;
      background-color: #e6e6e6;
      cursor: pointer;
      user-select: none;
      opacity: .3;
      &:hover {
        opacity: 1;
      }
    }
    .arrow-left-wrapper {
      left: 10px;
    }
    .arrow-right-wrapper {
      right: 10px;
    }
    .dots {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 20px;
      text-align: center;
      font-size: 0;
      .dot {
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(255,255,255,0.6);
        cursor: pointer;
        transition: all ease-in-out .4s;
        &.active {
          width: 20px;
          border-radius: 4px;
          background: rgba(255,255,255,0.9);
        }
      }
    }
  }
</style>
