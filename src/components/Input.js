import "../index";

const Input = ({
  id,
  type,
  value,
  onChange,
  onBlur,
  className,
}) => {
  return (
    <input
      id={id}
      placeholder="Ingrese aquí su texto"
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={className}
    />
  );
};

export default Input;
