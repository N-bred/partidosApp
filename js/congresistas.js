/* Make request to API function */

$('#btn_senado').on('click', () => {
  $('#list_senado').toggleClass('d-none');
});

$('#btn_camara').on('click', () => {
  $('#list_camara').toggleClass('d-none');
});

const year = new Date();
$('#year').text(year.getFullYear());

$('#menu-toggle').click(function(e) {
  e.preventDefault();
  $('#wrapper').toggleClass('toggled');
});

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
  $('#congr_list').html(' ');
  console.clear();
};

const api =
  'https://legislapp.mininterior.gov.co/api/partidos_politicos/ponentes/';

const apiFormat = '/?limit=200';

const input = $('#buscar');

const encontrar = $('#encontrar');

/* Start by making the api request with a function */

// Request CD

const makeRequestCD = () => {
  cleanDOM();
  const url = `${api}6${apiFormat}`;
  const requestApi = makeRequest(url);
  requestApi.then(data => {
    data.results.forEach(congresistas => {
      // Start DOM Manipulation
      const congresista = `<div class="congresista">
        <div class="foto_congresista">
          <img src="${congresistas.foto}" alt="${congresistas.nombres}" />
        </div>
        <div class="nombre_congresista">
          <p>${congresistas.nombres}</p>
        </div>
        <p class="comision">Comision: ${congresistas.comision}</p>
      </div>`;

      $('#congr_list').append(congresista);
    });
  });
};

$('.partido_cd').on('click', makeRequestCD);

// Request PC

const makeRequestPC = () => {
  cleanDOM();
  const url = `${api}13${apiFormat}`;
  const requestApi = makeRequest(url);
  requestApi.then(data => {
    data.results.forEach(congresistas => {
      // Start DOM Manipulation
      const congresista = `<div class="congresista">
        <div class="foto_congresista">
          <img src="${congresistas.foto}" alt="${congresistas.nombres}" />
        </div>
        <div class="nombre_congresista">
          <p>${congresistas.nombres}</p>
        </div>
        <p class="comision">Comision: ${congresistas.comision}</p>
      </div>`;

      $('#congr_list').append(congresista);
    });
  });
};

$('.partido_pc').on('click', makeRequestPC);

// Request PU

const makeRequestPU = () => {
  cleanDOM();
  const url = `${api}14${apiFormat}`;
  const requestApi = makeRequest(url);
  requestApi.then(data => {
    data.results.forEach(congresistas => {
      // Start DOM Manipulation
      const congresista = `<div class="congresista">
        <div class="foto_congresista">
          <img src="${congresistas.foto}" alt="${congresistas.nombres}" />
        </div>
        <div class="nombre_congresista">
          <p>${congresistas.nombres}</p>
        </div>
        <p class="comision">Comision: ${congresistas.comision}</p>
      </div>`;

      $('#congr_list').append(congresista);
    });
  });
};

$('.partido_pu').on('click', makeRequestPU);

// Request Mira

const makeRequestMira = () => {
  cleanDOM();
  const url = `${api}12${apiFormat}`;
  const requestApi = makeRequest(url);
  requestApi.then(data => {
    data.results.forEach(congresistas => {
      // Start DOM Manipulation
      const congresista = `<div class="congresista">
        <div class="foto_congresista">
          <img src="${congresistas.foto}" alt="${congresistas.nombres}" />
        </div>
        <div class="nombre_congresista">
          <p>${congresistas.nombres}</p>
        </div>
        <p class="comision">Comision: ${congresistas.comision}</p>
      </div>`;

      $('#congr_list').append(congresista);
    });
  });
};

$('.partido_mira').on('click', makeRequestMira);

// Request CR

const makeRequestCr = () => {
  cleanDOM();
  const url = `${api}5${apiFormat}`;
  const requestApi = makeRequest(url);
  requestApi.then(data => {
    data.results.forEach(congresistas => {
      // Start DOM Manipulation
      const congresista = `<div class="congresista">
        <div class="foto_congresista">
          <img src="${congresistas.foto}" alt="${congresistas.nombres}" />
        </div>
        <div class="nombre_congresista">
          <p>${congresistas.nombres}</p>
        </div>
        <p class="comision">Comision: ${congresistas.comision}</PL
      </div>`;

      $('#congr_list').append(congresista);
    });
  });
};

$('.partido_cr').on('click', makeRequestCr);

// Request PL

const makeRequestPL = () => {
  cleanDOM();
  const url = `${api}15${apiFormat}`;
  const requestApi = makeRequest(url);
  requestApi.then(data => {
    data.results.forEach(congresistas => {
      // Start DOM Manipulation
      const congresista = `<div class="congresista">
        <div class="foto_congresista">
          <img src="${congresistas.foto}" alt="${congresistas.nombres}" />
        </div>
        <div class="nombre_congresista">
          <p>${congresistas.nombres}</p>
        </div>
        <p class="comision">Comision: ${congresistas.comision}</p>
      </div>`;

      $('#congr_list').append(congresista);
    });
  });
};

$('.partido_pl').on('click', makeRequestPL);

// Request AV

const makeRequestAV = () => {
  cleanDOM();
  const url = `${api}2${apiFormat}`;
  const requestApi = makeRequest(url);
  requestApi.then(data => {
    data.results.forEach(congresistas => {
      // Start DOM Manipulation
      const congresista = `<div class="congresista">
        <div class="foto_congresista">
          <img src="${congresistas.foto}" alt="${congresistas.nombres}" />
        </div>
        <div class="nombre_congresista">
          <p>${congresistas.nombres}</p>
        </div>
        <p class="comision">Comision: ${congresistas.comision}</p>
      </div>`;

      $('#congr_list').append(congresista);
    });
  });
};

$('.partido_av').on('click', makeRequestAV);

// Request Polo

const makeRequestPolo = () => {
  cleanDOM();
  const url = `${api}17${apiFormat}`;
  const requestApi = makeRequest(url);
  requestApi.then(data => {
    data.results.forEach(congresistas => {
      // Start DOM Manipulation
      const congresista = `<div class="congresista">
        <div class="foto_congresista">
          <img src="${congresistas.foto}" alt="${congresistas.nombres}" />
        </div>
        <div class="nombre_congresista">
          <p>${congresistas.nombres}</p>
        </div>
        <p class="comision">Comision: ${congresistas.comision}</p>
      </div>`;

      $('#congr_list').append(congresista);
    });
  });
};

$('.partido_polo').on('click', makeRequestPolo);

// Request Farc

const makeRequestFarc = () => {
  cleanDOM();
  const url = `${api}10${apiFormat}`;
  const requestApi = makeRequest(url);
  requestApi.then(data => {
    data.results.forEach(congresistas => {
      // Start DOM Manipulation
      const congresista = `<div class="congresista">
        <div class="foto_congresista">
          <img src="${congresistas.foto}" alt="${congresistas.nombres}" />
        </div>
        <div class="nombre_congresista">
          <p>${congresistas.nombres}</p>
        </div>
        <p class="comision">Comision: ${congresistas.comision}</p>
      </div>`;

      $('#congr_list').append(congresista);
    });
  });
};

$('.partido_f').on('click', makeRequestFarc);

// Request Mais

const makeRequestMais = () => {
  cleanDOM();
  const url = `${api}11${apiFormat}`;
  const requestApi = makeRequest(url);
  requestApi.then(data => {
    data.results.forEach(congresistas => {
      // Start DOM Manipulation
      const congresista = `<div class="congresista">
        <div class="foto_congresista">
          <img src="${congresistas.foto}" alt="${congresistas.nombres}" />
        </div>
        <div class="nombre_congresista">
          <p>${congresistas.nombres}</p>
        </div>
        <p class="comision">Comision: ${congresistas.comision}</p>
      </div>`;

      $('#congr_list').append(congresista);
    });
  });
};

$('.partido_mais').on('click', makeRequestMais);

// Request Aico

const makeRequestAico = () => {
  cleanDOM();
  const url = `${api}1${apiFormat}`;
  const requestApi = makeRequest(url);
  requestApi.then(data => {
    data.results.forEach(congresistas => {
      // Start DOM Manipulation
      const congresista = `<div class="congresista">
        <div class="foto_congresista">
          <img src="${congresistas.foto}" alt="${congresistas.nombres}" />
        </div>
        <div class="nombre_congresista">
          <p>${congresistas.nombres}</p>
        </div>
        <p class="comision">Comision: ${congresistas.comision}</p>
      </div>`;

      $('#congr_list').append(congresista);
    });
  });
};

$('.partido_aico').on('click', makeRequestAico);

// Request CH

const makeRequestCH = () => {
  cleanDOM();
  const url = `${api}8${apiFormat}`;
  const requestApi = makeRequest(url);
  requestApi.then(data => {
    data.results.forEach(congresistas => {
      // Start DOM Manipulation
      const congresista = `<div class="congresista">
        <div class="foto_congresista">
          <img src="${congresistas.foto}" alt="${congresistas.nombres}" />
        </div>
        <div class="nombre_congresista">
          <p>${congresistas.nombres}</p>
        </div>
        <p class="comision">Comision: ${congresistas.comision}</p>
      </div>`;

      $('#congr_list').append(congresista);
    });
  });
};

$('.partido_ch').on('click', makeRequestCH);

$(encontrar).on('click', function(e) {
  e.preventDefault();

  find($(input).val());
});
