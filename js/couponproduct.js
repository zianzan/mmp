$(function () {
    var id = tools.getParam("couponid");
    // console.log(id);
    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getcouponproduct",
        data: {
            couponid: id
        },
        dataType: "json",
        success: function (data) {
            // console.log(data);
            $(".couponproduct_goods").html(template("tpl", data));
        }
    });

    // 获取到点击的图片.在遮蔽层显示

    // 下一页
    $(".couponproduct_goods").on("click", "a", function () {
        $(".black_box").addClass("now");
        var $thisa = $(this);
        var imgsrc = $(this).find("img").attr("src");
        $(".black_box_img img").attr("src",imgsrc);

        // 几率第一次点击的a的兄弟a
        // next是记录下个兄弟的src
        var next = $thisa.next().find("img").attr("src");

        var nextthis=$thisa.next();
        $(".next_img").on("click",function () {
            $(".black_box_img img").attr("src",next);
            nextthis = nextthis.next();
            next = nextthis.find("img").attr("src");
        });

        // 上一页


    });



    // 点击退出
    $(".backtrack").on("click", function () {
        $(".black_box").removeClass("now");
    });
    // 下一个图片

});

