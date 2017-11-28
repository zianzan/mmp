
$(function () {
    var brandtitleid = tools.getParam("brandtitleid");
   $.ajax({
       type:"get",
       url:"http://localhost:9090/api/getbrand",
       data:{
           brandtitleid:brandtitleid
       },
       dataType:"json",
       success:function (data) {
           // console.log(data);

           $(".ranking_goods_ul").html(template("tpl1",data));
       }
   });

    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getbrandproductlist",
        data:{
            brandtitleid:brandtitleid
        },
        dataType:"json",
        success:function (data) {
            console.log(data);

            $(".ranking_content").html(template("tpl2",data));
            // $(".conment_content_ul").html(template("tpl3",data));
        }
    });



       // $.ajax({
       //     type:"get",
       //     url:"http://localhost:9090/api/getproductcom",
       //     data:{
       //         productid:1
       //     },
       //     dataType:"json",
       //     success:function (data) {
       //
       //         console.log(data);
       //         $(".ranking_content").html(template("tpl3",data));
       //     }
       // });
});
