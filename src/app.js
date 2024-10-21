$('#button1').hide(); //hide all the reason text
$('#firstTask').on('click', function() {
  $(this).children('#button1').toggle();
});