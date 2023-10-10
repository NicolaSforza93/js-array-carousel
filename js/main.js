// - creo un array con le immagini che mi servono
const images = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp'];
console.log(images);
// - prendo dal Dom l'elemento 'slide'
const slideDomElement = document.querySelector('.slide');
console.log(slideDomElement);
// - inizializzo un ciclo for
for (let i = 0; i < images.length; i++) {
//   - creo una variabile con l'immagine corrente
    const currentSrc = images[i];
    console.log(currentSrc);
//   - creo una variabile dove vado a concatenare una stringa con l'immagine corrente con il template literal
    const htmlString = `
    <div class="image">
     <img src="${currentSrc}">
     </div>
    `;
    console.log(htmlString);
//   - sostituisco la variabile con l'elemento del Dom preso in precedenza
    slideDomElement.innerHTML += htmlString;
}
// - fuori dal ciclo for prendo dal dom l'elemento con classe 'image'
const imageDomElement = document.getElementsByClassName('image');
console.log(imageDomElement);
// - aggiungo una classe alla prima immagine 
const firstImageDomElement = imageDomElement[0];
firstImageDomElement.classList.add('active');
console.log(firstImageDomElement)


const ctrlDomElement = document.querySelector('.ctrl-next');
ctrlDomElement.addEventListener('click', function () {
    
    firstImageDomElement.classList.remove('active');

    const nextImageDomElement = imageDomElement[1];
    nextImageDomElement.classList.add('active');


})











