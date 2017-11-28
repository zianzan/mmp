$(function () {
   $.ajax({
       type:"get",
       url:"http://localhost:9090/api/getcoupon",
       dataType:"json",
       success:function (data) {
           console.log(data);
           $(".count_content_ul").html(template("tpl1",data));
           
       }
   })
});
