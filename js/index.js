$('#btn_senado').on('click', () => {
  $('#list_senado').toggleClass('d-none');
});

$('#btn_camara').on('click', () => {
  $('#list_camara').toggleClass('d-none');
});

const year = new Date();
$('#year').text(year.getFullYear());
