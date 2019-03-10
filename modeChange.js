function modeChange() {
    icon = document.getElementById("change_mode_icon")
    mode = window.getFilename(icon.src)
    
    console.log("The icon is: "+mode)
    
    if (mode == "moon.svg") {
        icon.src = "./icon/sun.svg"
        console.log("The day_mode is on.")
        /* 0 is dark,1 is bright*/
        window.removecss("index_darkmode.css")
        var BRIGHTNESSMODE = 1;
    }
    else if (mode == "sun.svg") {
        icon.src = "./icon/moon.svg"
        console.log("The night_mode is on.")
        window.loadcss("index_darkmode.css")
        var BRIGHTNESSMODE = 0;
    }
}