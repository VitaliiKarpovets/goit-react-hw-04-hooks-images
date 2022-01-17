import { useEffect } from 'react';
import { Overlay, ModalStyled } from './Modal.styled';
import propTypes from 'prop-types';

export default function Modal({ children, closeModal }) {
  useEffect(() => {
    window.addEventListener('keydown', onPressKey);
    return () => window.removeEventListener('keydown', onPressKey);
  }, []);

  const onClickOverlay = ({ target, currentTarget }) => {
    if (target === currentTarget) closeModal();
  };

  const onPressKey = event => {
    if (event.code === 'Escape') closeModal();
  };
  
  return (
    <Overlay onClick={onClickOverlay}>
      <ModalStyled>{children}</ModalStyled>
    </Overlay>
  );
}

Modal.propTypes = {
  closeModal: propTypes.func.isRequired,
};


// export default class Modal extends Component {
//   static propTypes = {
//     closeModal: propTypes.func.isRequired,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.onPressKey);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onPressKey);
//   }

//   onClickOverlay = ({ target, currentTarget }) => {
//     if (target === currentTarget) this.props.closeModal();
//   };

//   onPressKey = event => {
//     if (event.code === 'Escape') this.props.closeModal();
//   };

//   render() {
//     return (
//       <Overlay onClick={this.onClickOverlay}>
//         <ModalStyled>{this.props.children}</ModalStyled>
//       </Overlay>
//     );
//   }
// }