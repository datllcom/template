$win = document.domain;
if($win.indexOf('datll.com')<0&&$win.indexOf('pptv.cn')<0){
        alert("采集联盟提示:请购买正版模板！QQ：834023388");
location.href='http://t.cn/REfNqUr';//不是设定的域名就会跳转
}
$.extend({ 
     includePath: '//datllcom.github.io/template/', 
         includeroute: 'pp/datll-pp_wap/js/', 
     include: function(file) { 
        var files = typeof file == "string" ? [file]:file; 
        for (var i = 0; i < files.length; i++) { 
            var name = files[i].replace(/^\s|\s$/g, ""); 
            var att = name.split('.'); 
            var ext = att[att.length - 1].toLowerCase(); 
            var isCSS = ext == "css"; 
            var tag = isCSS ? "link" : "script"; 
            var attr = isCSS ? " type='text/css' rel='stylesheet' " : " language='javascript' type='text/javascript' "; 
            var link = (isCSS ? "href" : "src") + "='" + $.includePath + $.includeroute + name + "'"; 
            var s = "<" + tag + attr + link + "></" + tag + ">"; 
            if ($(tag + "[" + link + "]").length == 0) document.write(s); 
                        
        } 
   } 
});

$.include('js/swiper.js'); 
$.include('js/vendor.js'); 
$.include('js/amazeui.min.js'); 
$.include('js/handlebars.min.js'); 
$.include('js/jquery-1.11.1.min.js');
