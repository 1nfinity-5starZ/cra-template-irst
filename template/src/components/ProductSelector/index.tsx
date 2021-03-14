import { toggleProductSelection } from "actions/compareProductsActions";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "reducers/root";
import { Container, Row, Label, H2 } from "./styles";

const ProductSelector: React.FC = () => {
  const dispatch = useDispatch();

  const { products, categories } = useSelector(
    ({ comparison }: IState) => comparison
  );

  return (
    <Container>
      <H2>Je selectie</H2>
      {products.map((product, i) => (
        <Row key={i}>
          <Label htmlFor={`product-${i}`}>
            <input
              style={{ marginRight: 8 }}
              id={`product-${i}`}
              type="checkbox"
              onChange={(e) => dispatch(toggleProductSelection(product.sku))}
              checked={product.selected}
            />
            {product.name}
          </Label>
        </Row>
      ))}
    </Container>
  );
};

export default ProductSelector;
