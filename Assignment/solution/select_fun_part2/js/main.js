// 1.	Slide the header up when it is clicked on.
$('header').on('click', function() {
  $('header').slideUp();
});
// 2.	Remove the purplebox class
$('.purplebox').removeClass('purplebox');
// 3.	Hide all of the div’s in #row4
$('#row4 div').hide();
// 4.	Add a paragraph that says “I have been added” to all boxes with class “add-para” (Hint: you'll need to look up the append() method)
$('.add-para').append('<p>I have been added</p>');
// 5.	Add a class in your css and add it to all items with the class .box
$('.box').addClass('funclass');
// 6.	Show the footer when the anchor in #box2 is clicked
$('#box2 a').on('click', function() {
  $('footer').show();
});
// 7.	Change the styling of the span inside of #box3 by adding a class (and style that class in CSS)
$('#box3 span').addClass('special-span');
// 8.	Change the background color of all the articles
$('article').css('background-color', '#122F4A');
// 9.	Change the font color of all the articles in row 2
$('#row2 article').css('color', 'green');
// 10.	Select the h4 in #box11 and hide the span inside of #box11 using the .siblings() function
$('#box11 h4').siblings('span').hide();
// 11.	Clicking on #box7 should hide the span within the h2
$('#box7').on('click', function() {
  $('#box7 h2 span').hide();
});
// 12.	Add a h3 to the beginning of #box12
$('#box12').prepend('<h3>Okay, I did something!</h3>');
// 13.	SlideUp all the h1s on the page
$('h1').slideUp(1000);
// 14.	Add a unique class to your CSS and add it to the articles in #row1
$('#row1 article').addClass('unique');
// 15.	Clicking reset should fade all boxes, headers and footers in and remove any added classes
$('#reset').on('click', function() {
  $('.box, header, footer').fadeIn(1000);
  $('.funclass, .special-span, .unique').removeClass('funclass special-span unique');
});