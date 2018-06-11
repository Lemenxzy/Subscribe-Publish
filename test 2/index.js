/**
 * 工厂模式 用来生成一个新的obj
 *
 */
function Animal(opts){
    var obj = new Object();
    obj.name = opts.name;
    obj.color = opts.color;
    obj.getInfo = function(){
        console.log('名称：'+obj.name +'， 颜色：'+ obj.color);
    };
    return obj;
}

var cat = Animal({name: '波斯猫', color: '白色'});
cat.getInfo();