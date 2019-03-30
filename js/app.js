const makeRequest = async url => {
  try {
    const request = await fetch(url);
    const data = await request.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

const cleanDOM = () => {
  $('.congresistas_lista').html(' ');
  console.clear();
};

const api =
  'https://legislapp.mininterior.gov.co/api/partidos_politicos/ponentes/';

const apiFormat = '/?limit=';

const offSet = '&offset=';

const iWidth = window.innerWidth;

const leftArrowRequest = () => {};
const RightArrowRequest = () => {};

/* Make request to API function */

/* Start by making the api request with a function */

const makeRequestCD = () => {
  cleanDOM();
  let url = `${api}6${apiFormat}`;
  if (iWidth >= 1600) {
    url = `${api}6${apiFormat}10${offSet}0`;
  } else if (iWidth <= 1300 && iWidth >= 1160) {
    url = `${api}6${apiFormat}9${offSet}0`;
  } else if (iWidth <= 1159 && iWidth >= 928) {
    url = `${api}6${apiFormat}8${offSet}0`;
  } else if (iWidth <= 927 && iWidth >= 791) {
    url = `${api}6${apiFormat}6${offSet}0`;
  } else if (iWidth <= 790) {
    url = `${api}6${apiFormat}3${offSet}0`;
  }

  const flechaIzquierda = `<div class="flecha_izquierda">
  <a href="#">Flecha</a>
</div>`;
  const flechaDerecha = `<div class="flecha_derecha">
  <a href="#">Flecha</a>
</div>`;

  $('.congresistas_lista').append(flechaIzquierda);

  const requestApi = makeRequest(url);
  requestApi.then(data => {
    data.results.forEach(congresistas => {
      // Start DOM Manipulation
      const congresista = `      
      <div class="congresista">
        <div class="foto_congresista">
          <img src="${congresistas.foto}" alt="${congresistas.nombres}" />
        </div>
        <div class="nombre_congresista">
          <p>${congresistas.nombres}</p>
        </div>
      </div>`;
      $('.congresistas_lista').append(congresista);
    });
    $('.congresistas_lista').append(flechaDerecha);
  });
};

$('.partido_cd').on('click', makeRequestCD);
