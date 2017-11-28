
$(function () {

    // 分类页
    $.ajax({
       type:"get",
        url:"http://localhost:9090/api/getcategorytitle",
        dataType:"json",
        success:function (data) {
           $(".cate_classify_first").html(template("tpl1",data));
        }
    });
    $(".cate_classify_first").on("click",".cate_classify_first_li",function () {
        var id =  $(this).data("id");
        console.log(id);
        $.ajax({
            type:"get",
            url:"http://localhost:9090/api/getcategory",
            data:{
                titleid:id
            },
            dataType:"json",
            success:function (msg) {
                $(".cate_classify_second").html(template("tpl2",msg));
                console.log(msg);
            }
        });

    });





});
