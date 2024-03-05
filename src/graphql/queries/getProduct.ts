import { gql } from "@apollo/client";

const GetProductList = gql`
  query GetProductList {
    product(id: 1) {
      id
      name
      ...Detail
    }
  }
`;
// dsadsadsad
const GetProductListFra = gql`
  fragment Detail on Product {
    slug
    description
  }
`;
