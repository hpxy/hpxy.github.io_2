console.log("Successed in importing tools.js.")
function saveArray(Item,new_arrey,index) {
    index = Number(index)
    localStorage.setItem(Item, JSON.stringify(new_arrey));
    return ;
}
    
function getArray(Item) {
    return JSON.parse(localStorage.getItem(Item));
}

function addtoArray(Item,index,data) {
    index = Number(index)
    var new_arrey = JSON.parse(localStorage.getItem(Item));
    new_arrey[index] = data
    localStorage.setItem(Item, JSON.stringify(new_arrey));
}

function endswith(str, target) {
    str = str.toString()
    var start = str.length-target.length;
    var arr = str.substr(start,target.length);
    if(arr == target){
        return true;
    }
    return false;
}


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