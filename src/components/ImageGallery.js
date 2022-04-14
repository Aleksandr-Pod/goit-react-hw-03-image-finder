import ImageGalleryItem from "./ImageGalleryItem";
import Button from './Button';
import PropTypes from 'prop-types';

export default function ImageGallery({ gallery, page } ) {
    const rest = (gallery.totalHits - page * 12);
    return (
        <>
        <ul className="ImageGallery">
            {gallery.hits.map(item => (
                <ImageGalleryItem key={item.id} item={item}/>
            ))}
        </ul>
            {rest > 0 && <Button />}
        </>
    )
}
ImageGallery.propTypes = {
    gallery: PropTypes.array
}