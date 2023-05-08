import React from 'react';

export const Filter = ({ name, onChange }) => (
  <label>
    Find <input type="text" value={name} onChange={onChange} />
  </label>
);
