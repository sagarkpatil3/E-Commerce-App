
import { createContext, useState, useEffect } from 'react';
import { getProducts } from '../utils/api.utils';
import axios from 'axios';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      if (response.data && response.data.products) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const searchProducts = async (query) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
      if (response.data && response.data.products) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const value = { products, searchProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

