import propTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export default function Button({ onClickButton }) {
  return (
    <ButtonLoadMore type="button" onClick={onClickButton}>
      Load more
    </ButtonLoadMore>
  );
}

Button.propTypes = {
  onClickButton: propTypes.func.isRequired,
};