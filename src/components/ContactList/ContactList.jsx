import PropTypes from 'prop-types';
import {List, Item, Delete, ContactName, ContactNumber} from './ContactList.styled'

export const ContactList = ({ contacts, onRemoveContact }) => {
	return (
    <List >
      {contacts.map(contact => (
        <Item key={contact.id}>
          <ContactName>
            <b>{contact.name}:</b><ContactNumber>{contact.number}</ContactNumber>
          </ContactName>
          <Delete type="button" onClick={() => onRemoveContact(contact.id)}>
            Delete
          </Delete>
        </Item>
      ))}
    </List>
	)
}

ContactList.prototype = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		})
	).isRequired,
	onRemoveContact: PropTypes.func.isRequired,
};
