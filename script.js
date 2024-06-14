const mainTitle = document.getElementById('titulo');
const footer = document.getElementById('footer');
const donemilio = document.querySelector('.donemilio');
const duyamis = document.querySelector('.duyamis');
const mharnes = document.querySelector('.mharnes');
const marcadonemilio = document.querySelector('.donemiliomarca');
const marcaduyamis = document.querySelector('.duyamismarca');
const marcamharnes = document.querySelector('.mharnesmarca');
const linea = document.getElementById('linea');

donemilio.addEventListener('mouseover', () => {
    mainTitle.style.color ='#0033a1';
    footer.style.backgroundColor = '#0033a1';
    donemilio.style.boxShadow = '#0033a1 0px 0px 10px 0px';
    marcadonemilio.style.boxShadow = '#0033a1 0px 0px 10px 0px';
    linea.style.backgroundColor = '#0033a1';
});

duyamis.addEventListener('mouseover', () => {
    mainTitle.style.color = '#E32515';
    footer.style.backgroundColor = '#E32515';
    duyamis.style.boxShadow = '#E32515 0px 0px 10px 0px';
    marcaduyamis.style.boxShadow = '#E32515 0px 0px 10px 0px';
    linea.style.backgroundColor = '#E32515';
});

mharnes.addEventListener('mouseover', () => {
    mainTitle.style.color = '#1D71B8';
    footer.style.backgroundColor = '#1D71B8';
    mharnes.style.boxShadow = '#1D71B8 0px 0px 10px 0px';
    marcamharnes.style.boxShadow = '#1D71B8 0px 0px 10px 0px';
    linea.style.backgroundColor = '#1D71B8';
});



const articles = document.querySelectorAll('.GrupoDonEmilio article');
articles.forEach(article => {
    article.addEventListener('mouseout', () => {
        mainTitle.style.color = 'white';
        mainTitle.style.backgroundColor = '';
        footer.style.backgroundColor = '';
        donemilio.style.boxShadow = '';
        mharnes.style.boxShadow = '';
        duyamis.style.boxShadow = '';
        marcadonemilio.style.boxShadow = '';
        marcamharnes.style.boxShadow = '';
        marcaduyamis.style.boxShadow = '';
        linea.style.backgroundColor = '';
    });
});