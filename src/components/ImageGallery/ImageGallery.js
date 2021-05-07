import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends React.Component {
    render() {
        const { images, children } = this.props;
        return (
            <ul className="ImageGallery">
                {images.map((imageObj) => {
                    return (
                        <ImageGalleryItem
                            key={imageObj.id}
                            largeImageUrl={imageObj.largeImageUrl}
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

export default ImageGallery;