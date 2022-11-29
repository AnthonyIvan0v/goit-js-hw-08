// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const cardsGallery = createItemGallery(galleryItems);

galleryRef.innerHTML= cardsGallery;

function createItemGallery(element) {
    return element.map(({ preview, original, description }) => {
        return `<li>
                    <a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
                    </a>
                </li>`}).join('');
};


var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionType: 'alt',
  captionDelay: '250',
  overlayOpacity: '0.9',
  showCounter: false
});