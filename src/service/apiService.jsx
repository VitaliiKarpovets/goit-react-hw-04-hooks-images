const KEY = '24153466-6db5b8c6d878fe3d168a5052f';
const BASE_URL = 'https://pixabay.com/api/';

export default async function pixabayApi(query, page = 1) {
  try {
    const response = await fetch(
      `${BASE_URL}?key=${KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`,
    );

    if (!response.ok)
      throw Error('Oooops, anything did not work. Try again :)');

    const parsedResponse = await response.json();

    if (!parsedResponse.totalHits)
      throw Error(
        `Incorrect request! Please, try again.`,
      );

    return parsedResponse;
  } catch (error) {
    throw error;
  }
}
