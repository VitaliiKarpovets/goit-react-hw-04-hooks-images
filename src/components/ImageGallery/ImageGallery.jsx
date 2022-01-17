import React, { Component } from 'react';
import imagesAPI from '../../service/apiService';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner'
import Modal from '../Modal/Modal';
import propTypes from 'prop-types';
import { ImageList } from './ImageGallery.styled';


export default class ImageGallery extends Component {
  static propTypes = {
    query: propTypes.string.isRequired,
  };

  state = {
    status: 'idle',
    error: null,
    images: [],
    page: 1,
    showModal: false,
    imageURL: null,
  };
  
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState)
    // console.log(this.props.query)
    const prevSearch = prevProps.query;
    const nextSearch = this.props.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;


    if (prevSearch !== nextSearch) {
      this.setState({ page: 1, images: [] });
    }

    if (
      (prevSearch !== nextSearch && nextPage === 1) ||
      prevPage !== nextPage
    ) {
      this.setState({
        status: 'pending',
      });
      imagesAPI(nextSearch, this.state.page)
        .then(resp => {
          this.setState(state => {
            return {
              images: [...state.images, ...resp.hits],
              status: 'resolved',
            };
          });
          window.scrollTo({
            top: document.body.clientHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => {
          this.setState({
            error: error.message,
            status: 'rejected',
            page: 1,
            images: [],
          });
        });
    }
  }

  handleChangePage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  modalImg = ({ src, alt }) => {
    this.setState({
      imageURL: { alt, src },
    });
    this.togleModal();
  };

  render() {
    const { status, error, images, showModal, imageURL } = this.state;

    if (status === 'rejected') {
      return <h1>{error}</h1>;
    }

    return (
      <>
        {images.length !== 0 && (
          <ImageList>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  url={webformatURL}
                  tags={tags}
                  largeImageURL={largeImageURL}
                  onClickToModal={this.modalImg}
                />
              );
            })}
          </ImageList>
        )}
        {status === 'pending' && <Spinner />}
        {status === 'resolved' && <Button onClickButton={this.handleChangePage} />}
        {showModal && (
          <Modal closeModal={this.togleModal}>
            <img src={imageURL.src} alt={imageURL.alt} width={960} />
          </Modal>
        )}
      </>
    );
  }
}
