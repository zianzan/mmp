mui('.mui-scroll-wrapper').scroll({
    scrollY: false, //是否竖向滚动
    scrollX: true, //是否横向滚动
    indicators:false,
    deceleration:0.0006 //阻尼系数,系数越小滑动越灵敏
});

$(function () {
    // 获取导航栏的内容
   $.ajax({
       type:"get",
       url:"http://localhost:9090/api/getbaicaijiatitle",
       dataType:"json",
       success:function (data) {
           // console.log(data);
           $(".mui-scroll").html(template("tpl1",data));
       }
   });
// 获取商品
    var id = 0;
    function render(id) {
        $.ajax({
            type:"get",
            url:"http://localhost:9090/api/getbaicaijiaproduct",
            data:{
                titleid:id
            },
            success:function (data) {
                $(".baicai_product").html(template("tpl2",data));
                // console.log(data);
            }
        });
    }
    render(id);

    $(".mui-scroll").on("click","li",function () {
        var id = $(this).data("id");
        // console.log(id);
        render(id);
    });
});