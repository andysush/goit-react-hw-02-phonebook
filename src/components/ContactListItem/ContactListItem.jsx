export const ContactItem = ({ data, onDeleteContact }) => {
  return (
    <>
      {data.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button
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
