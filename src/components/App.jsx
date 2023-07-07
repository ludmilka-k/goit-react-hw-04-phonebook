import React, { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import {Section} from './Section'
import initialContactsData from '../contacts.json';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  handleAddContact = data => {
    const isExistingContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isExistingContact) {
      return alert(`${data.name} is already in contact`);
    }
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  }

  handleRemoveContact = contactId => {
    this.setState ({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    })
  }

  handleFilterByName = event => {
    this.setState({
      filter: event.target.value,
    });
  }

  componentDidMount() {
    const stringifyContacts = localStorage.getItem('contacts');
    const localStorageContacts = JSON.parse(stringifyContacts);
    if (localStorageContacts && localStorageContacts.length > 0) {
      this.setState({
        contacts: localStorageContacts,
      });
    } else {
      this.setState({
        contacts: initialContactsData,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.handleAddContact}/>
        </Section>
        <Section title="Contacts">
          <Filter onFilterChange={this.handleFilterByName} filter={this.state.filter}/>
          <ContactList onRemoveContact={this.handleRemoveContact} contacts={filteredContacts} />
        </Section>
      </>
    )
  }
}


