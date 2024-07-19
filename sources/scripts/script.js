const mainTitle = document.getElementById('grupo');
const footer = document.getElementById('footer');
const donemilio = document.querySelector('.donemilio');
const duyamis = document.querySelector('.duyamis');
const mharnes = document.querySelector('.mharnes');
const marcadonemilio = document.querySelector('.donemiliomarca');
const marcaduyamis = document.querySelector('.duyamismarca');
const marcamharnes = document.querySelector('.mharnesmarca');

donemilio.addEventListener('mouseover', () => {
    donemilio.style.boxShadow = '0px 0px 10px 0px #0033a1';
    marcadonemilio.style.boxShadow = '0px 0px 20px 0px #0033a1';
    duyamis.style.filter = 'grayscale(0.3)';
    mharnes.style.filter = 'grayscale(0.3)';
});

duyamis.addEventListener('mouseover', () => {
    duyamis.style.boxShadow = '0px 0px 10px 0px #E32515';
    marcaduyamis.style.boxShadow = '0px 0px 20px 0px #E32515';
    donemilio.style.filter = 'grayscale(0.3)';
    mharnes.style.filter = 'grayscale(0.3)';
});

mharnes.addEventListener('mouseover', () => {
    mharnes.style.boxShadow = '0px 0px 10px 0px #1D71B8';
    marcamharnes.style.boxShadow = '0px 0px 20px 0px #1D71B8';
    donemilio.style.filter = 'grayscale(0.3)';
    duyamis.style.filter = 'grayscale(0.3)';
});

const articles = document.querySelectorAll('.GrupoDonEmilio a');
articles.forEach(article => {
    article.addEventListener('mouseout', () => {
        donemilio.style.boxShadow = '';
        mharnes.style.boxShadow = '';
        duyamis.style.boxShadow = '';
        marcadonemilio.style.boxShadow = '';
        marcamharnes.style.boxShadow = '';
        marcaduyamis.style.boxShadow = '';
        duyamis.style.filter = '';
        mharnes.style.filter = '';
        donemilio.style.filter = '';
    });
});
