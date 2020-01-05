    $(".next").click(function (e){
        e.preventDefault();

        initdb();
        $(".menunav").toggleClass("hidden display");
        $(".foodpage .mainfood").toggleClass("hidden display");
        $(".welcomepage").toggleClass("hidden display");
        $(".shopingCar").toggleClass("hidden display1");
    })
    $(".menu-items").click(function (e){
        e.preventDefault();
        
        var classname = String($(this).attr("class"));
        $(".foodpage .display").toggleClass("display hidden");

        console.log(classname);
        if(classname.indexOf("Chinesefood") != -1){
            $(".foodpage .Chinesefood").toggleClass("display hidden");
        }
        else if(classname.indexOf("mainfood") != -1){
            $(".foodpage .mainfood").toggleClass("display hidden");
        }
        else if(classname.indexOf("snacks") != -1){
            $(".foodpage .snacks").toggleClass("display hidden")
        }
        else if(classname.indexOf("bavrage") != -1){
            $(".foodpage .bavrage").toggleClass("display hidden");
        }
        else if(classname.indexOf("countrank") != -1){
            $(".foodpage .countrank").toggleClass("display hidden");
        }
        else if(classname.indexOf("recommended") != -1){
            $(".foodpage .recommended").toggleClass("display hidden");
        }
    })
    //本函数从localstorage中统计最多的五个菜品，予以显示，仅对第一次点击响应
    $(".menunav .countrank").one("click",function(e){
    e.preventDefault();
    let rank_array = new Array([18]);//销量数组
    let name_array = new Array([18]);
    let string1;
    for(let i = 1;i <= 18;i = i + 1){
        string1 = "no" + i;
        rank_array[i - 1] = storage[string1];
        name_array[i - 1] = string1;
    }
    for(let i = 0;i < 18;i = i+ 1){
        string1 = "no" + i;
        let counter = i;
        let tem_num,tem_name;
        for(let j = i;j < 18;j = j + 1){
            string2 = "no" + j;
            if(rank_array[i] < rank_array[j]){
                counter = j;
            }
        }
        tem_num = rank_array[counter];
        tem_name = name_array[counter];
        rank_array[counter] = rank_array[i];
        name_array[counter] = name_array[i];
        rank_array[i] = tem_num;
        name_array[i] = tem_name;

    }
    for(let i = 0;i < 5;i = i + 1){
    console.log(name_array[i]);
    let item = document.getElementById(name_array[i]);
    console.log(item);
    let img = $(item).children(".foodimg").children("img").attr("src");
    console.log(img);
    let name = $(item).children(".foodtitle").children(".name").html();
    console.log(name);
    let fat = $(item).children(".foodtitle").children(".foodinfo").children().html();
    let spicy = $(item).children(".foodtitle").children(".foodinfo").children().siblings().html();
    let price = $(item).children(".foodprice").children().children().html();
    let id = $(item).attr("id");
    $(".foodpage .countrank ul").append("<li class='fl-item' id='"+ id +"'><div><h1 style='font-size:larger;color: #ffffff;'>热卖TOP"+ (i + 1) +"</h1\
    ></div><div class='foodimg'><img src='" + img +"' width = '220' height = '220'></div><div class='foodprice'><strong><i>"+ price +"</i></strong></div><div class='foodtitle'><p class='name'>"+ name +"\
    <div class='foodinfo'><p>"+ fat +"</p><p>"+ spicy +"</p><a class='order' href='javascript:;'><i></i>点餐</a></div></div></li>");
    }
})
//生成0~n的随机数
function get_random(n){
    return Math.floor(Math.random()*n + 1)
}
//本函数使用上面封装好的随机数生成器，生成本日推荐的三个菜品
$(".menunav .recommended").one("click", function(){
    let array = new Array([3]);
    array[0] = get_random(18);
    array[1] = get_random(18);
    array[2] = get_random(18);

    $(".foodpage .recommended").append("<div onselectstart='return false;'><h1 style='text-align:center;font-size: 50px;color:#ffffff'>当日推荐</h1></div>")
    for(let i = 0;i < 3;i = i + 1){
    let tem = "no" + array[i]
    console.log(tem);
    let item = document.getElementById(tem);
    console.log(item);
    let img = $(item).children(".foodimg").children("img").attr("src");
    console.log(img);
    let name = $(item).children(".foodtitle").children(".name").html();
    console.log(name);
    let fat = $(item).children(".foodtitle").children(".foodinfo").children().html();
    let spicy = $(item).children(".foodtitle").children(".foodinfo").children().siblings().html();
    let price = $(item).children(".foodprice").children().children().html();
    let id = $(item).attr("id");
    $(".foodpage .recommended ul").append("<li class='fl-item' id='"+ id +"'><div class='foodimg'><img src='" + img +"' width = '220' height = '220'></div><div class='foodprice'><strong><i>"+ price +"</i></strong></div><div class='foodtitle'><p class='name'>"+ name +"\
    <div class='foodinfo'><p>"+ fat +"</p><p>"+ spicy +"</p><a class='order' href='javascript:;'><i></i>点餐</a></div></div></li>");
    }
})
    var k = 0;
    $(".shopingCar .kuangk > a").click(function(){
        if(k==0){
            $(".shopingCar").animate({right:"0px"},500);
            k=1;
        }else if(k==1){
            $(".shopingCar").animate({right:"-310px"},500);
            k=0;
        }
    });

    $("a.order").click(function (e){
        e.preventDefault();

        var img = String($(this).parent().parent().siblings(".foodimg").children().attr("src"));
        console.log(img);
        var price = $(this).parent().parent().siblings("div.foodprice").children().children().html();
        console.log(price);
        var txt = $(this).parent().parent().children("p.name").html();
        var id = $(this).parent().parent().parent().attr("id");
        console.log(id);
        $(".lieb").append("<div class='shopcart-item' id='"+ id +"'><img style='float:left' src='"+img+"' width='50' height='50' /><p style='float:left;color: #FFFFFF'>"+txt+"</p><p style='float:left;margin-right:8rem;color: #FFFFFF'>"+price+"<a href='javascript:;' class='cancel' style='text-decoration: none;color: #FFFFFF;'>×</a></p><br/></div>")
        alert("点菜成功！");
    });

    $(".countrank").on("click",".order",function (e){
        e.preventDefault();

        var img = String($(this).parent().parent().siblings(".foodimg").children().attr("src"));
        console.log(img);
        var price = $(this).parent().parent().siblings("div.foodprice").children().children().html();
        console.log(price);
        var txt = $(this).parent().parent().children("p.name").html();
        var id = $(this).parent().parent().parent().attr("id");
        console.log(id);
        $(".lieb").append("<div class='shopcart-item' id='"+ id +"'><img style='float:left' src='"+img+"' width='50' height='50' /><p style='float:left;color: #FFFFFF'>"+txt+"</p><p style='float:left;margin-right:8rem;color: #FFFFFF'>"+price+"<a href='javascript:;' class='cancel' style='text-decoration: none;color: #FFFFFF;'>×</a></p><br/></div>")
        alert("点菜成功！");
    });

    $(".recommended").on("click",".order",function (e){
        e.preventDefault();

        var img = String($(this).parent().parent().siblings(".foodimg").children().attr("src"));
        console.log(img);
        var price = $(this).parent().parent().siblings("div.foodprice").children().children().html();
        console.log(price);
        var txt = $(this).parent().parent().children("p.name").html();
        var id = $(this).parent().parent().parent().attr("id");
        console.log(id);
        $(".lieb").append("<div class='shopcart-item' id='"+ id +"'><img style='float:left' src='"+img+"' width='50' height='50' /><p style='float:left;color: #FFFFFF'>"+txt+"</p><p style='float:left;margin-right:8rem;color: #FFFFFF'>"+price+"<a href='javascript:;' class='cancel' style='text-decoration: none;color: #FFFFFF;'>×</a></p><br/></div>")
        alert("点菜成功！");
    });
    $(".lieb").on("click",".cancel",function (e){
        e.preventDefault();
        $(this).parent().parent().remove();
        alert("删除菜品成功！");
    });

    var storage = window.localStorage;


    $(".submit").on("click",".submit1",function(e) {
        e.preventDefault();
        console.log("submit");
        $(".shopcart-item").each(function(){
            let id = $(this).attr("id");
            storage[id] = storage[id] + 1;
        })
        $(this).parent().siblings(".lieb").children().remove();
        alert("提交成功！");
    });


        //初始化数据库
    function initdb(){
    for(let i = 1;i <= 18;i = i + 1){
        let key = "no" + i;
        storage[key] = 0;
        }
    };

