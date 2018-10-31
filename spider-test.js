/**
 * Created by john on 2018/10/17.
 * 尝试自己写个基于nodejs的爬虫
 */
//引入需要的包
var request = require('request');
var cheerio = require('cheerio');
var mysql   = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'spider'
});
var url = "https://jn.zu.anjuke.com/fangyuan/p2/"
/*
 * 请求数据
 */
function dataRequest(dataurl) {
    request({
        url:dataurl,
        method:'GET',
    },function (err,red,body) {
        //请求到body
        if(err){
            console.log(dataurl);
            console.error('[ERROR]Collection' + err);
            return;
        }
        if(dataurl && dataurl == url){
            dataPraseDolphin(body);
        }
    })
}

/*
 * 保存到mysql
 */
function save(title,info,add) {
    var  addSql = 'INSERT INTO node_room(id,title,info,address) VALUES(0,?,?,?)';
    var  addSqlParams = [title,info, add];
    connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
            console.log(err.sql)
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }
        console.log('--------------------------INSERT----------------------------');
        console.log('保存数据',addSqlParams);
        console.log('-----------------------------------------------------------------\n\n');
    });
}

/*
 * 解析HTML
 */
function dataPraseDolphin(html) {
    var $ = cheerio.load(html);
    var rooms = $('.list-content').children('.zu-itemmod');
    for(i=0;i<rooms.length;++i){
        var room = rooms[i];
        var title = $(room).find('.zu-info').find('h3').text().replace(/(^\s*)|(\s*$)/g, "");
        var info = $(room).find('.zu-info').find('.tag').text().replace(/(^\s*)|(\s*$)/g, "");
        var add = $(room).find('.zu-info').find('address').text().replace(/(^\s*)|(\s*$)/g, "").replace('\n','').replace(' ','').replace(/\s/g, "");
        save(title,info,add);
    }
}
//发起请求
dataRequest(url);
