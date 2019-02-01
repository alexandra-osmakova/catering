var swiper = new Swiper('#main .swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next.main-next',
        prevEl: '.swiper-button-prev.main-prev',
    },
    loop: !0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: !1,
    },
});
var swiper = new Swiper('#about .swiper-container', {
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next.about-next',
        prevEl: '.swiper-button-prev.about-prev',
    },
    pagination: {
        el: '.swiper-pagination.about-pag',
        clickable: !0,
    },
    loop: !0,
    autoplay: {
        delay: 8000,
        disableOnInteraction: !1,
    },
});
var swiper = new Swiper('#gallery .swiper-container .swiper-banket', {
    slidesPerView: 1,
    navigation: {
        nextEl: '#banket-next',
        prevEl: '#banket-prev',
    },
    pagination: {
        el: '.swiper-pagination.gallery-pag.banket-pag',
        clickable: !0,
    },
});
var swiper = new Swiper('#gallery .swiper-container .swiper-gala', {
    slidesPerView: 1,
    navigation: {
        nextEl: '#gala-next',
        prevEl: '#gala-prev',
    },
    pagination: {
        el: '.swiper-pagination.gallery-pag.gala-pag',
        clickable: !0,
    },
});

var swiper = new Swiper('#gallery .swiper-container .fur_slider', {
    slidesPerView: 1,
    navigation: {
        nextEl: '#fur-next',
        prevEl: '#fur-prev',
    },
    pagination: {
        el: '.swiper-pagination.gallery-pag.furshet-pag',
        clickable: !0,
    },
});

var swiper = new Swiper('#gallery .swiper-container .bbq_slider', {
    slidesPerView: 1,
    navigation: {
        nextEl: '#bbq-next',
        prevEl: '#bbq-prev',
    },
    pagination: {
        el: '.swiper-pagination.gallery-pag.bbq-pag',
        clickable: !0,
    },
});

var swiper = new Swiper('#gallery .swiper-container .candy_slider', {
    slidesPerView: 1,
    navigation: {
        nextEl: '#candy-next',
        prevEl: '#candy-prev',
    },
    pagination: {
        el: '.swiper-pagination.gallery-pag.candy-pag',
        clickable: !0,
    },
});

var swiper = new Swiper('#gallery .swiper-container .fishki_slider', {
    slidesPerView: 1,
    navigation: {
        nextEl: '#fishki-next',
        prevEl: '#fishki-prev',
    },
    pagination: {
        el: '.swiper-pagination.gallery-pag.fish-pag',
        clickable: !0,
    },
});


/*var swiper = new Swiper('#gallery .swiper-container.swiper-furshet', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next.gallery-next.furshet-next',
        prevEl: '.swiper-button-prev.gallery-prev.furshet-prev',
    },
    pagination: {
        el: '.swiper-pagination.gallery-pag.furshet-pag',
        clickable: !0,
    },
});
var swiper = new Swiper('#gallery .swiper-container.swiper-bbq', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next.gallery-next.bbq-next',
        prevEl: '.swiper-button-prev.gallery-prev.bbq-prev',
    },
    pagination: {
        el: '.swiper-pagination.gallery-pag.bbq-pag',
        clickable: !0,
    },
});
var swiper = new Swiper('#gallery .swiper-container.swiper-candy', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next.gallery-next.candy-next',
        prevEl: '.swiper-button-prev.gallery-prev.candy-prev',
    },
    pagination: {
        el: '.swiper-pagination.gallery-pag.candy-pag',
        clickable: !0,
    },
});
var swiper = new Swiper('#gallery .swiper-container.swiper-fish', {
    slidesPerView: 1,
    navigation: {

        nextEl: '.swiper-button-next.gallery-next.fish-next',
        prevEl: '.swiper-button-prev.gallery-prev.fish-prev',
    },
    pagination: {
        el: '.swiper-pagination.gallery-pag.fish-pag',
        clickable: !0,
    },
}); */
var swiper = new Swiper('#own-gallery .swiper-container', {
    slidesPerView: 1,
    navigation: {
        nextEl: '#own-gallery .swiper-button-next.photo-modal-next',
        prevEl: '#own-gallery .swiper-button-prev.photo-modal-prev',
    },
});
var swiper = new Swiper('#photo-gallery .swiper-container', {
    slidesPerView: 1,
    navigation: {
        nextEl: '#photo-gallery .swiper-button-next.photo-modal-next',
        prevEl: '#photo-gallery .swiper-button-prev.photo-modal-prev',
    },
});
if (window.screen.width <= 1000) {
    $('#reason .reason-ico').addClass('leftimg');
    $('#services .service-1 .overlay').html($("#services .service-1 .right-block").html());
    $('#services .service-2 .overlay').html($("#services .service-2 .left-block").html());
    $('#services .service-3 .overlay').html($("#services .service-3 .right-block").html());
    $('#services .service-4 .overlay').html($("#services .service-4 .left-block").html());
    $('#services .service-5 .overlay').html($("#services .service-5 .right-block").html());
    $('#services .service-6 .overlay').html($("#services .service-6 .left-block").html());
    $('#contact .mobile-block').html($("#contact .hidden-xs").html());
    $('#reason .header h2').text('Почему мы?');
    $('#contact .form-block .offer-btn').attr("value", 'заказать')
    $('#services br').addClass('hidden-xs');
    var swiper = new Swiper('#also .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next.also-next',
            prevEl: '.swiper-button-prev.also-prev',
        },
        pagination: {
            el: '.swiper-pagination.also-pag',
            clickable: !0,
        },
    });
    var swiper = new Swiper('#own .swiper-container.lil-photo', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next.own-next',
            prevEl: '.swiper-button-prev.own-prev',
        },
        pagination: {
            el: '.swiper-pagination.own-pag',
            clickable: !0,
        },
    });
    var swiper = new Swiper('#trust .swiper-container', {
        slidesPerView: 3,
        loop: !0,
        autoplay: {
            delay: 1700,
            disableOnInteraction: !1,
        },
    })
} else {
    $('#also .container').removeClass('swiper-container');
    $('#also .row').removeClass('swiper-wrapper');
    $('#also .col-md-4').removeClass('swiper-slide');
    var swiper = new Swiper('#trust .swiper-container', {
        slidesPerView: 8,
        loop: !0,
        autoplay: {
            delay: 1700,
            disableOnInteraction: !1,
        },
    });
    var swiper = new Swiper('#own .swiper-container.lil-photo', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next.own-next',
            prevEl: '.swiper-button-prev.own-prev',
        },
        pagination: {
            el: '.swiper-pagination.own-pag',
            clickable: !0,
        },
        loop: 3,
        autoplay: {
            delay: 2500,
            disableOnInteraction: !1,
        },
    })
};
$('#gallery .filter-name').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.gallery-dropdown .filters').css("display", 'none');
        $('#gallery .filter-name span').css("transform", 'scale(1,1)')
    } else {
        $(this).addClass('active');
        $('.gallery-dropdown .filters').css("display", 'block');
        $('#gallery .filter-name span').css("transform", 'scale(1,-1)')
    }
});
$('#gallery .filters li').click(function () {
    $('#gallery .filter-name').removeClass('active');
    $('#gallery .filter-name p').text($(this).text());
    $('.gallery-dropdown .filters').css("display", 'none');
    $('#gallery .filter-name span').css("transform", 'scale(1,1)')
});
$('#own .overlay').click(function () {
    $('#own-gallery').addClass('active');
    $('body').css("overflow-y", 'hidden')
});
$('.photo-modal-cls').click(function () {
    $('#own-gallery').removeClass('active');
    $('#photo-gallery').removeClass('active');
    $('#banket_slider').removeClass('active');
    $('#banket_container').removeClass('active')
    $('#gala_slider').removeClass('active');
    $('#gala_container').removeClass('active');
    $('#fur_slider').removeClass('active');
    $('#fur_container').removeClass('active');
    $('#bbq_slider').removeClass('active');
    $('#bbq_container').removeClass('active');
    $('#candy_slider').removeClass('active');
    $('#candy_container').removeClass('active');
    $('#fishki_slider').removeClass('active');
    $('#fishki_container').removeClass('active');

    $('body').css("overflow-y", 'visible')
});
$('#gallery .banket_open').click(function () {
    $('#photo-gallery').addClass('active');
    $('#banket_slider').addClass('active');
    $('#banket_container').addClass('active')
    $('body').css("overflow-y", 'hidden');
    var slideWidth = $('#banket_slider').width();
    var photoNumber = $(this).attr('data-number');
    var result = (slideWidth * photoNumber) * (-1);
    $('#photo-gallery .swiper-wrapper').css("transform", "translate3d(" + result + "px, 0px, 0px)")
});
$('#gallery .gala_open').click(function () {
    $('#photo-gallery').addClass('active');
    $('#gala_slider').addClass('active');
    $('#gala_container').addClass('active')
    $('body').css("overflow-y", 'hidden');
    var slideWidth = $('gala_slider').width();
    var photoNumber = $(this).attr('data-number');
    var result = (slideWidth * photoNumber) * (-1);
    $('#photo-gallery .swiper-wrapper').css("transform", "translate3d(" + result + "px, 0px, 0px)")
});
$('#gallery .furshet_open').click(function () {
    $('#photo-gallery').addClass('active');
    $('#fur_slider').addClass('active');
    $('#fur_container').addClass('active')
    $('body').css("overflow-y", 'hidden');
    var slideWidth = $('fur_slider').width();
    var photoNumber = $(this).attr('data-number');
    var result = (slideWidth * photoNumber) * (-1);
    $('#photo-gallery .swiper-wrapper').css("transform", "translate3d(" + result + "px, 0px, 0px)")
});

$('#gallery .bbq_open').click(function () {
    $('#photo-gallery').addClass('active');
    $('#bbq_slider').addClass('active');
    $('#bbq_container').addClass('active')
    $('body').css("overflow-y", 'hidden');
    var slideWidth = $('bbq_slider').width();
    var photoNumber = $(this).attr('data-number');
    var result = (slideWidth * photoNumber) * (-1);
    $('#photo-gallery .swiper-wrapper').css("transform", "translate3d(" + result + "px, 0px, 0px)")
});

$('#gallery .candy_open').click(function () {
    $('#photo-gallery').addClass('active');
    $('#candy_slider').addClass('active');
    $('#candy_container').addClass('active')
    $('body').css("overflow-y", 'hidden');
    var slideWidth = $('candy_slider').width();
    var photoNumber = $(this).attr('data-number');
    var result = (slideWidth * photoNumber) * (-1);
    $('#photo-gallery .swiper-wrapper').css("transform", "translate3d(" + result + "px, 0px, 0px)")
});

$('#gallery .fishki_open').click(function () {
    $('#photo-gallery').addClass('active');
    $('#fishki_slider').addClass('active');
    $('#fishki_container').addClass('active')
    $('body').css("overflow-y", 'hidden');
    var slideWidth = $('fishki_slider').width();
    var photoNumber = $(this).attr('data-number');
    var result = (slideWidth * photoNumber) * (-1);
    $('#photo-gallery .swiper-wrapper').css("transform", "translate3d(" + result + "px, 0px, 0px)")
});

$('#own .overlay').click(function () {
    $('#own-gallery').addClass('active');
    $('body').css("overflow-y", 'hidden');
    var slideWidth = $('#own-gallery .swiper-slide').width();
    var photoNumber = $(this).attr('data-number');
    var result = (slideWidth * photoNumber) * (-1);
    $('#own-gallery .swiper-wrapper').css("transform", "translate3d(" + result + "px, 0px, 0px)")
});
$('.dropdown-services.main').click(function () {
    if ($('.dropdown-services.main .dropdown-services-menu').hasClass('active')) {
        $('.dropdown-services.main .dropdown-services-menu').removeClass('active')
    } else {
        $('.dropdown-services.main .dropdown-services-menu').addClass('active');
        $('.dropdown-services.second .dropdown-services-menu').removeClass('active')
    }
});
$('.dropdown-services.second').click(function () {
    if ($('.dropdown-services.second .dropdown-services-menu').hasClass('active')) {
        $('.dropdown-services.second .dropdown-services-menu').removeClass('active')
    } else {
        $('.dropdown-services.second .dropdown-services-menu').addClass('active');
        $('.dropdown-services.main .dropdown-services-menu').removeClass('active')
    }
});
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('.dropdown-services-menu').removeClass('active')
    }
});

function case1() {
    $('.case-name h2').text($('.link-1 p').text());
    $('.link-1').addClass('active');
    $('.link-2, .link-3, .link-4').removeClass('active');
    $('.next-case').attr("onclick", 'case2()');
    $('#case .case').css("background-image", 'url(img/case-1.jpg)');
    $('#case .play-box').attr("onclick", 'caseVid1()')
};

function case2() {
    $('.case-name h2').text($('.link-2 p').text());
    $('.link-2').addClass('active');
    $('.link-3, .link-4, .link-1').removeClass('active');
    $('.next-case').attr("onclick", 'case3()');
    $('#case .case').css("background-image", 'url(img/case-2.jpg)');
    $('#case .play-box').attr("onclick", 'caseVid2()')
};

function case3() {
    $('.case-name h2').text($('.link-3 p').text());
    $('.link-3').addClass('active');
    $('.link-4, .link-1, .link-2').removeClass('active');
    $('.next-case').attr("onclick", 'case4()');
    $('#case .case').css("background-image", 'url(img/case-3.jpg)');
    $('#case .play-box').attr("onclick", 'caseVid3()')
};

function case4() {
    $('.case-name h2').text($('.link-4 p').text());
    $('.link-4').addClass('active');
    $('.link-1, .link-2, .link-3').removeClass('active');
    $('.next-case').attr("onclick", 'case1()');
    $('#case .case').css("background-image", 'url(img/case-4.jpg)');
    $('#case .play-box').attr("onclick", 'caseVid4()')
};

function caseVid1() {
    $('.case-modal-overlay').css("z-index", '10000').css("opacity", '1').css("display", "flex");
    $('.case-modal-overlay .video-1').css("display", 'block');
    $('.case-modal-overlay .video-2, .case-modal-overlay .video-3, .case-modal-overlay .video-4').css("display", 'none');
    $('.case-modal-overlay .video-1').trigger('play')
};

function caseVid2() {
    $('.case-modal-overlay').css("z-index", '10000').css("opacity", '1').css("display", "flex");
    $('.case-modal-overlay .video-2').css("display", 'block');
    $('.case-modal-overlay .video-1, .case-modal-overlay .video-3, .case-modal-overlay .video-4').css("display", 'none');
    $('.case-modal-overlay .video-2').trigger('play')
};

function caseVid3() {
    $('.case-modal-overlay').css("z-index", '10000').css("opacity", '1').css("display", "flex");
    $('.case-modal-overlay .video-3').css("display", 'block');
    $('.case-modal-overlay .video-1, .case-modal-overlay .video-2, .case-modal-overlay .video-4').css("display", 'none');
    $('.case-modal-overlay .video-3').trigger('play')
};

function caseVid4() {
    $('.case-modal-overlay').css("z-index", '10000').css("opacity", '1').css("display", "flex");
    $('.case-modal-overlay .video-4').css("display", 'block');
    $('.case-modal-overlay .video-1, .case-modal-overlay .video-2, .case-modal-overlay .video-3').css("display", 'none');
    $('.case-modal-overlay .video-4').trigger('play')
};
$(document).ready(function () {
    $(document).on("click", ".onpage-link", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top - 90
        }, 1200)
        if ($(window).width() < 500) {
            $('.nav').css("right", '-100%').removeClass('active');

        }
        $('.bars').css("opacity", '1');
        $('.close-btn').css("opacity", '0').css("transform", 'rotate(0)');
        $('body').css("overflow-y", 'visible')
    })
});
$('.zay-modal-cls').click(function () {
    $('#zay-modal-overlay').css("opacity", '0').css("z-index", '-1');
    $('.mobile-main-info').removeClass('invisible_item');
    $('.bars-btn').removeClass('invisible_item');
    $('body').css("position", 'unset');
});
$('.menu-cls').click(function () {
    $('#zay-menu-overlay').css("opacity", '0').css("z-index", '-1');
    $('#zay-menu-overlay h3').text("Скачать первичное меню");
    $('#zay-menu-overlay h4').text("Введите контактные данные");
    $('#zay-menu-overlay .offer-btn').attr("value", 'Скачать')
});



// $('#offer .offer-btn').click(function () {
//     $('#zay-modal-overlay h3').text("Скачать презентацию");
//     $('#zay-modal-overlay h4').text("Введите контактные данные");
//     $('#zay-modal-overlay .offer-btn').attr("value", 'Скачать')
// })
$(".bars-btn").click(function () {
    if ($(".nav").hasClass('active')) {
        $('.nav').css("right", '-100%').removeClass('active');
        $('.bars').css("opacity", '1');
        $('.mobile-main-info').css("opacity", "1");
        $('.close-btn').css("opacity", '0').css("transform", 'rotate(0)');
        $('body').css("overflow-y", 'visible')
    } else {
        $('.nav').css("right", '0').addClass('active');
        $('.bars').css("opacity", '0');
        $('.close-btn').css("opacity", '1').css("transform", 'rotate(180deg)');
        $('.mobile-main-info').css("opacity", "0")
        $('body').css("overflow-y", 'hidden')
    }
})

var menu_block = document.getElementsByClassName('menu_block')[0];
var main_pics_item_page = document.getElementsByClassName('main_pics_item__img_cont');
var main_pics_slid_trigger = document.getElementsByClassName('main_pics_item')[0];
var slider_conatiner = document.getElementById('slider_conatiner');
var slider_wrap = document.getElementById('slider_wrap');


var banket_pics = ['../img/banket/banket-1.jpg', '../img/banket/banket-2.jpg', '../img/banket/banket-3.jpg', '../img/banket/banket-4.jpg',
    '../img/banket/banket-5.jpg', '../img/banket/banket-7.jpg', '../img/banket/banket-8.jpg', '../img/banket/banket-6.jpg'
]

var gala_pics = ['../img/gala/gala-1.jpg', '../img/gala/gala-2.jpg', '../img/gala/gala-3.jpg'];

var furshet_pics = ['../img/fur/fur-1.jpg', '../img/fur/fur-2.jpg', '../img/fur/fur-3.jpg', '../img/fur/fur-4.jpg',
    '../img/fur/fur-5.jpg', '../img/fur/fur-6.jpg', '../img/fur/fur-7.jpg', '../img/fur/fur-8.jpg'
]

var bbq_pics = ['../img/bbq/bbq-1.jpg', '../img/bbq/bbq-2.jpg', '../img/bbq/bbq-3.jpg', '../img/bbq/bbq-4.jpg',
    '../img/bbq/bbq-5.jpg', '../img/bbq/bbq-7.jpg', '../img/bbq/bbq-8.jpg', '../img/bbq/bbq-6.jpg'
];

var candy_pics = ['../img/candy/candy-1.jpg', '../img/candy/candy-2.jpg', '../img/candy/candy-3.jpg'];

var fishki_pics = ['../img/FP/fp-1.jpg', '../img/FP/fp-2.jpg', '../img/FP/fp-3.jpg', '../img/FP/fp-4.jpg',
    '../img/FP/fp-5.jpg', '../img/FP/fp-6.jpg', '../img/FP/fp-7.jpg', '../img/FP/fp-8.jpg'
]

function addAnimation() {
    var item_children = main_pics_item_page[1].children;
    for (var i = 0; i < item_children.length; i++) {
        item_children[i].classList.add('galery_img_transform')
    }
}

menu_block.addEventListener('click', function (event) {
    var target = event.target;
    var big_gallery_menu = document.getElementsByClassName('big_gallery_menu');
    if (target.classList.contains('gallery_menu')) {
        switch (target.id) {
            case 'menu_banket':
                for (var j = 0; j < big_gallery_menu.length; j++) {
                    big_gallery_menu[j].classList.remove('active')
                }
                target.classList.add('active');

                for (var i = 0; i < main_pics_item_page.length; i++) {
                    main_pics_item_page[i].classList.add('invisible_item')
                }
                main_pics_item_page[0].classList.remove('invisible_item');
                var item_children = main_pics_item_page[0].children;
                for (var i = 0; i < item_children.length; i++) {
                    item_children[i].classList.add('galery_img_transform')
                }
                break;
            case 'menu_gala':
                for (var j = 0; j < big_gallery_menu.length; j++) {
                    big_gallery_menu[j].classList.remove('active')
                }
                target.classList.add('active');
                for (var i = 0; i < main_pics_item_page.length; i++) {
                    main_pics_item_page[i].classList.add('invisible_item')
                }
                main_pics_item_page[1].classList.remove('invisible_item');
                setTimeout(addAnimation(), 1000)

                break;
            case 'menu_furshet':
                for (var j = 0; j < big_gallery_menu.length; j++) {
                    big_gallery_menu[j].classList.remove('active')
                }
                target.classList.add('active');
                for (var i = 0; i < main_pics_item_page.length; i++) {
                    main_pics_item_page[i].classList.add('invisible_item')
                }
                main_pics_item_page[2].classList.remove('invisible_item');
                var item_children = main_pics_item_page[2].children;
                for (var i = 0; i < item_children.length; i++) {
                    item_children[i].classList.add('galery_img_transform')
                }
                break;
            case 'menu_bbq':
                for (var j = 0; j < big_gallery_menu.length; j++) {
                    big_gallery_menu[j].classList.remove('active')
                }
                target.classList.add('active');
                for (var i = 0; i < main_pics_item_page.length; i++) {
                    main_pics_item_page[i].classList.add('invisible_item')
                }
                main_pics_item_page[3].classList.remove('invisible_item');
                var item_children = main_pics_item_page[3].children;
                for (var i = 0; i < item_children.length; i++) {
                    item_children[i].classList.add('galery_img_transform')
                }
                break;
            case 'menu_coctail':
                for (var j = 0; j < big_gallery_menu.length; j++) {
                    big_gallery_menu[j].classList.remove('active')
                }
                target.classList.add('active');
                for (var i = 0; i < main_pics_item_page.length; i++) {
                    main_pics_item_page[i].classList.add('invisible_item')
                }
                main_pics_item_page[4].classList.remove('invisible_item');
                var item_children = main_pics_item_page[4].children;
                for (var i = 0; i < item_children.length; i++) {
                    item_children[i].classList.add('galery_img_transform')
                }
                break;
            case 'menu_candy':
                for (var j = 0; j < big_gallery_menu.length; j++) {
                    big_gallery_menu[j].classList.remove('active')
                }
                target.classList.add('active');
                for (var i = 0; i < main_pics_item_page.length; i++) {
                    main_pics_item_page[i].classList.add('invisible_item')
                }
                main_pics_item_page[5].classList.remove('invisible_item');
                var item_children = main_pics_item_page[5].children;
                for (var i = 0; i < item_children.length; i++) {
                    item_children[i].classList.add('galery_img_transform')
                }
                break;
            case 'menu_fishki':
                for (var j = 0; j < big_gallery_menu.length; j++) {
                    big_gallery_menu[j].classList.remove('active')
                }
                target.classList.add('active');
                for (var i = 0; i < main_pics_item_page.length; i++) {
                    main_pics_item_page[i].classList.add('invisible_item')
                }
                main_pics_item_page[6].classList.remove('invisible_item');
                var item_children = main_pics_item_page[6].children;
                for (var i = 0; i < item_children.length; i++) {
                    item_children[i].classList.add('galery_img_transform')
                }
                break;
            default:
        }
    }
})

var slider_start_index;
var modal_slide;
var activ_pic_arr;

main_pics_slid_trigger.addEventListener('click', function (event) {
    var target = event.target;
    if (target.classList.contains('main_pics_item__image_wrap')) {
        slider_conatiner.classList.remove('invisible_item');
        slider_conatiner.classList.add('galery_img_transform')
        document.getElementsByClassName('slider_overlay')[0].classList.remove('invisible_item');
        document.body.classList.toggle('no_scroll');
        if (target.classList.contains('banket_slider_trigger')) {
            activ_pic_arr = banket_pics;
            slider_start_index = Number(target.dataset.number)
            modal_slide = document.createElement('img');
            modal_slide.src = banket_pics[slider_start_index];
            slider_wrap.appendChild(modal_slide);
        } else if (target.classList.contains('gala_slider_trigger')) {
            activ_pic_arr = gala_pics;
            slider_start_index = Number(target.dataset.number)
            modal_slide = document.createElement('img');
            modal_slide.src = gala_pics[slider_start_index];
            slider_wrap.appendChild(modal_slide);
        } else if (target.classList.contains('furshet_slider_trigger')) {
            activ_pic_arr = furshet_pics;
            slider_start_index = Number(target.dataset.number)
            modal_slide = document.createElement('img');
            modal_slide.src = furshet_pics[slider_start_index];
            slider_wrap.appendChild(modal_slide);
        } else if (target.classList.contains('bbq_slider_trigger')) {
            activ_pic_arr = bbq_pics;
            slider_start_index = Number(target.dataset.number)
            modal_slide = document.createElement('img');
            modal_slide.src = bbq_pics[slider_start_index];
            slider_wrap.appendChild(modal_slide);
        } else if (target.classList.contains('candy_slider_trigger')) {
            activ_pic_arr = candy_pics;
            slider_start_index = Number(target.dataset.number)
            modal_slide = document.createElement('img');
            modal_slide.src = candy_pics[slider_start_index];
            slider_wrap.appendChild(modal_slide);
        } else if (target.classList.contains('fishki_slider_trigger')) {
            activ_pic_arr = fishki_pics;
            slider_start_index = Number(target.dataset.number)
            modal_slide = document.createElement('img');
            modal_slide.src = fishki_pics[slider_start_index];
            slider_wrap.appendChild(modal_slide);
        }
    }
})

document.getElementById('close_gallery_slider').addEventListener('click', function () {
    slider_conatiner.classList.add('invisible_item');
    document.getElementsByClassName('slider_overlay')[0].classList.add('invisible_item');
    slider_wrap.removeChild(modal_slide);
    document.body.classList.toggle('no_scroll')
})

document.getElementById('slider_btn_prev').addEventListener('click', function () {
    if (slider_start_index > 0 && slider_start_index <= activ_pic_arr.length) {
        modal_slide.classList.add('slider_move')
        slider_start_index--
        modal_slide.src = activ_pic_arr[slider_start_index];
        slideChange()
    } else if (slider_start_index == 0) {
        modal_slide.classList.add('slider_move')
        slider_start_index = activ_pic_arr.length - 1;
        modal_slide.src = activ_pic_arr[slider_start_index];
        slideChange()
    }
})

document.getElementById('slider_btn_next').addEventListener('click', function () {
    slider_start_index++
    if (slider_start_index < activ_pic_arr.length) {
        modal_slide.classList.add('slider_move')
        modal_slide.src = activ_pic_arr[slider_start_index];
        slideChange()
    } else if (slider_start_index == activ_pic_arr.length) {
        modal_slide.classList.add('slider_move')
        slider_start_index = 0;
        modal_slide.src = activ_pic_arr[slider_start_index];
        slideChange()
    }
})


function slideChange() {
    var x = 0;
    var timerId = setInterval(function () {
        modal_slide.classList.remove('slider_move')
        x++
    }, 500)

    setTimeout(function () {
        clearInterval(timerId);
    }, 550)
}

var slider_conatiner_small = document.getElementById('slider_conatiner_small');
var slider_nav = document.getElementById('slider_nav');
var slider_pagination = document.getElementsByClassName('slider_pagination')[0];

window.onload = function () {
    if (document.documentElement.clientWidth < 600) {
        activ_pic_arr = banket_pics;
        craetePagination()
        modal_slide = document.createElement('img');
        modal_slide.src = banket_pics[slider_start_index];
        slider_conatiner_small.insertBefore(modal_slide, slider_nav);
    }

}

function craetePagination() {
    for (var i = 0; i < activ_pic_arr.length; i++) {
        slider_pagination_el = document.createElement('div');
        slider_pagination.appendChild(slider_pagination_el);
        slider_pagination_el.classList.add('pagination_bullet');
    }

    slider_pagination.children[0].classList.add('activ_bullet')
    slider_start_index = 0;
}

var slider_btn_next_small = document.getElementById('slider_btn_next_small');
var slider_btn_prev_small = document.getElementById('slider_btn_prev_small');

slider_btn_next_small.addEventListener('click', function () {
    slider_start_index++
    if (slider_start_index < activ_pic_arr.length) {
        modal_slide.classList.add('slider_move')
        modal_slide.src = activ_pic_arr[slider_start_index];
        for (var i = 0; i < slider_pagination.children.length; i++) {
            slider_pagination.children[i].classList.remove('activ_bullet');
        }
        slider_pagination.children[slider_start_index].classList.add('activ_bullet');
        slideChange()
    } else if (slider_start_index == activ_pic_arr.length) {
        modal_slide.classList.add('slider_move')
        slider_start_index = 0;
        modal_slide.src = activ_pic_arr[slider_start_index];
        for (var i = 0; i < slider_pagination.children.length; i++) {
            slider_pagination.children[i].classList.remove('activ_bullet');
        }
        slider_pagination.children[slider_start_index].classList.add('activ_bullet');
        slideChange()
    }
})

slider_btn_prev_small.addEventListener('click', function () {
    if (slider_start_index > 0 && slider_start_index <= activ_pic_arr.length) {
        modal_slide.classList.add('slider_move')
        slider_start_index--
        modal_slide.src = activ_pic_arr[slider_start_index];
        for (var i = 0; i < slider_pagination.children.length; i++) {
            slider_pagination.children[i].classList.remove('activ_bullet');
        }
        slider_pagination.children[slider_start_index].classList.add('activ_bullet');
        slideChange()
    } else if (slider_start_index == 0) {
        modal_slide.classList.add('slider_move')
        slider_start_index = activ_pic_arr.length - 1;
        modal_slide.src = activ_pic_arr[slider_start_index];
        for (var i = 0; i < slider_pagination.children.length; i++) {
            slider_pagination.children[i].classList.remove('activ_bullet');
        }
        slider_pagination.children[slider_start_index].classList.add('activ_bullet');
        slideChange()
    }
})

var gallery_dropdown = document.getElementsByClassName('gallery-dropdown')[0];

gallery_dropdown.addEventListener('click', function (event) {
    var target = event.target;
    if (target.classList.contains('gallery_menu')) {
        switch (target.id) {
            case 'menu_banket_small':
                activ_pic_arr = banket_pics;
                modal_slide.src = activ_pic_arr[slider_start_index];
                slider_pagination.innerHTML = '';
                craetePagination();
                break;
            case 'menu_gala_small':
                activ_pic_arr = gala_pics;
                modal_slide.src = activ_pic_arr[slider_start_index];
                slider_pagination.innerHTML = '';
                craetePagination();
                break;
            case 'menu_furshet_small':
                activ_pic_arr = furshet_pics;
                modal_slide.src = activ_pic_arr[slider_start_index];
                slider_pagination.innerHTML = '';
                craetePagination()
                break;
            case 'menu_bbq_small':
                activ_pic_arr = bbq_pics;
                modal_slide.src = activ_pic_arr[slider_start_index];
                slider_pagination.innerHTML = '';
                craetePagination();
                break;
            case 'menu_banket_small':
                activ_pic_arr = banket_pics;
                modal_slide.src = activ_pic_arr[slider_start_index];
                slider_pagination.innerHTML = '';
                craetePagination();
                break;
            case 'menu_banket_small':
                activ_pic_arr = banket_pics;
                modal_slide.src = activ_pic_arr[slider_start_index];
                slider_pagination.innerHTML = '';
                craetePagination();
                break;
            case 'menu_cocktail_small':
                activ_pic_arr = [];
                modal_slide.src = activ_pic_arr[slider_start_index];
                slider_pagination.innerHTML = '';
                craetePagination();
                break;
            case 'menu_candy_small':
                activ_pic_arr = candy_pics;
                modal_slide.src = activ_pic_arr[slider_start_index];
                slider_pagination.innerHTML = '';
                craetePagination();
                break;
            case 'menu_fishki_small':
                activ_pic_arr = fishki_pics;
                modal_slide.src = activ_pic_arr[slider_start_index];
                slider_pagination.innerHTML = '';
                craetePagination()
                break;
        }
    }
})

var open_modal = document.getElementById('services');

open_modal.addEventListener('click', function (event) {
    var target = event.target;
    if (target.classList.contains('open_modal')) {
        var modal_window = document.getElementById('zay-menu-overlay');
        modal_window.style.opacity = "1";
        modal_window.style.position = "fixed";
        modal_window.style.zIndex = "2000002";
        document.getElementsByClassName('bars-btn')[0].classList.add('invisible_item');
        document.getElementsByClassName('mobile-main-info')[0].classList.add('invisible_item')
    }
})

document.body.addEventListener('click', function (event) {
    var target = event.target;
    if (target.classList.contains('modal-opn-order')) {
        var modal_window = document.getElementsByClassName('modal_order')[0];
        modal_window.style.opacity = "1";
        modal_window.style.position = "fixed";
        modal_window.style.zIndex = "2000002";
        document.getElementsByClassName('bars-btn')[0].classList.add('invisible_item');
        document.getElementsByClassName('mobile-main-info')[0].classList.add('invisible_item')
    }
})

$("span.download-btn.open_modal").on("click", function (e) {
    $("input#location").val(e.currentTarget.id);
});


var masked_name_first = document.getElementById('nameForm');
masked_name_first.addEventListener('input', function () {

    var reg = /[^А-Яа-яЁё]/;
    if (masked_name_first.value.search(reg) != -1) {
        masked_name_first.value = masked_name_first.value.replace(reg, '');
    }

})

var masked_name_second = document.getElementById('nameForm2');
masked_name_second.addEventListener('input', function () {
    var reg = /[^А-Яа-яЁё]/;
    if (masked_name_second.value.search(reg) != -1) {
        masked_name_second.value = masked_name_second.value.replace(reg, '');
    }
})

var masked_name_third = document.getElementById('contact_name');
masked_name_third.addEventListener('input', function () {
    var reg = /[^А-Яа-яЁё]/;
    if (masked_name_third.value.search(reg) != -1) {
        masked_name_third.value = masked_name_third.value.replace(reg, '');
    }
})

var masked_phone_first = document.getElementById('numberPhone');
masked_phone_first.addEventListener('input', function () {
    var reg = /[^0-9]/;
    if (masked_phone_first.value.search(reg) != -1) {
        masked_phone_first.value = masked_phone_first.value.replace(reg, '');
    }
})

var masked_phone_second = document.getElementById('numberPhone2');
masked_phone_second.addEventListener('input', function () {
    var reg = /[^0-9]/;
    if (masked_phone_second.value.search(reg) != -1) {
        masked_phone_second.value = masked_phone_second.value.replace(reg, '');
    }
})

var masked_phone_third = document.getElementById('numberPhone1');
masked_phone_third.addEventListener('input', function () {
    var reg = /[^0-9]/;
    if (masked_phone_third.value.search(reg) != -1) {
        masked_phone_third.value = masked_phone_third.value.replace(reg, '');
    }
})



