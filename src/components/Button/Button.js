import './Button.css';

function Button({ onClickFunction, children, id, addClassName, datatestid }) {
  return (
    <button
      type='button'
      className={`standard-button ${addClassName}`}
      onClick={onClickFunction}
      id={id}
      data-testid = {datatestid}
    >
      { children }
    </button>
  );
}

export default Button;
