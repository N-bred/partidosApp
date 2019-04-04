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

$('.card').draggable({
  start: function(event, ui) {
    $(this).addClass('card-mini');
  }
});

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
