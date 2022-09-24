    // MODE SOMBRE ET CLAIR //

let button    = document.querySelector('#mode');
let span      = document.querySelector('span');
let github    = document.querySelector('#GitHubLogo');   
let linkedin  = document.querySelector('#LinkedinLogo'); 

if(localStorage.getItem('theme')){
  if(localStorage.getItem('theme') == 'sombre') {
    modeSombre();
  }
}

button.addEventListener('click', () => {
  if(document.body.classList.contains('dark')) {
    document.body.className = '';
    span.textContent = 'DARK';
    localStorage.setItem('theme', 'clair');
  }
  else {
    modeSombre();
  }
});

function modeSombre() {
  document.body.className = 'dark';
  span.textContent = 'LIGHT';
  localStorage.setItem('theme', 'sombre');
}


// API Bitcoin and altcoins price //

const url = 'https://blockchain.info/ticker';

async function recupererPrix() {
  const requete = await fetch(url, {
    method: 'GET'
  });
  
  if(!requete.ok) {
    alert('Un problème est survenu.');
  } else {
    let donnees = await requete.json(); document.querySelector('#price_label').textContent = donnees.EUR.last;
  }
}
setInterval(recupererPrix, 1000);
