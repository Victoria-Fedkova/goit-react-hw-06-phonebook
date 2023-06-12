import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Container, Heading } from './App.styled';

const App = () => {
  return (
    <Container>
      <Heading>Phonebook</Heading>
      <ContactForm />
      <Heading>Contacts</Heading>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
