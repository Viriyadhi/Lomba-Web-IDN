let links = document.querySelector('.navbar-links-container');

document.querySelector('.navbar-title button').addEventListener('click', e => {
    links.style.display = (links.style.display == 'none' || links.style.display == '') ? 'flex' : 'none';
});