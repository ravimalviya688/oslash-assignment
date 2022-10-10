import styles from "./index.module.css";
function Button({ text, icon, extraClass, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`${styles.btn} ${styles[extraClass]}`}
    >
      {text}
      <img src={icon} alt={`${text} icon`} />
    </button>
  );
}
export default Button;
