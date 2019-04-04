// Create Date

const year = new Date();
$('#year').text(year.getFullYear());

// Menu Toggle

$('#menu-toggle').click(function(e) {
  e.preventDefault();
  $('#wrapper').toggleClass('toggled');
});

// Find

$('#btn_find').on('click', function(e) {
  e.preventDefault();
  find($('#find').val());
});
