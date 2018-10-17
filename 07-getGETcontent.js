/**
 * Created by john on 2018/10/17.
 * 获取get请求的内容
 */
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("value" + params.name);
    res.write("\n");
    res.write("value" + params.url);
    res.end();
}).listen(3000);