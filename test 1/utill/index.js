var event = {
    list: {},
    //发布
    on: function (key,fn) {
        if (!this.list[key]){
            this.list[key] = []
        }
        this.list[key].push(fn);
    },
    //订阅
    emit: function () {
        var key = [].shift.call(arguments),
            fns = this.list[key],
            self = this,
            argumentsConst = arguments;
        if (fns && fns.length > 0){
            fns.forEach(function(fn) {
                 //这里要注意。直接写this会指向window
                 //还有，foreach有三个参数。所以这里写 arguments
                // 就会是foreach的参数，如果换成箭头函数，无所谓，
                // 因为不会产生自己的arguments,super和new.target等对象
                 fn.apply(self, argumentsConst);
            })
        }else {
            console.error('事件不存在')
        }
    },
    //取消订阅
    remove: function (key, fn) {
        var fns = this.list[key];
        if (!fns) {
            return false
        }
        // 如果没有传对应函数的话
        // 就会将key值对应缓存列表中的函数都清空掉
        if (!fn) {
            fns && (fns.length = 0)
        } else {
            fns.forEach(function (cb, index) {
                if (fn === cb) {
                    fns.splice(index, 1);
                }
            })
        }
    }
};