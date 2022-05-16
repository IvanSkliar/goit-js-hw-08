
import { galleryItems } from './gallery-items';


console.log(galleryItems);


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imgContainer = document.querySelector('.gallery');



const cardsMarkup = createImgCards(galleryItems);  
imgContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createImgCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `
    }).join('');
}


const gallery = new SimpleLightbox('.gallery a');

gallery.options.captionsData = "alt";
gallery.options.captionDelay = 250;
