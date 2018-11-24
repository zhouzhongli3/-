$(function () {
    $('.spNavList li').hover(function () {
        $(this).addClass('active').siblings().not('.special').removeClass('active');
        if($(this).text().indexOf('解决方案')>-1){
            $('.header-menu').show()
        }
    },function () {
        $(this).removeClass('active')
    }).click(function () {
        $(this).addClass('special').siblings().removeClass('special')
    });

    $('.header-menu').hover(function () {
        $('.header-menu').show()
    },function () {
        $('.header-menu').hide()
    });

    $('.header-left li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        if($(this).text().indexOf('商业消费')>-1){
            $('.header-tal-ul').eq(0).show();
            $('.header-tal-ul').eq(1).hide();
            $('.header-tal-ul').eq(2).hide();
        }else if($(this).text().indexOf('政务民生')>-1){
            $('.header-tal-ul').eq(0).hide();
            $('.header-tal-ul').eq(1).show();
            $('.header-tal-ul').eq(2).hide();
        }else if($(this).text().indexOf('共享经济')>-1){
            $('.header-tal-ul').eq(0).hide();
            $('.header-tal-ul').eq(1).hide();
            $('.header-tal-ul').eq(2).show();
        }
    });

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
    banner();
    li_hover({_Dom:".more-product>a"})
});

function li_hover(op) {
    $(op._Dom).hover(function () {
        $(op._Dom).stop();
        $(this).find('.product-img').addClass('product-img-active').removeClass('product-img-leave-active');
        $(this).find('.produce-p').addClass('product-p-active').removeClass('product-p-leave-active');
        $(this).find('.link').addClass('product-p-active').removeClass('product-p-leave-active')
    },function(){
      $(this).find('.product-img').addClass('product-img-leave-active').removeClass('product-img-active');
      $(this).find('.produce-p').addClass('product-p-leave-active').removeClass('product-p-active');
      $(this).find('.link').addClass('product-p-leave-active').removeClass('product-p-active')
    });

    $('.cartoon').find('span').click(function () {
        $('.cartoon').css('display','none')
    })
}

function banner() {
    var banner = document.querySelector('.banner');
    var bannerW = banner.offsetWidth;
    var oul = banner.children[0];
    var ol = banner.children[1];
    var list = ol.children;
    var index = 0;

    function translateX(obj,x) {
        obj.style.transform = 'translateX('+ x +'px)';
        obj.style.webkitTransform = 'translateX('+ x +'px)';
    }
    function addTransition() {
        oul.style.transition = 'all 0.3s';
        oul.style.webkitTransition = 'all 0.3s';
    }
    function removeTransition() {
        oul.style.transition = 'none';
        oul.style.webkitTransition = 'none';
    }
    var timer = setInterval(autoPlay,3000);
    function autoPlay() {
        index++;
        addTransition();
        translateX(oul,-bannerW*index);

    }
    lst.transitionend(oul,function () {
        if (index >= 3){
            index = 0;
        }
        removeTransition();
        translateX(oul,-bannerW * index);
        for (var i = 0; i < list.length; i++) {
            list[i].className = '';
        }
        list[index].className = 'current';
        if(index == 3){
            list[0].className = 'current';
        }else{
            list[index].className = 'current';
        }
    });
}
