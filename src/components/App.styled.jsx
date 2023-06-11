import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: rgba(179, 178, 176, 0.7);
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 2rem;
  margin-right: auto;
  margin-left: auto;
  color: white;

  @media screen and (min-width: 576px) {
    max-width: 540px;
  }

  @media screen and (min-width: 768px) {
    max-width: 720px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Heading = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;

  &::after {
    content: '';
    display: block;
    width: 100%;
    border: 1px solid #f5f5f5;
    margin-top: 1rem;
  }
`;
