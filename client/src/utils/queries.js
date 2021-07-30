//change queries from products to events based on events model that CRS wrote
//need to think through checkout/categories and how to convert/adapt or delete
//user query and model should be fine

//queries are the GET (Read only fetch)

import { gql } from "@apollo/client";

export const QUERY_EVENTS = gql`
  {
    events {
      name
    }
  }
`;

// _id
// name
// date
// description
// locationName
// link
// category
// locationAddress
// imageLink

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

//dont need from here down

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;
