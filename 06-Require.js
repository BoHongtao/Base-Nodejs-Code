/**
 * Created by john on 2018/10/17.
 * 模块系统，通过require引入其他的模块
 */


// var hello = require('./hello');
// //调用
// hello.world();


/////////////////////调用类/////////////
var Hello = require('./hello');
hello = new Hello();
hello.setName('bohongtao');
hello.sayHello();