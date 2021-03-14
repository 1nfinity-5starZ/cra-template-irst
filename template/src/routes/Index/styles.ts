import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.light.primary};
`;

export const Container = styled.div`
  max-width: 1200px;
  flex: 1;
  margin: 0 auto;
  padding: 1em;
`;

export const ProductGrid = styled.table`
  width: 100%;
  border-spacing: 0;

  tr:nth-child(2n) {
    background-color: #ddd;
  }

  td:first-child {
    width: 250px;
    border-right: 1px solid #ccc;
  }

  td {
    padding: 1em;
    border: 0;
    margin: 0;
    max-width: 250px;
    border-top: 1px solid #ccc;
  }
`;
