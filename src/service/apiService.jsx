import PropTypes from "prop-types";

const KEY = '24153466-6db5b8c6d878fe3d168a5052f';
const BASE_URL = 'https://pixabay.com/api/';

export default function fetchImages(query, page) {
  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Incorrect request! Please, try again.'));
  });
}

fetchImages.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

