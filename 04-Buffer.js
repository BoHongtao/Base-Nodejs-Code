/**
 * Created by john on 2018/10/16.
 * 缓冲区
 */
//缓冲区的作用主要是用来处理流文件：比如以流的方式打开一个文件（文件流），我们可以把读取的某段二进制数据保存到缓冲区中
//v6.0以后，官方文档里面建议使用 Buffer.from() 接口去创建Buffer对象
const buf = Buffer.from('runoob', 'ascii');

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));

//转换成json对象
console.log(buf.toJSON())

//缓冲区合并
var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());
