$(function () {
    var pageid = 1;
    var count;
    function render() {
    $.ajax({
        type:"get",
        url:"http://localhost:9090/api/getmoneyctrl",
        data:{
            pageid:pageid
        },
        dataType:"json",
        success:function (data) {
            $(".disabled_product").html(template("tpl1",data));
            count = Math.ceil(data.totalCount/data.pagesize);
            data.count=count;
            $(".pagination").html(template("tpl2",data));
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

