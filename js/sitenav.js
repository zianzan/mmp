$(function () {
   $.ajax({
       type:"get",
       url:"http://localhost:9090/api/getsitenav",
       dataType:"json",
       success:function (data) {
           console.log(data);
           $(".sitenav_img").html(template("tpl",data));
           
       }
   }) 
});
