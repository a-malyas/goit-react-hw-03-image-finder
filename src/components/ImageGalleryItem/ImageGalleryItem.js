import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, largeImageURL, onClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={onClick}>
      <img
        src={src}
        alt={alt}
        className="ImageGalleryItem-image"
        data-largeimageurl={largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  
};

export default ImageGalleryItem;