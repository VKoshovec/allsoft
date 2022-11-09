const imgS = document.addEventListener("load", showSite())

function showSite () {
    document.querySelectorAll('img').forEach((im)=>{im.classList.add('lazyload')});
    setTimeout(loadhtml, 3000);
    setTimeout(delloadhtml, 4000);
}

function loadhtml () {
    document.querySelector('.loader').classList.add('loader-close')
}

function delloadhtml () {
    document.querySelector('.loader').classList.add('loader-deley')
}