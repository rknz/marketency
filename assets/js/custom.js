/* ===================================
    About
====================================== */
/*
    Theme Name: Marketency
    Theme URI: www.rukonuzzaman.dev/theme/marketency
    Author: RowCoder
    Author URI: www.rukonuzzaman.dev
    Description: One Page Multipurpose HTML Templete
    Tags: one page, multipurpose, parallax, creative, html5,corporete
*/
$(document).ready(function () {
  'use strict'
  // =================================================================== Preloader
  var loder = document.getElementById("preloader")
  window.addEventListener("load", function () {
    loder.style.display = ("none")
  });
  // =================================================================== Animated On scrolling
  AOS.init({
    disable: function() {
      var maxWidth = 992;
      return window.innerWidth < maxWidth;
    }
  });
  // =================================================================== Menu Fixer
  window.addEventListener("scroll", function () {
    var main_menu = document.querySelector('.menu_wrapper');
    main_menu.classList.toggle("sticky", window.scrollY > 0, );
  });
  // ===================================================================Back to top 
  $(window).scroll(function(){
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();    
      if (scroll >= 500) {
          $(".backTop").addClass("hideen");
      }
      else {
          $(".backTop").removeClass("hideen");
      }
    });
  });
  // Scroll Smoth
  $("a[href='#Top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  // =================================================================== FAQ SECTION
  $(".question_section").accordion({
    animationDuration: 300,
    questionClass: '.question',
    answerClass: '.answer',
    itemClass: '.item'
  })
  // =================================================================== Testimonial slider
  $('.test_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 3000,
    pauseOnHover: false,
    arrows: false,
    asNavFor: '.client_slide',
    responsive: [{
      breakpoint: 1024,
      settings: {
        dots: false,
        centerMode: true,
        centerPadding: '10px',
        autoplaySpeed: 2000,
        speed: 300,
      },
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        centerMode: true,
        centerPadding: '10px',
        autoplaySpeed: 1100,
        speed: 150,
      },
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        autoplaySpeed: 1100,
        speed: 150,
      }
    }]
  });
  // =================================================================== Client Slider
  $('.client_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    asNavFor: '.test_slider',
    autoplaySpeed: 4000,
    speed: 3000,
    focusOnSelect: true,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        dots: false,
        centerMode: true,
        centerPadding: '10px',
        autoplaySpeed: 3000,
        speed: 400,
      }
    }]
  });
  // =================================================================== Clients Slider
  // ===================================================================team slider
  $('.client_brand').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    centerMode:true,
    centerPadding:'0',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  //  ===================================================================init Isotope
  var $grid = $('#Projects').isotope();
  // =================================================================== filter items on button click
  $('.project_menu').on('click', '.project_ul li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue,
    });
  });
  // ===================================================================Custom Active Class 
  $(document).on('click', '.project_ul li', function () {
    $(this).addClass('active_iso').siblings().removeClass('active_iso');
  });
  // =================================================================== Venobox
  $(document).ready(function () {
    $('.venobox').venobox();
  });
  // Counter Up
  $('.count').counterUp({
    delay: 30,
    time: 3000
  });
  // ===================================================================Cookies Hide Button
  // $("#HIDE").click(function () {
  //   $(".alert").css("display","none")
  //   // $("#").show();   
  // });
});