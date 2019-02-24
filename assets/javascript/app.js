var navOffset = parseInt($('body').css('padding-top'));
$('body').scrollspy({ target: '#affix-nav', offset: navOffset+10 });
$('.navbar a').click(function (event) {
  var scrollPos = jQuery('body').find($(this).attr('href')).offset().top - navOffset;
  $('body,html').animate({ scrollTop: scrollPos}, 500, function () {});
  return false;
});
