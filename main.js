function mostraMenuMobile() {
    let menuMobile = document.querySelector('.menu_mobile');
    if (menuMobile.classList.contains('revelaElemento')) {
         menuMobile.classList.remove('revelaElemento');
         document.querySelector('.icone').src = "assets/menuMobile.svg"
    } else {
         menuMobile.classList.add('revelaElemento')
         document.querySelector('.icone').src = "assets/close.svg"
        }
}

document.querySelector('.botaoMenuMobile').onclick = mostraMenuMobile;

//---------------------------------------
const listaDeIconesInteresses = document.querySelectorAll('.icone_interesses')

for(let i = 0; i < listaDeIconesInteresses.length; i++) {
    const INTERESSE = listaDeIconesInteresses[i]
    let idInteresse = INTERESSE.id
    
    INTERESSE.onclick = function() {
        mostraTexto(idInteresse)
    }
}

const textoInteresses = {
    'interesse_html':'O HTML estrutura a página Web',
    'interesse_css':'O CSS estiliza a página Web',
    'interesse_javascript':'O JavaScript é a linguagem de programação que permite dinamismo e interatividade à página Web',
    'interesse_git':'O Git é um controlador de versões de projetos'
}

function mostraTexto (idInteresse) {
    let texto = document.querySelector('#texto-interesses')
    let caixaDisplay = document.querySelector('#caixa-interesses')

    caixaDisplay.classList.remove('caixa_interesses')

    texto.innerHTML = textoInteresses[idInteresse] || ''
}