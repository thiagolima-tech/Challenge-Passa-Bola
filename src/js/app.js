const btnMenu = document.getElementById('btn__menu');
const menuMobile = document.getElementById('menu__mobile');
const overlayMenu = document.getElementById('overlay__menu');

// Evento de clique para abrir o menu
btnMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('abrir__menu');  // Abre ou fecha o menu
    overlayMenu.classList.toggle('ativo');       // Ativa o overlay escuro
});

// Fecha o menu clicando no overlay
overlayMenu.addEventListener('click', () => {
    menuMobile.classList.remove('abrir__menu');
    overlayMenu.classList.remove('ativo');
});
