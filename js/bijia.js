/**
 * Created by asus on 2017/11/7.
 */
var category = tools.getParam("category");
// console.log(category);
$(function () {
    var id = tools.getParam("productid");
    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getproduct",
        data: {
            productid: id
        },
        dataType: "json",
        success: function (data) {
            data.category = category;
            $(".bijia_content").html(template("tpl1", data));
        }
    });
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getproductcom",
        data: {
            productid: id
        },
        dataType:"json",
        success:function (data) {
            // console.log(data);
            $(".friend_evaluate_content").html(template("tpl2",data));
        }
    });
});