// Navigation with offset (for desktop) and scroll

$(function() {
  console.log("Hei");
  $("a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();

    // hide the menu for mobile and tablet.

    if( $(window).width() < 401 ) {
      console.log('tiny screen');
      $('.menu').css("display", "none");
    } else {
      console.log('big screen');
    }


    // animate
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 60
    }, 300, function() {});
  });
  console.log("the end");
});


// DONE mobile and tablet: Open close nav.
// TODO: conditional media query hide.


// Next if needed: Conditional offset for mobile and tablet..  https://stackoverflow.com/questions/10732690/offsetting-an-html-anchor-to-adjust-for-fixed-header*/



// : Use this model for hamburger on off. https://codepen.io/escherina/pen/pyxYqz Det är tid att plugga javascript igen?
