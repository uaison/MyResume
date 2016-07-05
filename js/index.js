$(function(){
    //点击隐藏浮动联系栏
    $("aside#contact .btn").on('click', function(e){
        e.stopPropagation();
        $('aside#contact').addClass('close');
    });
    //点击显示浮动联系栏
    $("aside#contact").on('click', function(){
        $(this).removeClass('close');
    });

    $("#pagination a").on('click', function(){
        $(this).addClass('on').siblings().removeClass('on');
    })
    $('#article').fullpage({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2'],
        'anchors': ['page1', 'page2', 'page3', 'page4', 'page5'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['首页', '关于我', '专业技能', '工作经历', '作品展示'],
        'afterRender': function(){
            $('.home .home_head').on('webkitAnimationEnd', function(){
                $('.home_info1').slideDown(700,function(){
                    $('.home_info_box').animate({width:'800px'}, function(){
                        $('.home_info2').slideDown(700,function(){
                            $(this).next().slideDown(700,function(){
                                $(this).next().slideDown(700,function(){
                                    $(this).next().slideDown(700, function(){
                                        $(this).next().slideDown(700);
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }
    });

})
