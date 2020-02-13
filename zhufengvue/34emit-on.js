//发布 emit 订阅 on {}
function Girl() {
    this._events = {}
}
Girl.prototype.on = function (eventName,callback) {
    if(this._events[eventName]){//不是第一次
        this._events[eventName].push(callback);//{失恋:[cry,eat,shopping]}
    }else{
        this._events[eventName] = [callback]//{失恋:[cry]}
    }
}
Girl.prototype.emit = function (evevtName,...args) {//[我，你，他]
    // [].slice.call(arguments,1);
    // Array.from(arguments).slice(1)
    if(this._events[evevtName]){
        this._events[evevtName].forEach(cb =>cb(...args))
    }
}
let girl = new Girl();
let cry = (who) =>{
    console.log(who+'哭了')
}
let shopping = (who)=>{
    console.log(who+'购物')
}
let eat = (who)=>{
    console.log(who+'吃')
};
girl.on('失恋',cry);//{失恋:[cry]}
girl.on('失恋',shopping);
girl.on('失恋',eat);
girl.emit('失恋','我','你')