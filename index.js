//防止页面后退
window.history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    window.history.pushState(null, null, document.URL);
});

// if (! document.cookie) document.cookie = "path=/"

//音量控制
function lowVolume(self) {
    if (document.referrer.length == 0) {
        if (self.volume > 0.3) self.volume = 0.3
    }
}