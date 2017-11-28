$(function () {
$.ajax({
    type:"get",
    url:"http://localhost:9090/api/getgsshop",
    dataType:"json",
    success:function (data) {
        console.log(data);
        $(".second_nav1").html(template("tpl1",data));
    }
});
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getgsshoparea",
        dataType:"json",
        success:function (data) {
            console.log(data);
            $(".second_nav2").html(template("tpl2",data));
        }
    });

    function render(shopid,areaid){
        $.ajax({
            type:"get",
            url:"http://localhost:9090/api/getgsproduct",
            dataType:"json",
            data:{
                shopid:shopid,
                areaid:areaid
            },
            success:function (data) {
                console.log(data);
                $(".gsproduct_goods_ul").html(template("tpl3",data));
            }
        });
    }
    var shopid = 0;
    var  areaid = 0;
    render(shopid,areaid);
// 点击商店显示
    $(".store_nav").on("click",function () {
        $(this).children().toggleClass("db");
        $(this).siblings().children().removeClass("db");
        $(".store_nav").on("click","li",function () {
            $(this).children().addClass("gouxuannow");
            $(this).siblings().children().removeClass("gouxuannow");
            // 获取自定义ID
            shopid = $(this).data("storeId");
            var storename = $(this).data("storeName");
            console.log(shopid);
            console.log(storename);
            $(".store_nav i").text(storename);
            render(shopid,areaid);
        })
    });
    // 城市
    $(".city_nav").on("click",function () {


        $(this).children().toggleClass("db");
        $(this).siblings().children().removeClass("db");

        $(".city_nav").on("click","li",function () {
            // 获取自定义ID
            $(this).children().addClass("gouxuannow");
            $(this).siblings().children().removeClass("gouxuannow");

             areaid = $(this).data("areaId");
            var cityename = $(this).data("areaName");
            console.log(shopid);
            $(".city_nav i").text(cityename);
            render(shopid,areaid);
        })
    });
    // 价格
    $(".price_nav").on("click",function () {
        $(this).children().toggleClass("db");
        $(this).siblings().children().removeClass("db");
    });
});

