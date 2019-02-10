//防止页面后退
window.history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    window.history.pushState(null, null, document.URL);
});
