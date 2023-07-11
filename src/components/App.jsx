import React, { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import {Section} from './Section'
import initialContactsData from '../contacts.json';

export const App = () => {
  const [contacts, setContacts] = useState(
  () => {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'))
    if (localStorageContacts && localStorageContacts.length > 0) {
      return localStorageContacts
    } else {
      return initialContactsData
    }
  }
);
  const [filter, setFilter] = useState('')


  const handleAddContact = data => {
    const isExistingContact = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isExistingContact) {
      return alert(`${data.name} is already in contact`);
    }
    setContacts([data, ...contacts]);
  }

  const handleRemoveContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  const handleFilterByName = event => {
    setFilter(event.target.value.toLowerCase());
  }

  useEffect (() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);


  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <Section title="Phonebook">
        <ContactForm onAddContact={handleAddContact}/>
      </Section>
      <Section title="Contacts">
        <Filter onFilterChange={handleFilterByName} filter={filter}/>
        <ContactList onRemoveContact={handleRemoveContact} contacts={filteredContacts} />
      </Section>
    </>
  )
}


