import { toggleProductSelection } from "actions/compareProductsActions";
import React from "react";
import { useDispatch } from "react-redux";
import { IComparisonProduct } from "types/compareProducts";

import { Name, Price, Img, Container, Close } from "./styles";

const ProductHeading: React.FC<{ product: IComparisonProduct }> = ({
  product,
}) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Close onClick={() => dispatch(toggleProductSelection(product.sku))}>
        <svg width="22" height="22" viewBox="0 0 1024 1024">
          <path d="M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z"></path>
        </svg>
      </Close>
      <Img src={product.productImage} />
      <Name>{product.name}</Name>
      <Price>{product.grossPrice}</Price>
      <div>per stuk / excl. btw</div>
    </Container>
  );
};

export default ProductHeading;
