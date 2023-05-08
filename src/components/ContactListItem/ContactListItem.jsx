import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactItem = ({ data, onDeleteContact }) => {
  return (
    <>
      {data.map(({ id, name, number }) => (
        <li className={css.contact__item} key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            className={css.contact__btn}
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

ContactItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
