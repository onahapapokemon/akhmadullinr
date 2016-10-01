var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];
var obj = {};

function uniqueElem(arr) {
    arr.forEach(function(x) {
        if (!obj[x]) obj[x] = 1;
        else obj[x] += 1;
    });
    var result = [];
    for (var classes in obj) {
        result.push(classes);
    }
    result.sort(function(a,b) {
        return obj[b] - obj[a];
    })
    return result;
}

console.log(uniqueElem(arr));
console.log(obj);

/*
 Имеется массив css классов со старницы.

 var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ... ];
 Необходимо из этого массива получить массив с уникальными именами классов (без повторений)
 отсортированный по частоте использования (наиболее часто используемые - впереди).

 Если классы используются одинаковое количество раз - между ними не важно какой будет первее.

 */