setInterval(() => {
  $('.draggable').draggable();
  console.log('Cambio hecho');
}, 1000);

const sound_good = new Audio();
const sound_bad = new Audio();

let counter_a = 0;
let counter_b = 0;
let counter_c = 0;
let counter_d = 0;

const playSoundGood = () => {
  sound_good.src = './sound/good.mp3';
  sound_good.play();
};
const playSoundBad = () => {
  sound_bad.src = './sound/bad.mp3';
  sound_bad.play();
};

$('.sector_a').droppable({
  accept: '.draggable',
  hoverClass: 'hoversector_a',
  drop: function(ev, ui) {
    $('.contador_a').html((counter_a = counter_a + 1));
    playSoundBad();
  },
  out: function() {
    $('.contador_a').html((counter_a = counter_a - 1));
  }
});
$('.sector_b').droppable({
  accept: '.draggable',
  hoverClass: 'hoversector_b',
  drop: function() {
    $('.contador_b').html((counter_b = counter_b + 1));
    playSoundGood();
  },
  out: function() {
    $('.contador_b').html((counter_b = counter_b - 1));
  }
});
$('.sector_c').droppable({
  accept: '.draggable',
  hoverClass: 'hoversector_c',
  drop: function() {
    $('.contador_c').html((counter_c = counter_c + 1));
    playSoundBad();
  },
  out: function() {
    $('.contador_c').html((counter_c = counter_c - 1));
  }
});
$('.sector_d').droppable({
  accept: '.draggable',
  hoverClass: 'hoversector_d',
  drop: function() {
    $('.contador_d').html((counter_d = counter_d + 1));
    playSoundBad();
  },
  out: function() {
    $('.contador_d').html((counter_d = counter_d - 1));
  }
});
