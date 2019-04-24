$(document).ready(function () {
  // Init Sidenave
  $('.sidenav').sidenav()
  // Init Parallax
  $('.parallax').parallax()
  // Init Scrollspy
  $('.scrollspy').scrollSpy({
    scrollOffset: 50
  })
  // Init Tooltip
  $('.tooltipped').tooltip({
    position: 'top',
    html: 'Hello!',
    classes: 'blue'
  })
  // Init Modal
  $('.modal').modal()
});
