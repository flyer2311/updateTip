<template>
  <div class='wrap' v-show="show">
    <div class='mask' @click="maskCancel"></div>
    <div class="content" :style='{width:width,height:height}'>
      <div class="title" :style='{fontSize:title.fontSize,color:title.color}'>{{title.text}}</div>
      <div ref='scroll' class="scroll" :style='{fontSize:content.fontSize,color:content.color}'>
        <ul>
          <li v-for="item in content.text" :key='item'>{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'tip-plugin',
  data () {
    return {
      width: '',
      height: '',
      show: false,
      title: {
        text: '',
        fontSize: '',
        color: ''
      },
      content: {
        text: [],
        fontSize: '',
        color: ''
      }
    }
  },
  methods: {
    maskCancel () {
      this.tipShow.hide()
    }
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.scroll)
  }
}
</script>

<style lang="scss" scoped>
.mask{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.3);
}
.wrap{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.content{
  position: fixed;
  left: 15%;
  top: 20%;
  width: 70%;
  height: 60%;
  background-color: #fff;
  border-radius: 10px;/*no*/
  .title{
    width: 100%;
    height: 44px;/*no*/
    line-height: 44px;/*no*/
    text-align: center;
    font-size: 20px;/*no*/
    color: #000;
  }
  .scroll{
    height: calc(100% - 44px);/*no*/
    font-size: 16px;/*no*/
    color: #000;
    overflow: hidden;
  }
}
</style>
