
let links = document.querySelector('.navbar-links-container');

document.querySelector('.navbar-title button').addEventListener('click', e => {
    links.style.display = (links.style.display == 'none' || links.style.display == '') ? 'flex' : 'none';
});
const iframe = document.getElementsByTagName('iframe')[0];

function setIframeSize() {
    const iframeContent = iframe.contentDocument; 
    const iframeBody = iframeContent.body;
    const iframeDiv = iframeBody.querySelectorAll('body > div');
    const iframeLastChildRect = iframeDiv[iframeDiv.length - 1].getBoundingClientRect();

    iframe.style.height = (iframeLastChildRect.y + iframeLastChildRect.height) + 'px';
}

iframe.addEventListener('load' , setIframeSize);

window.addEventListener('resize', setIframeSize);
