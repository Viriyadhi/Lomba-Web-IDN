let links = document.querySelector('.navbar-links-container');
links.style.display = 'none';

document.querySelector('.navbar-title button').addEventListener('click', e => {
    links.style.display = (links.style.display == 'none') ? 'flex' : 'none';
});