import { useRef } from 'react';
import { Form, FormGroup, FormInput, AddBtn } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  const filterReset = () => {
    dispatch(setFilter(''));
    inputRef.current.value = '';
  };
  return (
    <Form>
      <FormGroup>
        Find contacts by name
        <FormInput type="text" ref={inputRef} onChange={handleFilterChange} />
      </FormGroup>
      <AddBtn type="button" onClick={filterReset}>
        Clear
      </AddBtn>
    </Form>
  );
};

export default Filter;
