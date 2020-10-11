// @type
import React from 'react';
import { Card, Grid, Header } from 'semantic-ui-react';
import ProductCard from '../product-card';
import { IProductList } from '../../types/product';
import { ICategory } from '../../types/category';

import './style.css';

type Props = {
  products: IProductList;
  category: ICategory;
};

const ProductCategorySection = ({ products, category }: Props) => (
  <Grid className="product-category-section" container>
    <Header as="h1">{category.label}</Header>
    <Card.Group itemsPerRow={5}>
      {
        products.map((p) => <ProductCard key={p.id} product={p} />)
      }
    </Card.Group>
  </Grid>
);

export default ProductCategorySection;
