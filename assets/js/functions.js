/*================================================
*
* Template name : Mono
* Version       : 5.7.7
* Author        : FlaTheme
* Author URL    : http://themeforest.net/user/flatheme
*
* Table of Contents : 
* 1.  Preloaders
* 2.  Scroll Animations
* 3.  Background Image
* 4.  Header Menu
* 5.  Fullscreen Menu
* 6.  SmoothScroll
* 7.  ScrollToTop
* 8. Slider
* 9. Lightbox
* 10. Tooltip
*
===============================================*/
"use strict";

var $htmlBody = $("html,body");
var $body = $("body");
var $windowWidth = $(window).width();

/*===============================================
  1. Preloaders
===============================================*/
$(window).on("load", function () {
  $body.addClass("loaded");
});

if ($body.attr("data-preloader") === "1") {
  $body.append($("<div class='preloader preloader-1'><div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20'></svg></div></div>"));
}
else if ($body.attr("data-preloader") === "1-dark") {
  $body.append($("<div class='preloader preloader-1 dark'><div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20'></svg></div></div>"));
}
else if ($body.attr("data-preloader") === "2") {
  $body.append($("<div class='preloader preloader-2'><div><span></span></div></div>"));
}
else if ($body.attr("data-preloader") === "2-dark") {
  $body.append($("<div class='preloader preloader-2 dark'><div><span></span></div></div>"));
}
else if ($body.attr("data-preloader") === "3") {
  $body.append($("<div class='preloader preloader-3'><div><span></span></div></div>"));
}
else if ($body.attr("data-preloader") === "3-dark") {
  $body.append($("<div class='preloader preloader-3 dark'><div><span></span></div></div>"));
}


/*===============================================
  2. Scroll Animations
===============================================*/
sal({
  duration: 500
});


/*===============================================
  3. Background Image
===============================================*/
$(".bg-image").each(function() {
  var bgData = $(this).attr("data-bg-src");
  $(this).css('background-image', 'url("' + bgData + '")');
});


/*===============================================
  4. Header Menu
===============================================*/

//
// Sticky //
//
if ($(".header.sticky:not(.header-lg, .header-xl, .absolute-light, .absolute-dark)").length) {
  $("<div class='header-placeholder'></div>").insertBefore(".header.sticky");
}
if ($(".header-lg.sticky:not(.absolute-light, .absolute-dark)").length) {
  $("<div class='header-placeholder-lg'></div>").insertBefore(".header-lg.sticky");
}
if ($(".header-xl.sticky:not(.absolute-light, .absolute-dark)").length) {
  $("<div class='header-placeholder-xl'></div>").insertBefore(".header-xl.sticky");
}

//
// Absolute //
//
if ($(".absolute-light").length) {
  $(window).on("scroll", function() {
    var headerFixed = $(".header.sticky-autohide, .header.sticky");
    if ($(window).scrollTop() > 10) {
      headerFixed.removeClass("absolute-light");
    }
    else {
      headerFixed.addClass("absolute-light");
    }
  });
}
if ($(".absolute-dark").length) {
  $(window).on("scroll", function() {
    var headerFixed = $(".header.sticky-autohide, .header.sticky");
    if ($(window).scrollTop() > 10) {
      headerFixed.removeClass("absolute-dark");
    }
    else {
      headerFixed.addClass("absolute-dark");
    }
  });
}

//
// Open/Close Header Menu //
//
var headerMenu = $(".header-menu");
var headerToggle = $(".header-toggle");
var headerMenuItem = $(".nav-link");

headerToggle.on("click", function() {
  if (headerMenu.hasClass("show")) {
    headerMenu.removeClass("show");
    headerToggle.removeClass("toggle-close");
  }
  else {
    headerMenu.addClass("show");
    headerToggle.addClass("toggle-close");
  }
});

headerMenuItem.on("click", function() {
    headerMenu.removeClass("show");
    headerToggle.removeClass("toggle-close");
});

$(document).on("click", function(e) {
  if ( $(e.target).closest(".header-menu, .header-toggle").length === 0 ) {
    if (headerMenu.hasClass("show")) {
      headerMenu.removeClass("show");
      headerToggle.removeClass("toggle-close");
    }
  }
});


//
// Dropdown Menu //
//
if ($(".nav-dropdown").length) {
  var navDropdown = $(".nav-dropdown");
  var navSubdropdown = $(".nav-subdropdown");

  //
  // Create Dropdown Toggle //
  //
  navDropdown.each(function() {
    var $this = $(this);
    $this.parent(".nav-item").children(".nav-link").addClass("d-toggle");
    $this.parent(".nav-item").append('<a class="nav-dropdown-toggle" href="#"></a>');
  });
  navSubdropdown.each(function() {
    var $this = $(this);
    $this.parent(".nav-dropdown-item").children(".nav-dropdown-link").addClass("sd-toggle");
    $this.parent(".nav-dropdown-item").append('<a class="nav-subdropdown-toggle" href="#"></a>');
  });

  //
  // Dropdown Toggle Click //
  //
  var navDropdownToggle = $(".nav-dropdown-toggle");

  navDropdownToggle.each(function() {
    var $this = $(this);
    var navDropdown = $this.parent(".nav-item").children(".nav-dropdown");

    $this.on("click", function(e) {
      if ($this.hasClass("active")) {
        $this.removeClass("active");
        navDropdown.removeClass("show");
      }
      else {
        $this.addClass("active");
        navDropdown.addClass("show");
      }
      e.preventDefault();
    });
  });

  //
  // Subdropdown Toggle Click //
  //
  var navSubdropdownToggle = $(".nav-subdropdown-toggle");

  navSubdropdownToggle.each(function() {
    var $this = $(this);
    var navSubDropdown = $this.parent(".nav-dropdown-item").children(".nav-subdropdown");

    $this.on("click", function(e) {
      if ($this.hasClass("active")) {
        $this.removeClass("active");
        navSubDropdown.removeClass("show");
      }
      else {
        $this.addClass("active");
        navSubDropdown.addClass("show");
      }
      e.preventDefault();
    });
  });
}


//
// ScrollSpy //
//
$body.scrollspy({ target: '.header-menu' });


/*===============================================
  5. Fullscreen Menu
===============================================*/
var fm = $(".fullscreen-menu");

if (fm.length) {
  var fmToggle = $(".fm-toggle");
  var fmClose = $(".fm-close");
  //
  // Open //
  //
  fmToggle.on("click", function() {
    if (fm.hasClass("fm-show")) {
      fm.removeClass("fm-show");
    }
    else {
      fm.addClass("fm-show");
    }
  });

  //
  // Close //
  //
  fmClose.on("click", function() {
    fm.removeClass("fm-show");
    fmToggle.removeClass("fm-toggle-hide");
  });
}


/*===============================================
  6. SmoothScroll
===============================================*/
$('a[href*="#"]').not('[href="#"]').not('[data-toggle="tab"]').on("click", function(e) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $htmlBody.animate({scrollTop: target.offset().top}, 550, "easeInOutQuart");
      e.preventDefault();
    }
  }
});


/*===============================================
  7. Scroll To Top
===============================================*/
var scrollTopBtn = $(".scrolltotop");

if (scrollTopBtn.length) {
  //
  // Show/Hide button //
  //
  $(window).on("scroll", function(){
    if ($(this).scrollTop() > 700) { // 700px from top
      scrollTopBtn.addClass("scrolltotop-show");
    }
    else {
      scrollTopBtn.removeClass("scrolltotop-show");
    }
  });

  //
  // Animate button //
  //
  scrollTopBtn.on("click", function(e){
    $htmlBody.animate({scrollTop : 0}, 450, "easeInOutQuart");
    e.preventDefault();
  });
}


/*===============================================
  8. Slider
===============================================*/

$(".owl-carousel").each( function() {
  var $carousel = $(this);

  var $defaults = {
    rewind: true,
    navText: ["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
    autoHeight: true, 
    autoplayTimeout: 4000, 
    autoplaySpeed: 800, 
    autoplayHoverPause: true, 
    navSpeed: 300, 
    dotsSpeed: 300
  }

  var $options = {
    items: $carousel.data("owl-items"),
    margin: $carousel.data("owl-margin"),
    loop: $carousel.data("owl-loop"),
    center: $carousel.data("owl-center"),
    nav: $carousel.data("owl-nav"),
    rewind: $carousel.data("owl-rewind"),
    dots: $carousel.data("owl-dots"),
    autoplay: $carousel.data("owl-autoplay")
  }

  var $responsive = {
    responsive: {
      0 : {
        items: $carousel.data("owl-xs")
      },
      576 : {
        items: $carousel.data("owl-sm")
      },
      768 : {
        items: $carousel.data("owl-md")
      },
      992 : {
        items: $carousel.data("owl-lg")
      },
      1200 : {
        items: $carousel.data("owl-xl")
      }
    }
  }

  if ($carousel.hasClass("product-carousel")) {
    var $productCarousel = {
      items:1,
      animateOut: 'fadeOut',
      URLhashListener:true,
      startPosition: 'URLHash'
    }
  }

  $carousel.owlCarousel( $.extend( $defaults, $options, $responsive, $productCarousel) );

  var customPrev = $("#customPrev");
  var customNext = $("#customNext");

  customNext.on("click", function(){
    $carousel.trigger("next.owl.carousel", [300]);
  });
  customPrev.on("click", function(){
    $carousel.trigger("prev.owl.carousel", [300]);
  });
});


/*===============================================
  9. Lightbox
===============================================*/
//
// Lightbox - Image //
//
var $lightboxImage = $(".lightbox-image-link, .lightbox-image-box");

$lightboxImage.each(function () {
  var $this = $(this);
  $this.magnificPopup({
    type: 'image',
    fixedContentPos: false,
    removalDelay: 200,
    closeOnContentClick: true, 
    image: {
      titleSrc: 'data-image-title'
    }
  });
});

//
// Lightbox - Media //
//
var $lightboxMedia = $(".lightbox-media-link, .lightbox-media-box");

$lightboxMedia.each(function() {
  var $this = $(this);
  $this.magnificPopup({
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0'
        },
          vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
      },
      srcAction: "iframe_src" 
    }
  });
});

//
// Lightbox - Gallery //
//
var $gallery = $(".gallery-wrapper");

if ($gallery.length) {
  $gallery.each(function() {
    var $this = $(this);
    $this.magnificPopup({
      delegate: 'a',
      removalDelay: '200',
      type: 'image',
      fixedContentPos: false,
      gallery: {
          enabled: true
      },
      image: {
        titleSrc: 'data-gallery-title'
      }
    });
  });
}

/*===============================================
  10. Tooltip
===============================================*/
$('[data-toggle="tooltip"]').tooltip();


if ($(window).width() < 600) {
    $('#slider').removeClass('.owl-carousel');
}


/*===============================================
  8. Portfolio Masonry
===============================================*/
var pMasonry = $(".portfolio-wrapper:not(.row)");

if (pMasonry.length) {
  pMasonry.imagesLoaded(function() {
    var $pWrapper = $(".portfolio-wrapper").isotope({
      itemSelector: ".portfolio-item",
      transitionDuration: 250 // 0.25 second
    });
    var filter = $(".filter ul li");

    // Portfolio Filter //
    filter.on("click", function() {
      var filterValue = $(this).attr("data-filter");
      $pWrapper.isotope({ filter: filterValue });

      filter.removeClass("active");
      $(this).addClass("active");
    });
  });
}

/*===============================================
  11. Blog Masonry
===============================================*/
var $blogMasonry = $(".blog-masonry").imagesLoaded( function() {
  $blogMasonry.masonry({
    itemSelector: '.blog-post-box'
  });
});


/*===============================================
  12. Masonry
===============================================*/
var $masonryGrid = $(".masonry").imagesLoaded( function() {
  $masonryGrid.masonry({
    itemSelector: '.masonry-item'
  });
});