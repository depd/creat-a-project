 
// * @Author: Marte
// * @Date:   2016-11-23 10:14:36
// * @Last Modified by:   Marte
// * @Last Modified time: 2016-12-12 10:21:23


$(document).ready(function(){
    // 获取浏览器的宽度
    // var bodyClientHeight = document.documentElement.clientHeight;
    // if(bodyClientHeight <= ($(".head").height() + $(".content").height())){
    //     $("body").animate({
    //         "scrollTop":$(".head").height() + 10
    //     },10);
    // }
    // 显示二维码
    $(".chat").hover(function(){
        $(".chatBg").show();                    
    },function(){
        $(".chatBg").hide();    
    });    
    // 显示电话号码
    $(".phone").hover(function(){
        $(".phoneBg").show();                    
    },function(){
        $(".phoneBg").hide();    
    });
    // 图片变大
    $(".ps").mouseenter(function(){
        $(this).addClass('widthHeight');
        $(this).addClass('topBottom');
    });
    $(".ps").mouseleave(function(){
        $(this).removeClass('widthHeight');
        $(this).removeClass('topBottom');
    })
    // 字体变大
    // $(".ns").hover(function(){
    //     $(this).find(".wordFont").addClass("changeword");
    //     $(this).addClass('addtop');
    // },function(){
    //     $(this).find(".wordFont").removeClass("changeword");
    //     $(this).removeClass('addtop');
    // })
    // 字体切换图片变大
    $(".ns img").hover(function(){
        // for(var i = 0; i < $(".ns img").size(); i++){
        //     $(".ns img").eq(i).attr({"src":$(".ns img").eq(i).attr("src").replace("n","b")})
        // }
        $(this).attr({"src":$(this).attr("src").replace("b","n")});
    },function(){
        $(this).attr({"src":$(this).attr("src").replace("n","b")});    
    })
});