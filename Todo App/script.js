var ul = document.getElementById('list');
var li;



var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)



function addItem() {


    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textNode = document.createTextNode(item);

    if (item === '') {
        return false;
    }
    else {
        li = document.createElement('li')
        li.setAttribute('class', 'visual');

        //creating checkbox
        var checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.setAttribute('id', 'check');

        //creating label
        var label = document.createElement('label');
        label.setAttribute('for', 'item')

        ul.appendChild(label);
        li.appendChild(checkBox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

        input.value = '';
        setTimeout(() => {
           li.className = 'visual'; 
        }, 5);     
   
    }
 
}


function removeItem() {
    li = ul.children

    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(ul.children[index])
        }




    }
}