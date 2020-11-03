let btn_nav_next = document.getElementById('btn-nav-next');
let btn_nav_prev = document.getElementById('btn-nav-prev');
let tableContainerCoins = document.getElementById('table-container--coins');
let tableContainerComissions = document.getElementById('table-container--comissions');
let next = false;
btn_nav_next.addEventListener('click', getTableCoin);
btn_nav_prev.addEventListener('click', getTableCoin);

window.addEventListener('resize', res);

function res(){
    if (screen.width > 930 && next === true) {
        tableContainerCoins.removeAttribute('style');
        tableContainerComissions.removeAttribute('style');
        btn_nav_prev.removeAttribute('style');
        btn_nav_next.removeAttribute('style');
        next = false;
    }
}


function getTableCoin() {
    if (next) {
        tableContainerCoins.removeAttribute('style');
        tableContainerComissions.removeAttribute('style');
        btn_nav_prev.removeAttribute('style');
        btn_nav_next.removeAttribute('style');
        next = false;
    } else {
        tableContainerComissions.style.display = 'grid';
        tableContainerCoins.style.display = 'none';
        btn_nav_prev.style.display = 'flex';
        btn_nav_next.style.display = 'none'
        next = true;
    }
}