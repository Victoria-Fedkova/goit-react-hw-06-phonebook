import styled from 'styled-components';

export const Form = styled.div`
  width: 320px;
  max-width: 80%;
  margin: auto;
  display: flex;
  align-items: end;
  gap: 10px;
`;

export const FormGroup = styled.label`
  display: block;
  text-align: left;
`;

export const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  margin-top: 0.5rem;

  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus,
  &:hover {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
export const AddBtn = styled.button`
  display: block;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  color: #007bff;
  background-color: white;
  border-color: #007bff;
  font-weight: 400;
  text-align: center;

  &:hover {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }
`;
