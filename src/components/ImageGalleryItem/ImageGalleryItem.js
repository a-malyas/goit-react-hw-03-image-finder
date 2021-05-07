import React from 'react';

const ImageGalleryItem = ({ src, alt, largeImageUrl }) => (
    <li className="ImageGalleryItem">
        <img src={src} alt={alt} data-largeimageurl={largeImageUrl} className="ImageGalleryItem-image" />
    </li>
);

export default ImageGalleryItem;