var ul = document.getElementById('list');
var li;



var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)



function addItem() {

    var item = document.getElementById('input').value;

    console.log(item);
}


function removeItem() {
    li = ul.children

    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(ul.children[index])
        }




    }
}