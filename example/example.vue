<template>
  <div class="wrap" ref='div'>
    <button @click="btn">遮罩按钮</button>
    <ul>
      <li v-for="i in 100" :key='i'>{{i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'example',
  methods: {
    btn () {
      this.flyerUpdateTip.show()
    }
  },
  mounted () {
    this.flyerUpdateTip.init({
      show: true,
      title: {
        text: '223',
        color: 'red',
        fontSize: '18px'
      },
      content: {
        text: [1, 2, 3],
        color: 'sandybrown',
        fontSize: '16px'
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
}
</style>
