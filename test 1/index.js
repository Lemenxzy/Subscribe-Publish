let corp = {};

corp.list = {};

//订阅
corp.on = function (key, fn) {
    if (!this.list[key]) {
        this.list[key] = []
    }
    this.list[key].push(fn)
};
// {
//     {
//         "a": [],
//         "b": []
//     }
// }

//发布
corp.emit = function () {
    //喔，原来是因为arguments是一个类数组对象
    // ，虽然他也有下标，但并非真正的数组
    // ，所以他不能和数组一样进行排序添加之类的操作
    // ，这种情况下 借用array.prototype对象上的方法
    let key = [].shift.call(arguments),
        fns = this.list[key];
    //如果不存在就return
    if (fns && fns.length > 0) {
        fns.forEach(listFn => {
            listFn.apply(this, arguments)
        })
    }
};

//测试
corp.on('console', (name, age) => {
    console.log(`你的姓名${name}`,`你的年龄${age}`)
});

setTimeout(()=>{
    corp.emit('console', 'xuzhiyuan', 21);
}, 2000);
