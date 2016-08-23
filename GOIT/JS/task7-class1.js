var classNames = ['header','menu','menu__item','menu__item','menu__item','link','link','link_type_red','footer','tabs','tabs__item','tabs__item','tabs__item','tabs__item','tabs__item','image','image'];
var classesObj = {};

classNames.forEach(function(elem) {
    if (!classesObj[elem]) {
        classesObj[elem] = 1;
    }
    else {
        classesObj[elem] += 1;
    }
});

var result = [];
for (var classes in classesObj) {
    result.push(classes)
}

result.sort(function(a,b) {
    return classesObj[b] - classesObj[a];
})

console.log(result);
