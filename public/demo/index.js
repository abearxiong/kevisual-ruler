var canvas = document.getElementById("canvas")
var cxt = canvas.getContext('2d')
var config = {
  width: 600,
  height: 200,
  
  // 刻度尺相关
  size: 7000, // 刻度尺总刻度数
  x: 10, // 刻度尺x坐标位置
  y: 70, // 刻度尺y坐标位置
  w: 5, // 刻度线的间隔
  h: 10, // 刻度线基础长度
  
  // 事件相关
  mousedown: false,
  start: []
}

draw(cxt, config)
// 鼠标按下时 记录状态及位置
canvas.addEventListener('mousedown', function(e){
  config.mousedown = true
  config.start = [e.offsetX, e.offsetY]
})
// 鼠标放开时 重置状态
canvas.addEventListener('mouseup', function(e){
  config.mousedown = false
  config.x += e.offsetX - config.start[0]
})
// 鼠标划出canvas时 重置状态
canvas.addEventListener('mouseout', function(e){
  config.mousedown = false
})
// 鼠标移动时 改变位置
canvas.addEventListener('mousemove', function(e){
  // 如果鼠标左键被按下 可以拖动
  if (config.mousedown) {
    config.x += e.offsetX - config.start[0]
    config.start = [e.offsetX, e.offsetY]
    draw(cxt, config)
  }
})

function draw(cxt, config) {
  var size = (config.size || 100) * 10 + 1
  var x = config.x || 0
  var y = config.y || 0
  var w = config.w || 5
  var h = config.h || 10
  var offset = 3 // 上面数字的偏移量
  // 画之前清空画布
  cxt.clearRect(0, 0, config.width, config.height)
  // 设置画笔属性
  cxt.strokeStyle = '#666'
  cxt.lineWidth = 1
  cxt.font = 12
  for (var i = 0; i < size; i++) {
    // 开始一条路径
    cxt.beginPath()
    // 移动到指定位置
    cxt.moveTo(x + i * w, y)
    // 满10刻度时刻度线长一些 并且在上方表明刻度
    if (i % 10 == 0) {
      // 计算偏移量
      offset = (String(i / 10).length * 6 / 2)
      cxt.fillText(i / 10,x + i * w - offset , y - h * 2.5);
      cxt.lineTo(x + i * w, y - h * 2)
    } else {
      // 满5刻度时的刻度线略长于1刻度的
      cxt.lineTo(x + i * w, y - (i % 5 === 0 ? 1.5 : 1) * h)
    }
    // 画出路径
    cxt.stroke()
  }
}

function drawPoint(type) {
  if (type === 'end') {
    config.x = - (config.size * 10 * config.w - config.width) - 10
  } else if (type === 'start') {
    config.x = 10
  }
  draw(cxt, config)
}