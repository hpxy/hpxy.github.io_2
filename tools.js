console.log("Successed in importing tools.js.")

// 保存数组
function saveArray(Item,new_arrey,index) {
    index = Number(index)
    localStorage.setItem(Item, JSON.stringify(new_arrey));
    return ;
}
    
// 获取数组
function getArray(Item) {
    return JSON.parse(localStorage.getItem(Item));
}

// 追加数组
function addtoArray(Item,index,data) {
    index = Number(index)
    var new_arrey = JSON.parse(localStorage.getItem(Item));
    new_arrey[index] = data
    localStorage.setItem(Item, JSON.stringify(new_arrey));
}

// 字符串是否以target结尾
function endswith(str, target) {
    str = str.toString()
    var start = str.length-target.length;
    var arr = str.substr(start,target.length);
    if(arr == target){
        return true;
    }
    return false;
}

// 创建xml解析器
function _createXMLDoc(filename){
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }
    else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET",filename,false);
    xmlhttp.send();
    return xmlhttp.responseXML;
}

//get cookie
function getCookie(name) {
    var cookies = document.cookie;
    var list = cookies.split("; ");
    var valueList = Array()
    
    for(var i = 0; i < list.length; i++) {
        var arr = list[i].split("=");    
        if(arr[0] == name)
            valueList.push(decodeURIComponent(arr[1]));
    } 
    if (valueList.length >= 1) return valueList[valueList.length-1]
    return '';
}

//appendix cookie
function setCookie(name, value) {
    if (document.cookie)
        document.cookie += "; " + name + "=" + encodeURIComponent(value.toString());
    else 
        document.cookie += name + "=" + encodeURIComponent(value.toString());
}

//rewrite cookie
function resetCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value.toString());
}