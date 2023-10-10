## MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

- creo un array con le immagini che mi servono
- prendo dal Dom l'elemento 'slide'
- inizializzo un ciclo for
  - creo una variabile con l'immagine corrente
  - creo una variabile dove vado a concatenare una stringa con l'immagine corrente con il template literal
  - sostituisco la variabile con l'elemento del Dom preso in precedenza
- fuori dal ciclo for prendo dal dom l'elemento con classe 'image'
- aggiungo una classe alla prima immagine 
