// Navigation with offset (for desktop) and scroll

$(function() {
  console.log("Hei");
  $("a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();

    // hide the menu for mobile and tablet.

    var off = 0;

    if ($(window).width() < 401) {
      console.log("mobile");
      $('.menu').css("display", "none");
      // set a variable that I can use in animate
    } else if ($(window).width() < 959 && $(window).width() > 400) {
      console.log('tablet');
      $('.menu').css("display", "none");
      // set a variable that I can use in animate
    } else {
      console.log('desktop');
      // set a variable that I can use in animate
      off = 60;
    }
    //  var poxel = 60;
    var poxel = $('.menu').height();
    console.log(poxel);

    // animate
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - off
    }, 300, function() {});
  });
  console.log("the end");
});


// DONE mobile and tablet: Open close nav.
// DONE: conditional media query hide for mobie and rtablet.


// Next if needed: Conditional offset for mobile and tablet..  https://stackoverflow.com/questions/10732690/offsetting-an-html-anchor-to-adjust-for-fixed-header*/



// : Use this model for hamburger on off. https://codepen.io/escherina/pen/pyxYqz Det är tid att plugga javascript igen?
