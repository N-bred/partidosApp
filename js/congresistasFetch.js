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

// MakeRequest Function

const makeRequest = async url => {
  try {
    const request = await fetch(url);
    const data = await request.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Card Element Structure

const createCongressmen = (src, name, nombrePartido) => {
  const cardItem = document.createElement('div');
  $(cardItem).addClass('card');
  const img = document.createElement('img');
  $(img).addClass('card-img-top');
  img.src = src;
  img.alt = name;
  const cardBody = document.createElement('div');
  $(cardBody).addClass('card-body');
  const cardText = document.createElement('p');
  $(cardText).addClass('card-text text-center');
  $(cardText).text(name);
  const cardFooter = document.createElement('div');
  $(cardFooter).addClass('card-footer text-center');
  const smallPartido = document.createElement('small');
  $(smallPartido).addClass('text-muted');
  $(smallPartido).text(nombrePartido);

  $(cardFooter).append(smallPartido);
  $(cardBody).append(cardText);
  $(cardItem).append(img);
  $(cardItem).append(cardBody);
  $(cardItem).append(cardFooter);

  return cardItem;
};

const makeGlobal = (id, nombrePartido) => {
  let api = `https://legislapp.mininterior.gov.co/api/partidos_politicos/ponentes/${id}/?limit=200`;

  makeRequest(api).then(congresmen => {
    congresmen.results.forEach(congresman => {
      if (
        congresman.comision === 'Séptima' &&
        congresman.organismo === 'Senado'
      ) {
        $('#card_container').append(
          createCongressmen(congresman.foto, congresman.nombres, nombrePartido)
        );
      }
    });
  });
};

makeGlobal(6, 'Centro Democrático');
makeGlobal(13, 'Partido Conservador');
makeGlobal(14, 'Partido de la U');
makeGlobal(9, 'Colombia Justo Libres');
makeGlobal(12, 'Mira');
makeGlobal(16, 'Partido Opcion Ciudadana');
makeGlobal(5, 'Cambio Radical');
makeGlobal(15, 'Partido Liberal');
makeGlobal(2, 'Alianza Verde');
makeGlobal(17, 'Polo Democrático');
makeGlobal(10, 'Farc');
makeGlobal(3, 'Consejo Comunitario la Mamuncia');
makeGlobal(
  4,
  'Consejo Comunitario Ancestral De Comunidades Negras Playa Renaciente'
);
makeGlobal(7, 'Coalición Alternativa Santandereana');
makeGlobal(11, 'Mais');
makeGlobal(1, 'Aico');
makeGlobal(18, 'Up');
makeGlobal(8, 'Colombia Humana');
