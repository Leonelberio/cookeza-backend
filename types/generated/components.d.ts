import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductsProducts extends Schema.Component {
  collectionName: 'components_products_products';
  info: {
    displayName: 'products';
    icon: 'archive';
    description: '';
  };
  attributes: {
    name: Attribute.Relation<
      'products.products',
      'oneToOne',
      'api::product.product'
    >;
    price: Attribute.Relation<
      'products.products',
      'oneToOne',
      'api::price.price'
    >;
    quantity: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'products.products': ProductsProducts;
    }
  }
}
