import axios from 'axios';

export const getProducts = () => {
  return axios.get('https://dummyjson.com/products')
    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(error => {
      console.error(error);
      throw error; // Re-throw the error to propagate it
    });
};
