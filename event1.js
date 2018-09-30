/**
 * Created by john on 2018/9/30.
 */
//引入事件对象
var event = require("events");

//实例化一个事件
var myEvent = new event.EventEmitter();
myEvent.on("Hi",function () {
    console.log("Hello")
});

//触发事件
// myEvent.emit("Hi");

//模拟延时请求
setTimeout(function () {
    myEvent.emit("Hi");
},3000);
