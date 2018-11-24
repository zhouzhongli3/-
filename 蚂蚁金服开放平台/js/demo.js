/**
 * Created by Administrator on 2018/10/26.
 */






$(function () {
    var circleList=$('.circle li');
    var bgList = $('.bg li');
    var bg_timer;
    // //点击圆点切换图片
    //     circleList.click(function () {
    //         // if(xd){
    //         //     return
    //         // }xd = true;
    //         bgIndex = $(this).index();
    //     $(this).addClass("cir_current").siblings().removeClass("cir_current");
    //
    //     bgList.eq(bgIndex).fadeTo(1500,1).siblings().stop().fadeTo(1500,0);
    //         console.log(bgIndex,'123');
    //         bgIndex = zIndex;
    //
    //     });
    //
    // // 轮播
    //     bg_timer=setInterval(autoplay,1000);
    //     function autoplay() {
    //         if(zIndex>3) zIndex=-1;
    //         zIndex++;
    //         bgList.eq(zIndex).fadeTo(1500,1).siblings().fadeTo(1500,0);
    //         circleList.eq(zIndex).addClass("cir_current").siblings().removeClass("cir_current");
    //         console.log(zIndex,'12345')
    //     }
    // //鼠标移入清除轮播
    // //    $('.bg').hover(function () {
    // //         clearInterval(bg_timer);
    // //     }, function () {
    // //         autoplay();
    // //     });
    // console.log(circleList);
    // circleList.hover(function () {
    //         clearInterval(bg_timer);
    //     console.log(1);
    // }, function () {
    //         autoplay();
    //     console.log(2);
    // });
    var index = 0
    var timer = null;

    //轮播图
    function set() {
        // 设置定时器
        timer = setInterval(function () {
            if (index > 3) {
                index = -1
            }
            // 索引值
            index++;

            fn(index)
        },3000)
    }
    set()

    // 点击圆点切换图片
    $('.circle li').click(function (index_yd) {
        // 索引值
        index_yd = $(this).index();

        // 更新索引
        index = index_yd;
        // 调用函数
        fn(index_yd)


    })

    // 封装函数
    function fn(index) {
        // 切换图片 (设置了透明度)
        $('.bg').children('li').eq(index).addClass('bg_current').animate({
            opacity: 1
        }, 500).siblings().removeClass('bg_current').animate({
            opacity: 0.35
        }, 500)
        // 切换圆点
        $('.circle li').eq(index).addClass('cir_current').siblings().removeClass('cir_current')
    }

    // 移入ul事件
    $('.bg').hover(function () {
        //    清除定时器
        clearInterval(timer)
    }, function () {
        // 打开定时器
        set()
    })

    // 移入小圆点事件
    $('.circle li').hover(function () {
        // 清除定时器
        clearInterval(timer)
    }, function () {
        // 打开定时器
        set()
    })

    //点击放大镜后出现输入框
    $(function () {
        $('.mir').click(function (event) {
            //取消事件冒泡
            event.stopPropagation();
            //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。
            $('.nav-search-input input').css("display","block");
            $('.list-input').css("display","none");
            return false;
        });
        //点击空白处隐藏弹出层
        $(document).click(function(event){
            var _con = $('.nav-search-input input');  // 设置目标区域
            if(!_con.is(event.target) && _con.has(event.target).length === 0){
                $('.nav-search-input input').css("display","none");
                $('.list-input').css("display","block");
            }
        });
    })



    // 快速开发鼠标移入事件
    $('.jc-move').each(function (ele) {
        $('.jc-model li').eq(ele).hover(function () {
            $('.jc-move').eq(ele).stop().animate({top:"-140px"})
        },function(){
            $('.jc-move').eq(ele).stop().animate({top:"0"})
        })
    })

    //开放能力鼠标移入事件
    $('.chooseus-item-hover').each(function (ele) {
        $('.chooseus-li').eq(ele).hover(function () {
            $('.chooseus-item-hover').eq(ele).stop().css("display","block").animate({left:"0"})
            $('.chooseus-concent').eq(ele).stop().css("display","none")
        },function () {
            $('.chooseus-item-hover').eq(ele).stop().css("display","none").animate({left:"-310px"})
            $('.chooseus-concent').eq(ele).stop().css("display","block")
        })
    });

//    右下角小动物鼠标点击事件
    $('.animal span').click(function () {
        $('.animal span').parent().css("display","none")
    });
    //----使用帮助鼠标移入动作------
    $('#use-qrcode-footer-help').hover(function () {
        $('#use-for-help').css("display","inline-block").siblings().css("display","none")
    },function () {
        $('#use-for-help').css("display","none").siblings().css("display","inline-block")
    })


    //------扫描二维码点击切换-------
    // background-position: -201px -199px;     二维码位置
//    background-position: -260px -260px;      小电脑位置

    $('.checked').click(function () {
        if ($('.checked').css("background-position") === "-201px -199px") {
            $('.checked').css("background-position", "-260px -260px")
            $('#login-search').css("display", "none")
            $('#login-sign-in').css("display", "block")
        } else {
            $('.checked').css("background-position", "-201px -199px")
            $('#login-sign-in').css("display", "none")
            $('#login-search').css("display", "block")
        }
    })

});
