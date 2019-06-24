# updateTip
a plugin used in old version, tells users that they need to update their hybrid APP 
## Download
~~~cmd
npm install @flyer2311/vue-sm-update-tip --save
~~~
## Function
1. support update title and content by yourself
1. support update color and fontsize
1. lock width and height 
1. provide anther api for show the plugin

## Environment
1. VUE(install CLI)
1. better-scroll

## Basic instructions
请看./example/example.vue的例子

## Inner construction
~~~javascript
this.flyerUpdateTip.init({
  show: true,
  title: {
    text: '123',
    color: '#000',
    fontSize: '20px'
  },
  content: {
    text: [1, 2, 3],
    color: '#000',
    fontSize: '18px'
  }
})
~~~
~~~javascript
this.flyerUpdateTip.show()
this.flyerUpdateTip.hide()
~~~
