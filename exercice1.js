const input = document.getElementById('user-value');
const div = document.querySelector('div');
const div2 = document.getElementById('item5');
const p = document.querySelector('p');
const fullArrayP = document.getElementById('fullArray')
let array = [];

document.getElementById('submit').addEventListener("click", function () {
    if (input.value.length !== 0) {
        array.push(input.value);
    }
    if (array.length === 10) {
        div.innerText = array[Math.floor(Math.random() * array.length)];
    } else if (array.length < 10)
        div.innerText = "Vous devez entrer au moins dix valeurs"
    if (array.length === 5)
        div2.innerText = array[4];
});

// random button
document.getElementById('random').addEventListener("click", function () {
    p.innerText = array[Math.floor(Math.random() * array.length)];
});

// show array button
document.getElementById('showArray').addEventListener("click", function () {
    fullArrayP.innerText = '';
    array.forEach(function (value) {
        fullArrayP.innerText += array.indexOf(value) + ' - ' +value+ '\n';
    })
});

// delete last button
document.getElementById('deleteLast').addEventListener('click', function () {
    array.pop();
    fullArrayP.innerText = '';
    array.forEach(function (value) {
        fullArrayP.innerText += array.indexOf(value) + ' - ' +value+ '\n';
    })
});

// delete all button
document.getElementById('deleteAll').addEventListener('click', function () {
    array.splice(0, array.length);
    fullArrayP.innerText = '';
});
