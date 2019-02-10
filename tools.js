console.log("Successed in importing tools.js.")
function saveArray(Item,new_arrey,index) {
    index = Number(index)
    localStorage.setItem(Item, JSON.stringify(new_arrey));
    return 0;
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