// - creo un array con le immagini che mi servono
const images = [
    './img/01.webp', // 0
    './img/02.webp', // 1
    './img/03.webp', // 2
    './img/04.webp', // 3
    './img/05.webp'  // 4
]; // images.length - 1
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

let currentIndex = 0;
// - aggiungo una classe alla prima immagine 
let currentSlide = imageDomElement[currentIndex];
currentSlide.classList.add('active');
console.log(currentSlide);


const ctrlNext = document.querySelector('.ctrl-next');
ctrlNext.addEventListener('click', function () {
    currentSlide.classList.remove('active');
    //currentIndex += 1; //
    if (currentIndex === images.length - 1) { //ultimo elemento dell'array
        currentIndex = 0;
    } else {
        currentIndex++; //si incrementa, va avanti
    }
    currentSlide = imageDomElement[currentIndex];
    currentSlide.classList.add('active');   
     
})

const ctrlPrevious = document.querySelector('.ctrl-previous');
ctrlPrevious.addEventListener('click', function () {
    currentSlide.classList.remove('active');
    // currentIndex += -1;
    if (currentIndex === images.length - 5) { //primo elemento dell'array
         currentIndex = 4;
     } else {
         currentIndex--;
     }
    currentSlide = imageDomElement[currentIndex]; 
    currentSlide.classList.add('active');

})