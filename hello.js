/**
 * Created by john on 2018/10/17.
 * 通过exports让其他模块调用
 */


// exports.world = function () {
//     console.log('Hello NodeJs');
// };


/////////////让类被其他模块调用//////////
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};
module.exports = Hello;
