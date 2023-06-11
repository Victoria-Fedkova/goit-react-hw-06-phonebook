import { useDispatch } from 'react-redux';
import { DelBtn, TableD, TableRow } from './ContactListRow.styled';
import { ReactComponent as Logo } from './Delete-button.svg';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';

const ContactListRow = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <TableRow>
      <TableD>{name}</TableD>
      <TableD>{number}</TableD>
      <TableD>
        <DelBtn type="button" onClick={handleDelete}>
          <Logo />
        </DelBtn>
      </TableD>
    </TableRow>
  );
};

ContactListRow.propeTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListRow;
