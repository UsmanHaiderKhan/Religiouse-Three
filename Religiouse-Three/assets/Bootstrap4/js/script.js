//console.log("usman");
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
/*================== Read More Text ==================*/

$(function () {
    var showChar = 120;
    var moretext = "Continue Reading &nbsp;";
    var lesstext = "Stop Reading  &nbsp;";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents"><span>' + hide_content + '</span>' +
                '<a href="" class="morelinksss read-text" style="display:block; margin-top:30px">' + moretext + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelinksss").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
$(function () {
    var showChar = 578;
    var moretext = "Know More &nbsp;";
    var lesstext = "Know Less &nbsp;";
    $('.comments-spaces').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents"><span>' + hide_content + '</span>' +
                '<div class="btn-wrapper mt-90">' +
                '<a href="" class="morelinks btn btn-known" style="display:block;">' + moretext + '</a>'
                + '</span>' + '</div>';
            $(this).html(html);
        }
    });

    $(".morelinks").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

/*===================== Smooth Scrolling ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Nav Active Class =======================*/

$(function () {
    $('.nav-item').on('click',
        function () {
            $('.nav-item').removeClass('active');
            $(this).addClass('active');
        });
});

/*===================== Load More Images ======================*/
$(document).ready(function () {

    $('.loadMore').loadMoreResults({
        displayedItems: 4,
        showItems: 4
    });

});


/*===================== Owl Carousel Slider ======================*/
$(function () {
    $('#owl-one').owlCarousel({
        loop: false,
        margin: 20,
        dots: false,
        nav: true,
        item: 3,
        navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-next'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            400: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 1,
                dots: true,
                nav: false
            },
            800: {
                items: 1,
                dots: false,
                nav: true
            },
            1000: {
                items: 3,
                dots: false,
                nav: true
            }
        }
    });
});
$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        item: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            400: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 1,
                dots: true,
                nav: false
            },
            800: {
                items: 1,
                dots: true,
                nav: false
            },
            1000: {
                items: 1,
                dots: true,
                nav: false
            }
        }
    });
});

/*===================== Slick Slider ======================*/


/*===================== Scroll Top Function Script ======================*/
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("nav").addClass("fixed-top sleep nav-color");
            $(".my-logo a img").addClass("scroll-logo-width ml-5");
        } else {
            $("nav").removeClass("fixed-top sleep nav-color ");
            $(".my-logo a img").removeClass("scroll-logo-width ml-5");

        }


    });
});
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("nav").addClass("fixed-top sleep nav-color");
            $("nav").css("background-color", "rgba(255, 255, 255,1)");
            $("nav").css("opacity", "1");

        } else {
            $("nav").removeClass("fixed-top sleep nav-color");
            $("nav").css("background-color", "rgba(255, 255, 255,0.749)");
            $("nav").css("opacity", "0.749");
        }
    });
});


/*===================== Nav tabs active Function Script ======================*/
$('#draggable-point').draggable({
    axis: 'x',
    containment: "#audio-progress"
});

$('#draggable-point').draggable({
    drag: function () {
        var offset = $(this).offset();
        var xPos = (100 * parseFloat($(this).css("left"))) / (parseFloat($(this).parent().css("width"))) + "%";

        $('#audio-progress-bar').css({
            'width': xPos
        });
    }
});

/*===================== Another Load More Script ======================*/
$(".no-display").slice(0, 6).show();
$("#load-more").on('click', function (e) {
    e.preventDefault();
    $(".no-display:hidden").slice(0, 3).slideDown();
    if ($(".no-display:hidden").length == 0) {
        $("#load-more").fadeOut('slow');
    }
    $('html,body').animate({
        scrollTop: $(this).offset().center
    }, 1500);
});
/*=====================Active Class Script ======================*/
$(function () {
    $('.form-check-label').on('click',
        function () {
            $('.form-check-label').removeClass('radio-active');
            $(this).addClass('radio-active');
        });
});
/*=====================Timer Function Script ======================*/
/*===================== Donation Script ======================*/
$('input[name="donation"]').change(function (e) {
    var check = $("input[name='donation']:checked").val();
    if (check == "other") {
        $("#radio6").parent().removeClass('display-none');
    } else {
        $("#radio6").parent().addClass('display-none');
    }
});
/*=====================Active Class Script ======================*/
$(function () {
    $('.form-check-label').on('click',
        function () {
            $('.form-check-label').removeClass('radio-active');
            $(this).addClass('radio-active');
        });
});
