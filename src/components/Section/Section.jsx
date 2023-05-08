import css from './Section.module.css';
export const Section = ({ title, children }) => {
  return (
    <>
      {<h2 className={css.section__title}>{title}</h2>}
      {children}
    </>
  );
};
