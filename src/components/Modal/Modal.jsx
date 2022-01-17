import React, { Component } from 'react';
import { Overlay, ModalStyled } from './Modal.styled';
import propTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    closeModal: propTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onPressKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onPressKey);
  }

  onClickOverlay = ({ target, currentTarget }) => {
    if (target === currentTarget) this.props.closeModal();
  };

  onPressKey = event => {
    if (event.code === 'Escape') this.props.closeModal();
  };

  render() {
    return (
      <Overlay onClick={this.onClickOverlay}>
        <ModalStyled>{this.props.children}</ModalStyled>
      </Overlay>
    );
  }
}