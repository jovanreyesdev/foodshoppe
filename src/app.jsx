// @flow
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCategorySection from './components/product-category-section';

const App = () => {
  const [state, setState] = useState({
    products: [],
    categories: [],
  });

  useEffect(() => {
    const execute = async () => {
      const productsReq = axios.get('/data/products.json');
      const categoriesReq = axios.get('/data/categories.json');

      const [
        productsResponse,
        categoriesResponse,
      ] = await axios.all([productsReq, categoriesReq]);

      setState({
        products: productsResponse.data,
        categories: categoriesResponse.data,
      });
    };

    execute();
  }, []);

  return state.categories.map((c) => {
    const products = state.products.filter((p) => p.category.includes(c.id));
    const randomized = products.sort( () => 0.5 - Math.random());

     return (
      <ProductCategorySection products={randomized} key={c.id} category={c} />
    );
  });
};

export default App;
