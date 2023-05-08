import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

export const Filter = ({ name, onChange }) => (
  <label className={css.search__form}>
    Find
    <input
      className={css.search__input}
      type="text"
      value={name}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
