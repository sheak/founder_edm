/* 
* @Author: sheak
* @Date:   2015-08-04 13:25:19
* @Last Modified by:   anchen
* @Last Modified time: 2015-09-24 16:02:46
*/

$(function(){
/********************************************/
    // 监听页面滚动事件
    // 初始化后滚动显示按钮
    // 若按钮已经显示，则不做操作
    $(window).scroll(function(){
        $("#f_edm_share_btn:hidden").fadeIn();
    });


    var show_share_dialog = function(){
        var _share_dialog = $("#share_dialog"),
            _share_dialog_len = _share_dialog.length;

        if(_share_dialog_len > 0){
            _share_dialog.show();
        }else{
            $(".f_edm_box").append('<div id="share_dialog"></div><div id="dialogTips"><img src="/assets/wechat/qrcode/imgs/f_edm_share_memb.png"></div>');
        }
        _share_dialog.css("height" , $(window).height())
    }
    $("#f_edm_share_btn a").click(function(){
        show_share_dialog();
    });


    /* 微信返回后刷新页面 */
    $(".f_edm_c_list dl dd a").click(function(){
        window.localStorage.setItem("_isBackTo","back");
    });
    
    










/********************************************/
});