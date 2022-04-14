import ImageGalleryItem from "./ImageGalleryItem";
import Button from './Button';
import PropTypes from 'prop-types';

export default function ImageGallery({ gallery, page, totalItems, loadMore } ) {
    const rest = (totalItems - page * 12);
    return (
        <>
        <ul className="ImageGallery">
            {gallery.map(item => (
                <ImageGalleryItem key={item.id} item={item}/>
            ))}
        </ul>
            {rest > 0 && <Button loadMore={loadMore}/>}
        </>
    )
}
ImageGallery.propTypes = {
    gallery: PropTypes.array
}