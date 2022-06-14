import "../index";

const InputLabel = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} style={{ display: "block" }}>
      {text}
    </label>
  );
};

export default InputLabel;
