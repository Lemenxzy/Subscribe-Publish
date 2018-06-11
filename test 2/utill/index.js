//工厂模式实现浅拷贝
function CloneObj(obj) {
    var newObj = {};
    if (obj && Object.prototype.toString.call(obj) === "[object Object]" && JSON.stringify(obj) !== "{}"){
        for (var key in obj) {
            newObj[key] = obj[key]
        }
    }
    return newObj;
}

var newObj = CloneObj({name: 'a', age: 24});
console.log(newObj);


//工厂模式实现深拷贝
function CloneDeep(obj, newobj) {
    var newObj = newobj || {};
    if (obj && Object.prototype.toString.call(obj) === '[object Object]') {
        for (var key in obj) {
            if (typeof obj[key] !== 'object') {
                if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
                    newObj[key] = {};
                }else if (Object.prototype.toString.call(obj[key]) === '[object Array]') {
                    newObj[key] = [];W
                }
                //递归
                CloneObj(obj[key], newObj[key])
            }else {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}


var newdeepclone = CloneDeep({a:{a:1}});
console.log(newdeepclone);