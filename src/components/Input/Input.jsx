import "./styles.css";

function Input({ name, type, id, label, placeholder }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input name={name} type={type} id={id} placeholder={placeholder} />
    </div>
  );
}

export default Input;
