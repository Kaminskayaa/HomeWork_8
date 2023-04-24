function HashStorageFunc() {
    let _obj = {};

    this.addValue = function (key, value) {
        _obj[key] = value;
    }

    this.getValue = function (key) {
        return _obj[key];
    }

    this.deleteValue = function (key) {
        if (!(key in _obj)) {
            return false;
        } else {
            delete _obj[key];
        }
    }

    this.getKeys = function () {
        return Object.keys(_obj);
    }
}

var drinkStorage = new HashStorageFunc();

var addButton = document.getElementById('add');
addButton.onclick = function () {
    var coctail = {};
    var name = prompt('Введите название напитка');
    var isAlc = prompt('Он алкогольный?');
    var structure = prompt("Способ приготовления");
    var result = isAlc + " " + structure;
    drinkStorage.addValue(name, result);
}

var addButton = document.getElementById('about');
addButton.onclick = function () {
    var name = prompt('Введите название напитка');
    if (drinkStorage.getValue(name)) {
        alert(drinkStorage.getValue(name)); // не получилось как в задании
    } else {
        alert('Такого напитка нет');
    }
}

var addButton = document.getElementById('delete');
addButton.onclick = function () {
    var name = prompt('Введите название напитка');
    if (drinkStorage.deleteValue(name)) {
        alert('Такого напитка нет');
    } else {
        alert('Напиток удален');
    }
}

var addButton = document.getElementById('all');
addButton.onclick = function () {
    alert(drinkStorage.getKeys());
}
