import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { Form } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './SearchForm/SearchForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const Contact = {
      id: nanoid(6),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [Contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const lowerCaseFilter = filter.toLowerCase();

    const findContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(lowerCaseFilter)
    );

    return (
      <>
        <Section title="Phone Book">
          <Form onSubmit={this.formSubmitHandler}></Form>
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={findContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
