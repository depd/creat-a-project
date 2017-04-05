/* 
* @Author: Marte
* @Date:   2016-12-12 14:44:33
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-20 09:43:54
*/
function currency(path, param, callBack, method) {
    // 校区域名需要修改
    var school_url = 'tssd.4000669696.com';
    if (method == null) method = 'post';
    var timestamp = Date.parse(new Date());
    var time = timestamp / 1000;
    var guid = 'eb258b4e9956c41f3d50e7de86ed05f7';
    var param = JSON.stringify(param);
    if(param.length === 2){
        param = param.substr(0,param.length-1) + '"school_url":"'+ school_url +'"}'
    }
    else{
        param = param.substr(0,param.length-1) + ',"school_url":"'+ school_url +'"}'
    }
    var cryptToken = 'embedToken';
    var tokenPath = path.match(/\/(\w)+((\?)|$)/i)[0].replace(/\?/,'');
    var num = tokenPath + time + guid + param + cryptToken;
    var signature = window.md5(num);
    $.ajax({
        url: path,
        type: method,
        dataType: 'json',
        data: {'time': time, 'guid': guid, 'signature': signature, 'param': param},
        success: function (data) {
            callBack(data);
        }
    });
}
$(document).ready(function(){
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
    // 获取浏览器的高度
    $(".cover").height($("body").height()); 
    // 点击注册块的显示
    $(".register").click(function(){
        $("#formName").val("");
        $("#formPhone").val("");
        $("#formCode").val("");
        $(".namep").hide();
        $(".phonep").hide();
        $(".codep").hide();
        $(".cover").show();
        $(".covers").show();
    });
    // 点击关闭按钮隐藏
    $(".closed").click(function(){
        $(".cover").hide();
        $(".covers").hide();
        $(".registerSuccess").hide();
    });
    // 输入框的变化
    function inputs(classed){
        $(classed).click(function(){
            $(".total").removeClass("addBorder");
            $(".total").find(".label1").removeClass(".addColor");
            $(classed).find('.label1').addClass("addColor");
            $(classed).addClass("addBorder");
            $(classed).find("input").focus();
            if($(this).parent().prev("div").find("input").val() != ""){
                $(this).parent().prev("div").find("p").hide()
            }
        })
    }
    inputs(".nameValue");
    inputs(".phoneValue");
    inputs(".codeValue");
    // 手机号码
    $("#formPhone").keyup(function(){
        if(/^1[34578]\d{9}$/.test($("#formPhone").val())){
            $(".phonep").hide();
        }
        else{
            $(".phonep").show();
        }
    });
    // 获取验证码
    $(".codeWord").click(function(){
        // 判断手机号码是否存在
        var mobile = $("#formPhone").val();
        if(/^1[34578]\d{9}$/.test(mobile)){
            if($(".codeWord").text() == "获取验证码"){
                $(".codeWord").removeAttr('disabled');
                var time = 60;
                var inter = setInterval(function(){
                    if(time >= 0){
                        $(".codeWord").text(time + "s后再次获取");
                        time -=1;
                    }
                    else{
                        $(".codeWord").text("获取验证码");
                        clearInterval(inter);    
                    }
                },1000) 
                // 验证
                currency(
                    "http://em.4000669696.com/send_code",
                    {"tel":mobile},
                    function(data){
                        if(data.ServerNo == "SN200"){
                            alert("发送成功");
                        }
                    },
                    "post"
                )
            }
            else{
                $(".codeWord").attr("disabled",true);    
            }    
        }
        else{
            $(".phonep").show();
        }
    });
    // 立即体验
    $(".immediate").click(function(){
        var nameValue = $("#formName").val();
        var phoneValue = $("#formPhone").val();
        var codeValue = $("#formCode").val();
        if(nameValue != ""){
            $(".namep").hide();
            if(phoneValue != "" && (/^1[34578]\d{9}$/.test(phoneValue))){
                $(".phonep").hide();
                if(codeValue != ""){
                    $(".codep").hide();
                    currency(
                        "http://em.4000669696.com/register",
                        {"tel":phoneValue,"pass":phoneValue,"code":codeValue,"name":nameValue},
                        function(data){
                            if(data.ServerNo == "SN200"){
                                $(".covers").hide();
                                $("#formName").val("");
                                $("#formPhone").val("");
                                $("#formCode").val("");
                                $(".registerSuccess").show();
                            }
                        },
                        "post"
                    )
                }
                else{
                    $(".codep").show();
                }
            }
            else{
                $(".phonep").show();
            }
        }
        else{
            $(".namep").show();
        }
    })
});