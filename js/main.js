//Create a delete button and append it to each list item
var myNodeList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodeList.length; i+) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7")
    span.className = "delete"
    span.appendChild(txt);
    myNodeList[i].appendChild(span)
}

//Click on the delete button to delete the current list item
var close = document.getElementsByClassName("delete")
var i;
for (i = 0; i < close.length; i+) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//Add a checked button when a list item is clicked
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
    }
}, false);    

//Enter key adds new item to list
document.body.onkeyup = function (e) {
    if (e.keyCode == 13) {
        newElement();
    }
};
