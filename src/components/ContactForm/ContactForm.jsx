import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {Form, Label, InputForm, ButtonAdd} from './ContactForm.styled'
export const ContactForm = ({onAddContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    onAddContact(contact);
    resetForm()
  }

 const resetForm = () => {
    setName('');
   setNumber('');
  };

    return (
      <>
        <Form onSubmit={handleSubmit} >
          <Label >
            <InputForm
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash, and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChangeName}
            /> Name
          </Label>
          <Label >
            <InputForm
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChangeNumber}
            /> Number
          </Label>

          <ButtonAdd type="submit" >
            Add contact
          </ButtonAdd>
        </Form>
      </>
    )

}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
