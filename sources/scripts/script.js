const mainTitle = document.getElementById('grupo');
const footer = document.getElementById('footer');
const donemilio = document.querySelector('.donemilio');
const duyamis = document.querySelector('.duyamis');
const mharnes = document.querySelector('.mharnes');
const marcadonemilio = document.querySelector('.donemiliomarca');
const marcaduyamis = document.querySelector('.duyamismarca');
const marcamharnes = document.querySelector('.mharnesmarca');
const linea = document.getElementById('linea');

donemilio.addEventListener('mouseover', () => {
    mainTitle.style.background = 'linear-gradient(to bottom, lightgray, #0033a1)';
    mainTitle.style.webkitBackgroundClip = 'text';
    mainTitle.style.color = 'transparent';
    donemilio.style.boxShadow = '0px 0px 10px 0px #0033a1';
    marcadonemilio.style.boxShadow = '0px 0px 10px 0px #0033a1';
    linea.style.backgroundColor = '#0033a1';
    duyamis.style.filter = 'grayscale(0.3)';
    mharnes.style.filter = 'grayscale(0.3)';
});

duyamis.addEventListener('mouseover', () => {
    mainTitle.style.background = 'linear-gradient(to bottom, lightgray, #E32515)';
    mainTitle.style.webkitBackgroundClip = 'text';
    mainTitle.style.color = 'transparent';
    duyamis.style.boxShadow = '0px 0px 10px 0px #E32515';
    marcaduyamis.style.boxShadow = '0px 0px 10px 0px #E32515';
    linea.style.backgroundColor = '#E32515';
    donemilio.style.filter = 'grayscale(0.3)';
    mharnes.style.filter = 'grayscale(0.3)';
});

mharnes.addEventListener('mouseover', () => {
    mainTitle.style.background = 'linear-gradient(to bottom, lightgray, #1D71B8)';
    mainTitle.style.webkitBackgroundClip = 'text';
    mainTitle.style.color = 'transparent';
    mharnes.style.boxShadow = '0px 0px 10px 0px #1D71B8';
    marcamharnes.style.boxShadow = '0px 0px 10px 0px #1D71B8';
    linea.style.backgroundColor = '#1D71B8';
    donemilio.style.filter = 'grayscale(0.3)';
    duyamis.style.filter = 'grayscale(0.3)';
});

const articles = document.querySelectorAll('.GrupoDonEmilio a');
articles.forEach(article => {
    article.addEventListener('mouseout', () => {
        mainTitle.style.color = '';
        mainTitle.style.background = '';
        donemilio.style.boxShadow = '';
        mharnes.style.boxShadow = '';
        duyamis.style.boxShadow = '';
        marcadonemilio.style.boxShadow = '';
        marcamharnes.style.boxShadow = '';
        marcaduyamis.style.boxShadow = '';
        linea.style.backgroundColor = '';
        duyamis.style.filter = '';
        mharnes.style.filter = '';
        donemilio.style.filter = '';
    });
});
