import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: clamp(200px, 80%, 300px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px 0;
  border: 1px solid black;
`;

export const ProductImage = styled.img`

`;

export const ProductName = styled.p`

`;

export const ProductPrice = styled.p`

`;

export const NegativeButton = styled.button`
  height: 25px;
  width: 25px;
`;

export const QtyInput = styled.input.attrs({ type: 'text' })`

`;

export const QtyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 0 20px;
`;

export const PositiveButton = styled.button`
  height: 25px;
  width: 25px;
`;
