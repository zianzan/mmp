
$(function () {
    var category = tools.getParam("category");
    function getcate() {
        return category;
    }

    var id = tools.getParam("categoryid");
    var pageid = tools.getParam("pageid");
    var count;

    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getcategorybyid",
        data:{
            categoryid:id
        },
        dataType:"json",
        success:function (data) {
           $(".list_nav").html(template("tpl1",data));
            // console.log(data);
        }
    });
    function render() {
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getproductlist",
        data:{
            categoryid:id,
            pageid : pageid,
            category:category
        },
        dataType:"json",
        success:function (data) {
            data.category = getcate();

            $(".product_list").html(template("tpl2",data));

            // 分页功能
            count = Math.ceil(data.totalCount/data.pagesize);
            data.count=count;
            $(".pagination").html(template("tpl3",data));
            $("select").val(pageid);
            console.log(data);
        }
    });
    }
    render();
    $(".list_page").on("change","select",function () {
        pageid = $(this).val();
        render();
    });
    $(".prev_page").on("click",function () {
        if (pageid > 1) {
            pageid --;
            render();
        }
    });
    $(".next_page").on("click",function () {
        if (pageid < count){
            pageid ++;
            render();
        }
    });

});