import { ContactItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import css from './Contactlist.module.css';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contact__list}>
      <ContactItem data={contacts} onDeleteContact={onDeleteContact} />
    </ul>
  );
};

ContactList.propType = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
