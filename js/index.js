$(function () {
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getindexmenu",
        dataType:"json",
        success:function (data) {
          $(".mmb_nav_ul").html(template("tpl1",data));

        }
    });

    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getmoneyctrl",
        dataType:"json",
        success:function (data) {
            $(".disabled_product").html(template("tpl2",data));
        }
    });
    
    $(".mmb_nav_ul").on("click","li:eq(7)",function () {
       $(this).nextAll().toggleClass("now");
    })
});
