import { ItemContainer, Imageitem } from './ImageGalleryItem.styled';
import propTypes from 'prop-types';

export default function ImageGalleryItem({
  url,
  tags,
  largeImageURL,
  onClickToModal
}) {
  return (
    <ItemContainer>
      <Imageitem
        src={url}
        alt={tags}
        data-source={largeImageURL}
        onClick={() => onClickToModal({ src: largeImageURL, alt: tags })}      />
    </ItemContainer>
  );
}

ImageGalleryItem.propTypes = {
  url: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  largeImageURL: propTypes.string.isRequired,
  onClickToModal: propTypes.func.isRequired,
};
