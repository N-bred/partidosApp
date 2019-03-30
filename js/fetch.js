// Lets and Consts
const api =
  'https://legislapp.mininterior.gov.co/api/partidos_politicos/ponentes/';

const apiFormat = '/?limit=';

const offSet = '&offset=';

const iWidth = window.innerWidth;

let offset = 0;
let moreset = 0;
let partido = 0;

// MakRequest Function

const makeRequest = async url => {
  try {
    const request = await fetch(url);
    const data = await request.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Clear DOM Function

const cleanDOM = () => {
  $('#congr_list').html(' ');
  console.clear();
};

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
      $('#congr_list').append(congresista);
    });
  });

  partido = 6;
};

const makeRequestPC = () => {
  cleanDOM();
  let url = `${api}13${apiFormat}`;
  if (iWidth >= 1600) {
    url = `${api}13${apiFormat}10${offSet}0`;
  } else if (iWidth <= 1300 && iWidth >= 1160) {
    url = `${api}13${apiFormat}9${offSet}0`;
  } else if (iWidth <= 1159 && iWidth >= 928) {
    url = `${api}13${apiFormat}8${offSet}0`;
  } else if (iWidth <= 927 && iWidth >= 791) {
    url = `${api}13${apiFormat}6${offSet}0`;
  } else if (iWidth <= 790) {
    url = `${api}13${apiFormat}3${offSet}0`;
  }

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
      $('#congr_list').append(congresista);
    });
  });

  partido = 13;
};

const makeRequestPU = () => {
  cleanDOM();
  let url = `${api}14${apiFormat}`;
  if (iWidth >= 1600) {
    url = `${api}14${apiFormat}10${offSet}0`;
  } else if (iWidth <= 1300 && iWidth >= 1160) {
    url = `${api}14${apiFormat}9${offSet}0`;
  } else if (iWidth <= 1159 && iWidth >= 928) {
    url = `${api}14${apiFormat}8${offSet}0`;
  } else if (iWidth <= 927 && iWidth >= 791) {
    url = `${api}14${apiFormat}6${offSet}0`;
  } else if (iWidth <= 790) {
    url = `${api}14${apiFormat}3${offSet}0`;
  }

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
      $('#congr_list').append(congresista);
    });
  });

  partido = 14;
};
const makeRequestMira = () => {
  cleanDOM();
  let url = `${api}12${apiFormat}`;
  if (iWidth >= 1600) {
    url = `${api}12${apiFormat}10${offSet}0`;
  } else if (iWidth <= 1300 && iWidth >= 1160) {
    url = `${api}12${apiFormat}9${offSet}0`;
  } else if (iWidth <= 1159 && iWidth >= 928) {
    url = `${api}12${apiFormat}8${offSet}0`;
  } else if (iWidth <= 927 && iWidth >= 791) {
    url = `${api}12${apiFormat}6${offSet}0`;
  } else if (iWidth <= 790) {
    url = `${api}12${apiFormat}3${offSet}0`;
  }

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
      $('#congr_list').append(congresista);
    });
  });

  partido = 12;
};

const makeRequestCR = () => {
  cleanDOM();
  let url = `${api}5${apiFormat}`;
  if (iWidth >= 1600) {
    url = `${api}5${apiFormat}10${offSet}0`;
  } else if (iWidth <= 1300 && iWidth >= 1160) {
    url = `${api}5${apiFormat}9${offSet}0`;
  } else if (iWidth <= 1159 && iWidth >= 928) {
    url = `${api}5${apiFormat}8${offSet}0`;
  } else if (iWidth <= 927 && iWidth >= 791) {
    url = `${api}5${apiFormat}6${offSet}0`;
  } else if (iWidth <= 790) {
    url = `${api}5${apiFormat}3${offSet}0`;
  }

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
      $('#congr_list').append(congresista);
    });
  });

  partido = 5;
};
const makeRequestPL = () => {
  cleanDOM();
  let url = `${api}15${apiFormat}`;
  if (iWidth >= 1600) {
    url = `${api}15${apiFormat}10${offSet}0`;
  } else if (iWidth <= 1300 && iWidth >= 1160) {
    url = `${api}15${apiFormat}9${offSet}0`;
  } else if (iWidth <= 1159 && iWidth >= 928) {
    url = `${api}15${apiFormat}8${offSet}0`;
  } else if (iWidth <= 927 && iWidth >= 791) {
    url = `${api}15${apiFormat}6${offSet}0`;
  } else if (iWidth <= 790) {
    url = `${api}15${apiFormat}3${offSet}0`;
  }

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
      $('#congr_list').append(congresista);
    });
  });

  partido = 15;
};
const makeRequestAV = () => {
  cleanDOM();
  let url = `${api}2${apiFormat}`;
  if (iWidth >= 1600) {
    url = `${api}2${apiFormat}10${offSet}0`;
  } else if (iWidth <= 1300 && iWidth >= 1160) {
    url = `${api}2${apiFormat}9${offSet}0`;
  } else if (iWidth <= 1159 && iWidth >= 928) {
    url = `${api}2${apiFormat}8${offSet}0`;
  } else if (iWidth <= 927 && iWidth >= 791) {
    url = `${api}2${apiFormat}6${offSet}0`;
  } else if (iWidth <= 790) {
    url = `${api}2${apiFormat}3${offSet}0`;
  }

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
      $('#congr_list').append(congresista);
    });
  });

  partido = 2;
};
const makeRequestPolo = () => {
  cleanDOM();
  let url = `${api}17${apiFormat}`;
  if (iWidth >= 1600) {
    url = `${api}17${apiFormat}10${offSet}0`;
  } else if (iWidth <= 1300 && iWidth >= 1160) {
    url = `${api}17${apiFormat}9${offSet}0`;
  } else if (iWidth <= 1159 && iWidth >= 928) {
    url = `${api}17${apiFormat}8${offSet}0`;
  } else if (iWidth <= 927 && iWidth >= 791) {
    url = `${api}17${apiFormat}6${offSet}0`;
  } else if (iWidth <= 790) {
    url = `${api}17${apiFormat}3${offSet}0`;
  }

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
      $('#congr_list').append(congresista);
    });
  });

  partido = 17;
};
const makeRequestFarc = () => {
  cleanDOM();
  let url = `${api}10${apiFormat}`;
  if (iWidth >= 1600) {
    url = `${api}10${apiFormat}10${offSet}0`;
  } else if (iWidth <= 1300 && iWidth >= 1160) {
    url = `${api}10${apiFormat}9${offSet}0`;
  } else if (iWidth <= 1159 && iWidth >= 928) {
    url = `${api}10${apiFormat}8${offSet}0`;
  } else if (iWidth <= 927 && iWidth >= 791) {
    url = `${api}10${apiFormat}6${offSet}0`;
  } else if (iWidth <= 790) {
    url = `${api}10${apiFormat}3${offSet}0`;
  }

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
      $('#congr_list').append(congresista);
    });
  });

  partido = 10;
};
const makeRequestMais = () => {
  cleanDOM();
  let url = `${api}11${apiFormat}`;
  if (iWidth >= 1600) {
    url = `${api}11${apiFormat}10${offSet}0`;
  } else if (iWidth <= 1300 && iWidth >= 1160) {
    url = `${api}11${apiFormat}9${offSet}0`;
  } else if (iWidth <= 1159 && iWidth >= 928) {
    url = `${api}11${apiFormat}8${offSet}0`;
  } else if (iWidth <= 927 && iWidth >= 791) {
    url = `${api}11${apiFormat}6${offSet}0`;
  } else if (iWidth <= 790) {
    url = `${api}11${apiFormat}3${offSet}0`;
  }

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
      $('#congr_list').append(congresista);
    });
  });

  partido = 11;
};

const makeRequestAico = () => {
  cleanDOM();
  let url = `${api}1${apiFormat}`;
  if (iWidth >= 1600) {
    url = `${api}1${apiFormat}10${offSet}0`;
  } else if (iWidth <= 1300 && iWidth >= 1160) {
    url = `${api}1${apiFormat}9${offSet}0`;
  } else if (iWidth <= 1159 && iWidth >= 928) {
    url = `${api}1${apiFormat}8${offSet}0`;
  } else if (iWidth <= 927 && iWidth >= 791) {
    url = `${api}1${apiFormat}6${offSet}0`;
  } else if (iWidth <= 790) {
    url = `${api}1${apiFormat}3${offSet}0`;
  }

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
      $('#congr_list').append(congresista);
    });
  });

  partido = 1;
};
const makeRequestCH = () => {
  cleanDOM();
  let url = `${api}8${apiFormat}`;
  if (iWidth >= 1600) {
    url = `${api}8${apiFormat}10${offSet}0`;
  } else if (iWidth <= 1300 && iWidth >= 1160) {
    url = `${api}8${apiFormat}9${offSet}0`;
  } else if (iWidth <= 1159 && iWidth >= 928) {
    url = `${api}8${apiFormat}8${offSet}0`;
  } else if (iWidth <= 927 && iWidth >= 791) {
    url = `${api}8${apiFormat}6${offSet}0`;
  } else if (iWidth <= 790) {
    url = `${api}8${apiFormat}3${offSet}0`;
  }

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
      $('#congr_list').append(congresista);
    });
  });

  partido = 8;
};

// Logica de las flechas

const leftArrowRequest = off => {
  cleanDOM();
  let url = `${api}${partido}${apiFormat}`;
  if (iWidth >= 1600) {
    url = `${api}${partido}${apiFormat}10${offSet}${off}`;
  } else if (iWidth <= 1300 && iWidth >= 1160) {
    url = `${api}${partido}${apiFormat}9${offSet}${off}`;
  } else if (iWidth <= 1159 && iWidth >= 928) {
    url = `${api}${partido}${apiFormat}8${offSet}${off}`;
  } else if (iWidth <= 927 && iWidth >= 791) {
    url = `${api}${partido}${apiFormat}6${offSet}${off}`;
  } else if (iWidth <= 790) {
    url = `${api}${partido}${apiFormat}3${offSet}${off}`;
  }

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
      $('#congr_list').append(congresista);
    });
  });
};

const lessCongress = () => {
  console.log('Se ejecuta?');
  if (iWidth >= 1600) {
    offset = offset - 10;
  } else if (iWidth <= 1300 && iWidth >= 1160) {
    offset = offset - 9;
  } else if (iWidth <= 1159 && iWidth >= 928) {
    offset = offset - 8;
  } else if (iWidth <= 927 && iWidth >= 791) {
    offset = offset - 6;
  } else if (iWidth <= 790) {
    offset = offset - 3;
  }

  leftArrowRequest(offset);
};

const rightArrowRequest = moreset => {
  cleanDOM();
  let url = `${api}${partido}${apiFormat}`;
  if (iWidth >= 1600) {
    url = `${api}${partido}${apiFormat}10${offSet}${moreset}`;
  } else if (iWidth <= 1300 && iWidth >= 1160) {
    url = `${api}${partido}${apiFormat}9${offSet}${moreset}`;
  } else if (iWidth <= 1159 && iWidth >= 928) {
    url = `${api}${partido}${apiFormat}8${offSet}${moreset}`;
  } else if (iWidth <= 927 && iWidth >= 791) {
    url = `${api}${partido}${apiFormat}6${offSet}${moreset}`;
  } else if (iWidth <= 790) {
    url = `${api}${partido}${apiFormat}3${offSet}${moreset}`;
  }

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
      $('#congr_list').append(congresista);
    });
  });
};

const moreCongress = () => {
  console.log('Se ejecuta?');
  if (iWidth >= 1600) {
    moreset = moreset + 10;
  } else if (iWidth <= 1300 && iWidth >= 1160) {
    moreset = moreset + 9;
  } else if (iWidth <= 1159 && iWidth >= 928) {
    moreset = moreset + 8;
  } else if (iWidth <= 927 && iWidth >= 791) {
    moreset = moreset + 6;
  } else if (iWidth <= 790) {
    moreset = moreset + 3;
  }
  offset = moreset;
  rightArrowRequest(moreset);
};

// Call to the functions.

$('.partido_cd').on('click', makeRequestCD);
$('.partido_pc').on('click', makeRequestPC);
$('.partido_cr').on('click', makeRequestCR);
$('.partido_pl').on('click', makeRequestPL);
$('.partido_polo').on('click', makeRequestPolo);
$('.partido_mira').on('click', makeRequestMira);
$('.partido_mais').on('click', makeRequestMais);
$('.partido_ch').on('click', makeRequestCH);
$('.partido_f').on('click', makeRequestFarc);
$('.partido_av').on('click', makeRequestAV);
$('.partido_aico').on('click', makeRequestAico);
$('.partido_pu').on('click', makeRequestPU);
$('#flecha_izquierda_link').on('click', lessCongress);
$('#flecha_derecha_link').on('click', moreCongress);
