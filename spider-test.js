/**
 * Created by john on 2018/10/17.
 * 尝试自己写个基于nodejs的爬虫
 */
//引入需要的包
var request = require('request');
var cheerio = require('cheerio');

var url = "https://jn.zu.anjuke.com/fangyuan/p2/"

//请求数据
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
 * 解析HTML
 */
function dataPraseDolphin(html) {
    var $ = cheerio.load(html);
    var rooms = $('.list-content').children('.zu-itemmod');
    for(i=0;i<rooms.length;++i){
        var room = rooms[i];
        var title = $(room).find('.zu-info').find('h3').text().replace(/(^\s*)|(\s*$)/g, "");
        var info = $(room).find('.zu-info').find('.tag').text().replace(/(^\s*)|(\s*$)/g, "");
        var add = $(room).find('.zu-info').find('address').text().replace(/(^\s*)|(\s*$)/g, "").replace('\n','').replace(' ','');

        console.log(title);
        console.log(info);
        console.log(add);
    }
    // console.log(rooms)

}


dataRequest(url)