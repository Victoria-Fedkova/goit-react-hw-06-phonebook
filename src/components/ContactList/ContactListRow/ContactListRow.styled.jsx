import styled from 'styled-components';

export const TableRow = styled.tr`
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
`;

export const TableD = styled.td`
  padding: 0.5rem;
  font-weight: 400;
`;

export const DelBtn = styled.button`
  border: none;
  background-color: transparent;
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  & svg {
    fill: #007bff;
  }
`;
