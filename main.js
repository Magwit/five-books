// Navigation with offset (for desktop) and scroll

$(function() {

  var off;
  var headerHheight = $(".header").height();

  // set default for desktop
  if ($(window).width() >= 960) {
    off = headerHheight;
  } else {
    // set defaults for mobile and tablet
    $(".menu").toggleClass("none-display");
    off = 0;
  }

  // click hamburger icon or section to display menu

  $(".hamburger-icon").on('click', function() {
    $(".menu").toggleClass("none-display");
    // $(".menu").css("display", "block");
  })


  // click menu item to scroll to section
  $("a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
    // hide menu for mobile and tablet
    if ($(window).width() < 960) {
      $(".menu").toggleClass("none-display");
    }
    // animate
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - off
    }, 300, function() {});
  });




});


// DONE mobile and tablet: Open close nav.
// DONE: conditional media query hide for mobie and rtablet.
// DONE: basic hamburget toggle for mobile and tablet
// DONE: troubleshoot and polish the hamburger and nav
// DONE: adjust the scrollTop values to height of header on desktop and adapt hide menu behaviour to only apply to mobile/tablet
// DONE: simple discreet menu hover effect.. bigger title header
// DONE: attributions
// ICEBOXED: links to goodreads on master branch
// TODO: clean up the master redundant code an borders. add attribution in footer.  prep for a new branch with te´weaked font sizes..? 

// Next if needed: Conditional offset for mobile and tablet..  https://stackoverflow.com/questions/10732690/offsetting-an-html-anchor-to-adjust-for-fixed-header*/



// : Use this model for hamburger on off. https://codepen.io/escherina/pen/pyxYqz Det är tid att plugga javascript igen?
