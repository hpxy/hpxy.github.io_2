TESTMODE = 1;
if (TESTMODE)
    console.log("The test mode have opened")

/*
    UNCACHED=0;     未缓存
    IDLE=1;         空闲状态
    CHECKING=2;     检查中
    DOWNLOADING=3;  下载中
    UPDATEREADY=4;  更新准备中
    OBSOLETE=5;     过期状态
*/
var ACSTATE;
switch (Number(window.applicationCache.status)) {
    case 0: ACSTATE = "UNCACHED";break;
    case 1: ACSTATE = "IDLE";break;
    case 2: ACSTATE = "CHECKING";break;
    case 3: ACSTATE = "DOWNLOADING";break;
    case 4: ACSTATE = "UPDATEREADY";break;
    case 5: ACSTATE = "OBSOLETE";break;
}
console.log("The applicationCache status is: "+ACSTATE)

//防止页面后退
window.history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    window.history.pushState(null, null, document.URL);
});

//音量控制
function lowVolume(self) {
    if (parent.document.referrer.length == 0) {
        if (self.volume > 0.3) self.volume = 0.3
        console.log("Now the volume of background music is: ",self.volume.toString())
    }
}