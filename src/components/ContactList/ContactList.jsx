import { ContactItem } from 'components/ContactListItem/ContactListItem';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      <ContactItem data={contacts} onDeleteContact={onDeleteContact} />
    </ul>
  );
};
