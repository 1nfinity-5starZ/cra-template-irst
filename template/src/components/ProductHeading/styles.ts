import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  margin: 0 auto;
  height: 100%;
`;

export const Close = styled.button`
  all: unset;
  cursor: pointer;
  margin: 0 0 auto auto;

  svg {
    fill: ${({ theme }) => theme.light.primary};
  }
`;

export const Img = styled.img`
  margin: 0 auto 1em;
`;

export const Name = styled.h4`
  color: ${({ theme }) => theme.light.primary};
  text-align: justify;
  margin-bottom: 1em;
`;

export const Price = styled.h2`
  text-align: left;
`;
