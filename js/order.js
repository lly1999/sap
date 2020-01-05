function jump() {
    window.location.href = "index.html";
}

            //=================================================商品数量==============================================
            var $plus = $('.plus'),
                $reduce = $('.reduce'),
                $all_sum = $('.sum');
            $plus.click(function () {
                var $inputVal = $(this).prev('input'),
                    $count = parseInt($inputVal.val()) + 1,
                    $obj = $(this).parents('.amount_box').find('.reduce'),
                    $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
                    $price = $(this).parents('.order_lists').find('.price').html(),  //单价
                    $priceTotal = $count * parseInt($price.substring(1));
                $inputVal.val($count);
                $priceTotalObj.html('￥' + $priceTotal);
                if ($inputVal.val() > 1 && $obj.hasClass('reSty')) {
                    $obj.removeClass('reSty');
                }
                //   totalMoney();

                totalMoney1();
            });

            $reduce.click(function () {
                var $inputVal = $(this).next('input'),
                    $count = parseInt($inputVal.val()) - 1,
                    $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
                    $price = $(this).parents('.order_lists').find('.price').html(),  //单价
                    $priceTotal = $count * parseInt($price.substring(1));
                if ($inputVal.val() > 1) {
                    $inputVal.val($count);
                    $priceTotalObj.html('￥' + $priceTotal);
                }
                if ($inputVal.val() == 1 && !$(this).hasClass('reSty')) {
                    $(this).addClass('reSty');
                }
                //totalMoney();
                totalMoney1();
            });

            $all_sum.keyup(function () {
                var $count = 0,
                    $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
                    $price = $(this).parents('.order_lists').find('.price').html(),  //单价
                    $priceTotal = 0;
                if ($(this).val() == '') {
                    $(this).val('1');
                }
                $(this).val($(this).val().replace(/\D|^0/g, ''));
                $count = $(this).val();
                $priceTotal = $count * parseInt($price.substring(1));
                $(this).attr('value', $count);
                $priceTotalObj.html('￥' + $priceTotal);
                //totalMoney();
                totalMoney1();
            })

            //======================================移除商品========================================



            //======================================总计==========================================


            //==localstorage读
            $().ready(function(){
                local1();
            });
            function local1(){
        if(localStorage.no1==0){
            $("#no1").remove();}
        if(localStorage.no2==0){
            $("#no2").remove();}
        if(localStorage.no3==0){
            $("#no3").remove();}
        if(localStorage.no4==0){
            $("#no4").remove();}
        if(localStorage.no5==0){
            $("#no5").remove();}
        if(localStorage.no6==0){
            $("#no6").remove();}
        if(localStorage.no7==0){
            $("#no7").remove();}
        if(localStorage.no8==0){
            $("#no8").remove();}
        if(localStorage.no9==0){
            $("#no9").remove();}
        if(localStorage.no10==0){
            $("#no10").remove();}
        if(localStorage.no11==0){
        $("#no11").remove();}
        if(localStorage.no12==0){
        $("#no12").remove();} 
        if(localStorage.no13==0){
        $("#no13").remove();} 
        if(localStorage.no14==0){
        $("#no14").remove();}  
        if(localStorage.no15==0){
        $("#no15").remove();}  
        if(localStorage.no16==0){
        $("#no16").remove();}  
        if(localStorage.no17==0){
        $("#no17").remove();}        
        if(localStorage.no18==0){
        $("#no18").remove();}     
        totalMoney1();
    }
        
     
     
            function clickRemove(id) {
                $("#" + id).remove();
                totalMoney1();
            }
            totalMoney1();
            function totalMoney1() {
                var tol = 0;
                $(".sum_price").each(function () {
                    var a = $(this).text();
                    var b = a.substring(1, a.length);
                    tol += Number(b);

                });
                $("#tol").text(tol);
            }