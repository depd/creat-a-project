/* 
* @Author: Marte
* @Date:   2016-12-09 10:42:12
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-20 10:09:35
*/

$(document).ready(function(){
    //切换国家
    $(".tabDiv ul li").click(function(){
        $(".tabDiv ul li").find("span").removeClass("addspan");
        $(this).find("span").addClass('addspan');
        $(".fatherLi").hide();
        $(".fatherLi").eq($(this).index()).show();
    }); 
    // 点击私人订制后
    $(".contentText .provateLi").click(function(){
        $(".inforTitle").text("定制您的专属夏令营");
        $(".immediate").text("立即定制");
        $(".connet").text("您的定制信息提交成功，私人顾问将最快与您取得联系，请保持手机畅通");
        $("#formName").val("");
        $("#formPhone").val("");
        $("#formCode").val("");
        $(".namep").hide();
        $(".phonep").hide();
        $(".codep").hide();
        $(".cover").show();
        $(".covers").show();
    });
    $(".closed").click(function(){
        $(".cover").hide();
        $(".covers").hide();
        $(".registerSuccess").hide();
        $(".inforTitle").text("注册获得您的私人教学顾问");
        $(".immediate").text("立即体验");
        $(".connet").text("您的私人顾问将最快与您取得联系，请保持手机畅通");
    });  
});