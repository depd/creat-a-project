/* 
* @Author: Marte
* @Date:   2016-12-09 11:40:06
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-12 09:48:25
*/

$(document).ready(function(){
    /* 图片墙轮播 */
    var serouse;
    var marginLeft = 0;
    var liSizeLength; /* 需要轮播li标签的个数总长度/2 */
    liSizeLength = ($(".carous ul li").size()/2) * ($(".carous ul li").eq(0).width() + 27);
    serouse = setInterval(function(){
        if(marginLeft != -liSizeLength){
            marginLeft-=1;
            $(".carous ul").css({
                "marginLeft":marginLeft
            });
        }else{
            marginLeft = 0;    
        }
    },10);
    $(".carous ul").hover(function(){
        clearInterval(serouse);
    },function(){
        serouse = setInterval(function(){
            if(marginLeft != -liSizeLength){
                marginLeft-=1;
                $(".carous ul").css({
                    "marginLeft":marginLeft
                });
            }else{
                marginLeft = 0;    
            }
        },10);    
    }) 
});