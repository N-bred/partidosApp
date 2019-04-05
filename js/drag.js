const sound_good = new Audio();
const sound_bad = new Audio();

let counter_a = 1;
let counter_b = 1;
let counter_c = 1;
let counter_d = 1;

const playSoundGood = () => {
  sound_good.src = './sound/good.mp3';
  sound_good.play();
};
const playSoundBad = () => {
  sound_bad.src = './sound/bad.mp3';
  sound_bad.play();
};

$('.card').draggable({
  stop: function(event, ui) {
    $(this).addClass('card-mini');
  }
});

$('#btn_find').on('click', function(e) {
  e.preventDefault();
  find($('#find').val());
});

$('.sector-a').droppable({
  drop: function(e, ui) {
    const xRandom = Math.random() * 30;
    const yRandom = Math.random() * 30;
    const xnotRandom = Math.random() * -30;
    const ynotRandom = Math.random() * -30;
    const xRandomF = xRandom + xnotRandom;
    const yRandomF = yRandom + ynotRandom;
    $(e.target).append($(ui.draggable).css({ top: xRandomF, left: yRandomF }));
    $('.contador_a').text(counter_a++);
    playSoundBad();
  },
  hoverClass: 'hoversector_a',
  out: function(e, ui) {
    $('.contador_a').text(counter_a--);
  }
});
$('.sector-b').droppable({
  drop: function(e, ui) {
    const xRandom = Math.random() * 30;
    const yRandom = Math.random() * 30;
    const xnotRandom = Math.random() * -30;
    const ynotRandom = Math.random() * -30;
    const xRandomF = xRandom + xnotRandom;
    const yRandomF = yRandom + ynotRandom;
    $(e.target).append($(ui.draggable).css({ top: xRandomF, left: yRandomF }));
    $('.contador_b').text(counter_b++);
    playSoundGood();
  },
  hoverClass: 'hoversector_b',
  out: function(e, ui) {
    $('.contador_b').text(counter_b--);
  }
});
$('.sector-c').droppable({
  drop: function(e, ui) {
    const xRandom = Math.random() * 30;
    const yRandom = Math.random() * 30;
    const xnotRandom = Math.random() * -30;
    const ynotRandom = Math.random() * -30;
    const xRandomF = xRandom + xnotRandom;
    const yRandomF = yRandom + ynotRandom;
    $(e.target).append($(ui.draggable).css({ top: xRandomF, left: yRandomF }));

    $('.contador_c').text(counter_c++);
    playSoundBad();
  },
  hoverClass: 'hoversector_c',
  out: function(e, ui) {
    $('.contador_c').text(counter_c--);
  }
});
$('.sector-d').droppable({
  drop: function(e, ui) {
    const xRandom = Math.random() * 30;
    const yRandom = Math.random() * 30;
    const xnotRandom = Math.random() * -30;
    const ynotRandom = Math.random() * -30;
    const xRandomF = xRandom + xnotRandom;
    const yRandomF = yRandom + ynotRandom;
    $(e.target).append($(ui.draggable).css({ top: xRandomF, left: yRandomF }));

    $('.contador_d').text(counter_d++);
    playSoundBad();
  },
  hoverClass: 'hoversector_d',
  out: function(e, ui) {
    $('.contador_d').text(counter_d--);
  }
});

//  Creacion de textos
const a_favor = document.createElement('h3');
$(a_favor)
  .text('A Favor')
  .addClass('text-center');
const indeciso = document.createElement('h3');
$(indeciso)
  .text('Indeciso')
  .addClass('text-center');
const en_contra = document.createElement('h3');
$(en_contra)
  .text('En Contra')
  .addClass('text-center');

//  Eliminacion y modificacion de clases
$('.contenedor-sector.order-2').remove();
$('.contenedor-sector')
  .removeClass('col-md-6')
  .addClass('col-md-4');
$('.contenedor-sector.order-1').prepend(a_favor);
$('.contenedor-sector.order-3').prepend(indeciso);
$('.contenedor-sector.order-4').prepend(en_contra);

// const appendCongressmen = (name, src) => {
//   const card = document.createElement('div');
//   $(card).addClass('card  bg-primary');
//   const img = document.createElement('img');
//   $(img).addClass('card-img-top');
//   img.src = src;
//   img.alt = name;
//   const cardBody = document.createElement('div');
//   $(cardBody).addClass('card-body');
//   const cardText = document.createElement('p');
//   $(cardText).addClass('card-text text-center');
//   $(cardText).text(name);

//   $(cardBody).append(cardText);
//   $(card).append(img);
//   $(card).append(cardBody);

//   return card;
// };

// $('.card').on('click', function() {
//   const name = this.children[0].alt;
//   const img = this.children[0].src;

//   console.log(this.children[0].src);

//   return appendCongressmen(name, img);
// });

// $('.sector-a').on('click', function() {
//   console.log(appendCongressmen);
// });
