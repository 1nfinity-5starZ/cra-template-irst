import styled from "styled-components";

export const Container = styled.div`
  max-width: 250px;
`;

export const Row = styled.div`
  margin-bottom: 1em;
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.light.primary};
  margin-bottom: 1em;
`;

export const Label = styled.label`
  cursor: pointer;

  input[type="checkbox"] {
    height: 16px;
    width: 16px;
    cursor: pointer;
  }
`;
