//Create a delete button and append it to each list item
var myNodeList = document.getElementsByTagName("li");
var i;
//Enter key adds new item to list
document.body.onkeyup = function (e) {
    if (e.keyCode == 13) {
        newElement();
    }
};
