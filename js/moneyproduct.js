$(function () {
    var id = tools.getParam("productId");
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getmoneyctrlproduct",
        dataType:"json",
        data:{
            productid:id
        },
        success:function (data) {
            console.log(data);
           $(".mmb_particular").html(template("tpl1",data));
        }
    })
});
