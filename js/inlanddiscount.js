$(function () {
   $.ajax({
       type:"get",
       url:"http://localhost:9090/api/getinlanddiscount",
       dataType:"json",
       success:function (data) {
           console.log(data);
           $(".inlan_product_ul").html(template("tpl",data));
       }
   })
});
