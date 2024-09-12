$(document).ready(function () {
  // $(window).on("load", function() {
  //     $.when($('page-preloader').fadeOut(500)).then(console.log("Heere"));
  //   });

  // $( window ).load(function() {

  // });
  $(document).on(
    "DOMSubtreeModified",
    ".page-preloader__progress",
    function () {
      if ($(".page-preloader__progress").html() == "100%") {
        setTimeout(function () {
          $(".animate").bind("inview", function (event, isInView) {
            if (isInView) {
              var animate = $(this).attr("data-animation");
              var speedDuration = $(this).attr("data-duration");
              var $t = $(this);
              setTimeout(function () {
                $t.removeClass("animate");

                $t.addClass(animate + " animated");
              }, speedDuration);
            }
          });
        }, 10);
      }
    }
  );

  // });
  // setTimeout(function () {
  //     $('.v-view').bind('inview', function (event, isInView) {
  //         if (isInView) {
  //             var $t = $(this);
  //             setTimeout(function () {
  //                 $t.addClass('v-viewed');
  //             }, 20);
  //         }
  //     });
  // }, 10);

  // ===== Add Active Class on Menu ====
  var url = window.location;
  $('#sidebar ul li a[href="' + url + '"]')
    .parent()
    .addClass("active");
  $("#sidebar ul li a")
    .filter(function () {
      return this.href == url;
    })
    .parent()
    .addClass("active");
});

$(window).bind("load", function () {
  // insert your code here
});

// Enable Tooltip of Bootstrap
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

//Sidebar

$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal",
  });

  $("#dismiss, .overlay").on("click", function () {
    $("#sidebar").removeClass("active");
    $(".overlay").removeClass("active");
  });

  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").addClass("active");
    $(".overlay").addClass("active");
    $(".collapse.in").toggleClass("in");
    $("a[aria-expanded=true]").attr("aria-expanded", "false");
  });
});

// === Move top on Scroll
$(window).scroll(function () {
  var w = $(window).scrollTop();
  var d = "translateY(-" + w * 1 + "px)";
  $(".hero-content").css({
    transform: d,
  });
});

// === Project in Mind Section
$(document).ready(function () {
  $(".hover-btn a").mouseenter(function () {
    $(".hover-color").css("transform", "scale(1)");
    $(".project-content").addClass("hover-change");
  });
  $(".hover-btn a").mouseleave(function () {
    $(".hover-color").css("transform", "scale(11.5)");
    $(".project-content").removeClass("hover-change");
  });
});

// === Slider Tabs Accordion
jQuery(".accordion-cell").click(function () {
  if (jQuery(this).hasClass("collapsed")) {
    jQuery(this).removeClass("collapsed");
    jQuery(this).siblings().removeClass("expanded");
    jQuery(this).addClass("expanded");
    jQuery(this).siblings().addClass("collapsed");
  }
});

// === Corevalues Section Swiper
var swiper = new Swiper(".corevalues-swiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup: 1,
  autoplay: true,
  speed: 600,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

// === News Section Swiper
var swiper = new Swiper(".news-swiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  autoplay: false,
  parallax: true,
  speed: 600,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

// === Project Gallery Section Swiper
var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

$(window).on("resize orientation", function () {
  sw = $(window).width();
  sh = $(window).height();
  if (sh < 450 && sw > 480 && sw < 820) {
    $("#portrait-warnning").css("display", "flex");
  } else {
    $("#portrait-warnning").css("display", "none");
  }

  setTimeout(function () {
    if (sw > 1025) {
      // if ((sw < 1400) && (sw > 1300) && (sh > 900)) {

      // } else {
      //     fontResizer();
      // }
      if (sw < 1400 && sw > 1300 && sh > 900) {
      }
    }
  }, 500);
});

// === Add Class on Scroll
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 500) {
      $("#topheader").addClass("test");
    } else {
      $("#topheader").removeClass("test");
    }
  });
});

// === Expand Menu onClick
// function menuExpand() {
//     var x = document.getElementById("expandedMenu");
//     if (x.style.opacity === "0") {
//       x.style.opacity = "1";
//     } else {
//         x.style.opacity = "0";
//         x.style.margin = "0 !important";
//     }
//   }
$("#toExpand").on("click", function () {
  $("ul.topmenu").toggleClass("open");
  // $('#topheader').toggleClass('section-bg-grey')
  $(this).toggleClass("changeIcon");
  // if( $('ul.topmenu').hasClass('open'))
  // $('#pictureChange').attr('src', 'https://gardinia.futuristic.agency/assets/svg/logo-white.svg');

  // if(!$('ul.topmenu').hasClass('open'))
  // $('#pictureChange').attr('src', 'https://gardinia.futuristic.agency/assets/svg/logo-color.svg');
});

$(document).ready(function () {


  // For Burger Icon Homepage
  $("#sidebarCollapse").click(function () {
    $("#for-mobile-show").addClass("z-index");
  });

  $("#dismiss").click(function () {
    $("#for-mobile-show").removeClass("z-index");
  });

  $(".initialize-gallery").magnificPopup({
    type: "image",
    delegate: "a",
    gallery: {
      // options for gallery
      enabled: true,
    },
  });

  $(".services-content.section-bg-themegrey")
    .parentsUntil("section")
    .addClass("mobile-norev");
});

$(document).on('click', '.iframeButton', function(){
  console.log('IFrame...');

  $('#iframeContainer').toggle();
});
