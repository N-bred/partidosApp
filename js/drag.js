setInterval(() => {
  $('.draggable').draggable();
  console.log('Cambio hecho');
}, 5000);

let counter_a = 0;
let counter_b = 0;
let counter_c = 0;
let counter_d = 0;

$('.sector_a').droppable({
  accept: '.draggable',
  hoverClass: 'hoversector',
  drop: function() {
    $('.contador_a').html((counter_a = counter_a + 1));
  },
  out: function() {
    $('.contador_a').html((counter_a = counter_a - 1));
  },
  tolerance: 'pointer'
});
$('.sector_b').droppable({
  accept: '.draggable',
  hoverClass: 'hoversector',
  drop: function() {
    $('.contador_b').html((counter_b = counter_b + 1));
  },
  out: function() {
    $('.contador_b').html((counter_b = counter_b - 1));
  }
});
$('.sector_c').droppable({
  accept: '.draggable',
  hoverClass: 'hoversector',
  drop: function() {
    $('.contador_c').html((counter_c = counter_c + 1));
  },
  out: function() {
    $('.contador_c').html((counter_c = counter_c - 1));
  }
});
$('.sector_d').droppable({
  accept: '.draggable',
  hoverClass: 'hoversector',
  drop: function() {
    $('.contador_d').html((counter_d = counter_d + 1));
  },
  out: function() {
    $('.contador_d').html((counter_d = counter_d - 1));
  }
});
