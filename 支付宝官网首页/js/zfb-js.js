$(function () {
    // location.reload();
    // location.reload([bForceGet])
    //当页面加载完毕播放动画
    $(document).ready(function () {
        md.play();
    });
    //获取视频标签
    var md = document.getElementsByTagName("video")[0];
    //视频结束后执行显示播放视频按钮
    md.addEventListener('ended', function () {
        $('.play').css('display', 'block');
        this.src = "video/index.mp4";
    }, false);
    //点击播放按钮播放播放视频和隐藏按钮
    $('.play').click(function () {
        md.play()
        $(this).css('display', 'none')
    })


    //楼层特效
    //蓝色原点
    // $('.floor').each(function (i, ele) {
    // var index ;
    // $('.list ul li').mouseover(function () {
    //      index = $(this).index();
    //
    //     var top = $('.floor').eq(index).offset().top;
    //     $('html').animate({'scrollTop': top});
    // })
    //
    // $('.next').click(function () {
    //     console.log(index);
    //     var top = $('.floor').eq(index).offset().top;
    //     // var top = $('.floor').eq(haha + $('.floor').height).offset().top;
    //     $('html,body').animate({'scrollTop': top});
    // })
    // });
    // var flag = true;
    // $('.list ul li').click(function (e) {
    //     flag = false;
    //     var index = $(this).index();
    //     if (index >= 1) {
    //         $('.loin').css('display', 'block');
    //         // e.stopPropagation();
    //     } else {
    //         $('.loin').css('display', 'none');
    //     }
    //     if (index == 6) {
    //         $('.next').fadeOut(600)
    //     } else {
    //         $('.next').fadeIn(600)
    //     }
    //     $(this).addClass('current').siblings().removeClass('current');
    //     var top = $('.floor').eq(index).offset().top;
    //
    //     $('html,body').animate({'scrollTop': top}, function () {
    //          flag = true
    //     });
    // });
    //记录索引
    var currIndex = 0;
    // 获取每一个页面高度
    var img = document.querySelector('#five').offsetHeight;
    // 记录遍历
    var list = $('.list ul li');
    //防止事件多次触发
    var flag = false;
    //判断到哪一个高度要做什么事情
    function iif() {
        for (var i = 0; i < list.length; i++) {
            list[i].className = '';
            list[currIndex].className = 'current';
        }
        if (currIndex >= 1) {
            $('.loin').css('display', 'block');
            // e.stopPropagation();
        } else {
            $('.loin').css('display', 'none');
        }
        if (currIndex >= 6) {
            $('.next').fadeOut(400)
        } else {
            $('.next').fadeIn(400)
        }
        if (currIndex == 1) {
            $('.one-i').addClass('one-ani');
            $('#one-1 .bg1').addClass('text');
        }
        if (currIndex == 2) {
            $('#two .bg1').addClass('two-ani-shou')
            $('#two .bg2').addClass('two-ani-fu')
            $('#two .bg3').addClass('text')
        }
        if (currIndex == 3) {
            $('#three .big-i').addClass('three-girl')
            $('#three .bg1').addClass('text')
        }
        if (currIndex == 4) {
            $('#four .four-mask').addClass('f-mask')
            $('#four .bg1').addClass('text')
        }
        if (currIndex == 5) {
            $('#five .bg1').addClass('text')
            $('#five .five-bg').addClass('five-boy')
        }
    }
    //切换完页面之后执行动画
    function ani() {
        $('html,body').animate({'scrollTop': currIndex * img}, function () {
            flag = false;
        });
    }

    //向下切换页面
    $('.next').click(function () {
        if (flag) return;
        flag = true
        currIndex++;
        iif();
        ani();
    })
    //右侧小圆点切换页面
    $('.list ul li').click(function () {
        if (flag) return;
        flag = true
        currIndex = $(this).index();
        iif();
        ani();
    })
    //键盘按下事件
    $(document).keydown(function dd(event) {
        //下
        if (event.keyCode == 40) {
            if (flag) return;
            if (currIndex == 0 || currIndex == 6) {
                flag = false;
            } else {
                flag = true
            }
            if (currIndex < 6) {
                currIndex++;
                console.log(currIndex);
                iif()
                ani()
            }
        }
        //上
        if (event.keyCode == 38) {
            if (flag) return;
            if (currIndex == 0 || currIndex == 6) {
                flag = false;
            } else {
                flag = true
            }
            if (currIndex > 0) {
                currIndex--;
                iif()
                ani()
            }
        }

    });


    //顶部白色横条点击效果,里面用到冒泡机制
    $('.w-top #money>li').each(function () {
        $(this).click(function () {
            $(this).children($('.downList')).css('display', 'block')
            $(this).siblings().children($('.downList')).css('display', 'none')
        });
    });
    $('.off').click(function (e) {
        $(this).parent($('.downList')).css('display', 'none')
        e.stopPropagation();
    })
    // 按下F5回到顶部
    $(document).keydown(function (event) {
        if (event.keyCode == 116) {
            $('html,body').scrollTop(0);
        }
    });
    // location.reload(forceGet)
});

