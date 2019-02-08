var cover = document.getElementById('cover')
var coverImg = document.getElementById('coverimg')
var greeting = document.getElementById('greeting')

coverImg.height = window.innerHeight -10
coverImg.width = window.innerWidth - 10

console.log(window.innerHeight)
console.log(window.innerWidth)

// 一些话
function random(m, n){
    return Math.floor(Math.random()*10**17)%(n-m)+m;
} 

saying = ['Have you ever remember,<br />the day that we passed together.',
"Things aren't likes the day they were before.<br />You won't even recongized me anymore.",
'你好啊 陌路人',
'不要踏着露水，因为有人夜哭',
'你一笑倾了四方<br />恍若初识地张扬',
'亡命之徒<br />叫嚣人间无路',
'你是明月清晖<br />是晨光熹微<br />是心上人模样所绘',
'已是人海孤鸿，<br />你似清晨朝暮。',
'世人都说你思慕难及不可遇<br />我一转身隔着人海就看到了你<br />你眼中不起波澜难分悲喜<br />距离间没有夹杂曾经.',
'自那日起<br />再未见你<br />时至今日<br />仍会想你',
'落入淡漠的星辰<br />坠进寒风的花蕊<br />只是听见你的声音<br />我便梦中沉醉',
'你不曾给我一次回眸，<br />我却始终在对你微笑。',
'你是我猜不到的不知所措，<br />我是你想不到的无关痛痒。',
'其实一个人挺好，<br />没有顾虑没有牵绊，<br />无非是孤单了一点。',
'多人不需要再见，<br />因为只是路过而已。<br />遗忘就是我们给彼此最好的纪念。',
'还是害怕夜深人静时总想起你，<br />还是害怕的不经意听见你的消息。'
]
ran = random(0,saying.length)
console.log(ran)
greeting.innerHTML = saying[ran]

// 界面只显示一次
var ref = document.referrer;
if (ref.length > 0) {
    cover.hidden = true; 
    document.getElementById('body').style.overflow = 'visible'; 
}
console.log(ref);
