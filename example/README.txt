1 该插件提供3个API
  this.flyerUpdateTip.show() 
  this.flyerUpdateTip.hide()
  this.flyerUpdateTip.init() 
2 this.flyerUpdateTip.init() 的完整参数如下
{
  show: true,// 初始化的状态 true为显示,false为隐藏
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
}
所有参数都非必填选项,没有对应参数,插件将产生一套默认参数.
ps: 1如果要修改插件的外层的宽高,请直接在当前目录下../lib/index.vue的.content类名scss中进行修改 Line63-Line70
    2如果项目中有添加px2rem,且希望该插件进行修改,请直接在当前目录下../lib/index.vue的scss中进行修改 Line48-Line85
