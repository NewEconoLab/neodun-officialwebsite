var app = {
    bannerSwiper: null,
    productSwiper: null,
    faqSwiper: null,

    init: function ()
    {
        //首页Banner
        this.startBanner();
        //产品介绍
        this.startProduct();
        //FAQ
        this.startFAQ();
        //nav 点击
        this.onNavClick();
        //滚动事件
        this.onScrollEvent();
        //
        this.onScrollNav();
    },

    startBanner: function ()
    {
        this.bannerSwiper = new Swiper('#banner-swiper', {
            autoplay: {
                delay: 10000,
            },//可选选项，自动滑动
            loop: true,
            pagination: {
                el: '#banner-pagination',
                clickable: true,
            },
        })
    },
    startProduct: function ()
    {
        this.productSwiper = new Swiper('#product-swiper', {
            autoplay: {
                delay: 20000,//20秒切换一次
            },//可选选项，自动滑动
            loop: true,
            pagination: {
                el: '#product-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    },
    startFAQ: function ()
    {
        let self = this;
        this.faqSwiper = new Swiper('#faq-swiper', {
            // autoplay: true,//可选选项，自动滑动
            loop: true,
            pagination: {
                el: '#faq-pagination',
                clickable: true,
                renderBullet: function (index, className)
                {
                    //<li class="active">1-3</li>
                    return '<li class="' + className + '">' + self.renderNumber(index) + '</li>';
                    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },

        })
    },
    renderNumber: function (index)
    {
        switch (index)
        {
            case 0:
                return '1-3';
                break;
            case 1:
                return '4-6';
                break;
            case 2:
                return '7-9';
                break;
            case 3:
                return '10-11';
                break;
        }
    },
    onNavClick: function ()
    {
        $("#nav").on("click", "li", function ()
        {
            //获取元素id
            var elementId = $(this).data("boxid");
            //获取元素高度
            var elementTop = $('#' + elementId).offset().top - 50;

            //清楚所有的active
            $("#nav").find('li').removeClass('active');
            $(this).addClass('active');

            $('html,body').animate({ scrollTop: elementTop }, 500);
        })
    },
    onScrollEvent: function ()
    {
        var theHeight = $('#download').offset().top - document.documentElement.clientHeight + 300;
        $(document).on('scroll', function ()
        {
            if ($(document).scrollTop() >= theHeight)
            {
                $('#download').addClass('active');
            }
        })
    },
    onScrollNav: function ()
    {
        let bannerHeight = $('#banner-swiper').offset().top - document.documentElement.clientHeight + 300;
        let productHeight = $('#product-swiper').offset().top - document.documentElement.clientHeight + 300;
        let featureHeight = $('#feature').offset().top - document.documentElement.clientHeight + 300;
        let downloadHeight = $('#download').offset().top - document.documentElement.clientHeight + 300;
        let faqHeight = $('#faq').offset().top - document.documentElement.clientHeight + 300;
        $(document).on('scroll', function ()
        {
            if ($(document).scrollTop() >= faqHeight)
            {
                $("#nav").find('li').removeClass('active');
                $("ul li[data-boxid=faq]").addClass('active');
            }else if ($(document).scrollTop() >= downloadHeight)
            {
                $("#nav").find('li').removeClass('active');
                $("ul li[data-boxid=download]").addClass('active');
            }else if ($(document).scrollTop() >= featureHeight)
            {
                $("#nav").find('li').removeClass('active');
                $("ul li[data-boxid=feature]").addClass('active');
            }else if ($(document).scrollTop() >= productHeight)
            {
                $("#nav").find('li').removeClass('active');
                $("ul li[data-boxid=product-swiper]").addClass('active');
            }else if ($(document).scrollTop() >= bannerHeight)
            {
                $("#nav").find('li').removeClass('active');
                $("ul li[data-boxid=banner-swiper]").addClass('active');
            }

        })
    }
}


$(function ()
{
    app.init();
})