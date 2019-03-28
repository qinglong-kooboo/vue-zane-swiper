# vue-zane-swiper

> vue轮播图组件

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run lib
```

## 参数配置
**sliders**：传入一个数组，包含一个或多个对象，每个对象包含图片地址和链接跳转地址，必选<br>
**interval**：轮播动画时间，可选（默认3000ms）<br>
**width**：轮播图宽度，可选（默认800px）<br>
**height**：轮播图高度，可选（默认400px）<br>
**mode**：轮播图切换动画模式，有左右滚动（row）上下滚动（col）和淡入淡出（fade）三种动画切换模式，可选（默认row）<br>
**isShowDots**：控制是否显示圆点（默认为false） <br>
**isShowArrows**：控制是否显示箭头（默认为false） <br>
**isTextSlider**：控制slider类型,除了图片还支持轮播文字形式（默认为false） <br>

## 实例
首先在项目的入口文件（main.js）中引入
``` 
import Slider from 'vue-zane-swiper'
Vue.use(Slider) 
```

然后使用该组件
``` 
<Slider :sliders="sliders"  />
```

``` 
sliders: {
        sliders: [
          {
            src: 'https://sxsimg.xiaoyuanzhao.com/D6/5A/D685908B685DA7068A50BB6A61EDB45A.png', //图片地址
            index: 0 // 根据所传图片的顺序自增，第一个为0，（为了解决同时使用transition和v-for下不能使用自带index的问题）
            url: 'https://www.shixiseng.com/mx2018' //链接跳转地址
          }
        ],//传入图片地址和链接跳转地址或文字信息，必选
        isTextSlider: true, //slider类型，可选（默认false）
        interval: 3000, //轮播动画时间，可选（默认3000ms）
        width:"1200px",//图片宽度，可选（默认800px）
        height:"600px",//图片高度，可选（默认400px）
        mode: 'col' //轮播图动画方式，可选（默认row） 
        isShowDots: true //是否显示圆点，可选（默认false）  
        isShowArrows: true //是否显示箭头，可选（默认false）    
      } 
      P.S. 插件的样式需要手动添加，可以在组件内引入：import 'vue-zane-swiper/lib/swiper.css' 或者在main.js中全局引入
```  

```
写在最后: 最近在写自己的博客前端，用到了轮播图，最开始找了几个插件，都被复杂的参数弄晕，一气之下自己封装了个来用，   
功能很基础，基本都是按照我的项目需求来的。以后有空再扩展下。
``` 


For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
