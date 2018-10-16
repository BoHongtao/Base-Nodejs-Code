/**
 * Created by john on 2018/10/16.
 * 读写流  管道
 */
var fs = require('fs');
var readdata = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
    readdata += chunk;
});

readerStream.on('end',function(){
    console.log("读取文件的结果是："+readdata);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("读程序执行完毕");
////////////////////////////////////////////////////////////////////////////
var writerdata = "这是写程序要写入的数据";

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('input.txt');

// 使用 utf8 编码写入数据
writerStream.write(writerdata,'UTF8');

// 标记文件末尾
writerStream.end();

writerStream.on('finish',function () {
    console.log("写入finish");
});
writerStream.on('error',function () {
    console.log(err.stack);
});

console.log("写程序执行完毕");




