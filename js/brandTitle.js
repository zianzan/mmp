$(function () {
   $.ajax({
       type:"get",
       url:"http://localhost:9090/api/getbrandtitle",
       dataType:"json",
       success:function (data) {
           console.log(data);
           $(".ranking_content_ul").html(template("tpl1",data));
       }
   })
});
