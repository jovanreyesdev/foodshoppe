// @type
import React from 'react';
import {
  Card, Image, Header,
  Button,
} from 'semantic-ui-react';
import { IProduct } from '../../types/product';

import './style.css';

type Props = {
  product: IProduct
}

const ProductCard = ({ product }: Props) => (
  <Card className="product-card">
    <Image src={`/images/foods/${product.name}.jpg`} size="mini" wrapped ui={false} />
    <Card.Content>
      <Card.Header>
        <Header as="h3">{product.label}</Header>
        <Button circular icon="heart" size="mini" floated="right" />
      </Card.Header>
      <Card.Meta>
        <Header sub>Price</Header>
        <span>$10.99</span>
        <Button
          floated="right"
          content="Add"
          icon="cart arrow down"
          labelPosition="right"
          size="tiny"
          color="teal"
          compact
        />
      </Card.Meta>
    </Card.Content>
  </Card>
);

export default ProductCard;
