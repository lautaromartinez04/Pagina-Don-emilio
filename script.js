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
    mainTitle.style.color ='#193b6e';
    footer.style.backgroundColor = '#193b6e';
    donemilio.style.boxShadow = '#193b6e 0px 0px 10px 0px';
    marcadonemilio.style.boxShadow = '#193b6e 0px 0px 10px 0px';
    linea.style.backgroundColor = '#193b6e';
});

duyamis.addEventListener('mouseover', () => {
    mainTitle.style.color = '#ee2112';
    footer.style.backgroundColor = '#ee2112';
    duyamis.style.boxShadow = '#ee2112 0px 0px 10px 0px';
    marcaduyamis.style.boxShadow = '#ee2112 0px 0px 10px 0px';
    linea.style.backgroundColor = '#ee2112';
});

mharnes.addEventListener('mouseover', () => {
    mainTitle.style.color = '#2369cc';
    footer.style.backgroundColor = '#2369cc';
    mharnes.style.boxShadow = '#2369cc 0px 0px 10px 0px';
    marcamharnes.style.boxShadow = '#2369cc 0px 0px 10px 0px';
    linea.style.backgroundColor = '#2369cc';
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