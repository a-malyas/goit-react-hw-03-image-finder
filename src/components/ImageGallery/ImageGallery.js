import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends React.Component {
    render() {
        const { images, onClick, children } = this.props;
        return (
            <ul className="ImageGallery">
                {images.map((imageObj) => {
                    return (
                        <ImageGalleryItem
                            onClick={onClick}
                            key={imageObj.id}
                            largeImageURL={imageObj.largeImageURL}
                            src={imageObj.webformatURL}
                            alt={imageObj.tags}
                        />
                    );
                })}
                {children}
            </ul>
        );
    }
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;