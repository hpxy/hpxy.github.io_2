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