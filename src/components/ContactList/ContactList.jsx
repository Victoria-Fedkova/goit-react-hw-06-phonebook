import { Table, TableHead } from './ContatcList.styled';
import ContactListRow from './ContactListRow/';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  if (filter !== '') {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  } else {
    return contacts;
  }
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return visibleContacts.length > 0 ? (
    <div>
      <Table>
        <thead>
          <tr>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Actions</TableHead>
          </tr>
        </thead>
        <tbody>
          {visibleContacts.map(({ id, name, number }) => (
            <ContactListRow key={id} id={id} name={name} number={number} />
          ))}
        </tbody>
      </Table>
    </div>
  ) : (
    <p>It's empty. You don't have any contacts.</p>
  );
};

export default ContactList;
