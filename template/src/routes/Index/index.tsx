import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, ProductGrid } from "./styles";

import { fetchComparisonProducts } from "actions/compareProductsActions";
import { IState } from "reducers/root";
import ProductSelector from "components/ProductSelector";
import ProductHeading from "components/ProductHeading";

function App() {
  const dispatch = useDispatch();

  const { products, categories } = useSelector(
    ({ comparison }: IState) => comparison
  );

  // Fetch the product list from the API on first component render
  useEffect(() => {
    dispatch(fetchComparisonProducts());
  }, []);

  const selectedProducts = useCallback(() => {
    return products.filter((product) => product.selected);
  }, [products, categories])();

  return (
    <Container>
      <h1>{selectedProducts.length} produkten vergelijken</h1>
      <ProductGrid>
        <thead>
          <tr>
            <td>
              <ProductSelector />
            </td>
            {selectedProducts.length ? (
              selectedProducts.map((product) => (
                <td
                  key={"head" + product.sku}
                  style={{ height: 1 /* TD height hack */ }}
                >
                  <ProductHeading product={product} />
                </td>
              ))
            ) : (
              <td>No products selected</td>
            )}
          </tr>
        </thead>
        <tbody>
          {/* Show badges first */}
          <tr>
            <td>Badges</td>
            {selectedProducts.map((product) => (
              <td key={product.sku}>
                {product.badges.split("|").map((url, i) => (
                  <img src={url} alt="thumb" key={"img" + product.sku + i} />
                ))}
              </td>
            ))}
          </tr>
          {/* Show rest of attributes first */}
          {categories
            .filter((category) => category !== "badges")
            .map((category) => (
              <tr key={category}>
                <td>{category}</td>
                {selectedProducts.map((product) => (
                  <td>{product[category]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </ProductGrid>
    </Container>
  );
}

export default App;
