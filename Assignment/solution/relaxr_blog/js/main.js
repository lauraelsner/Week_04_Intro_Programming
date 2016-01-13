// Show the extra paragraph when clicking on 'read more'
$('.readmore').click(function(){
  $('#show-this-on-click').slideDown();
  $('.readmore').hide();
  $('.readless').show();
  event.preventDefault();
});

// hide that paragraph when clicking 'read less'
$('.readless').click(function(){
  $('#show-this-on-click').slideUp();
  $('.readless').hide();
  $('.readmore').show();
  event.preventDefault();
});

// show the learn more text in the sidebar
$('.learnmore').click(function(){
  $('#learnmoretext').slideDown();
  $('.learnmore').hide();
  event.preventDefault();
});
