const Form = (props) => {
  const { htmlFor, children, type, placeholder, name, value } = props;
  return (
    <div className="mb-6">
      <label
        htmlFor={htmlFor}
        className="block text-slate-700 text-sm font-bold mb-2"
      >
        {children}
      </label>

      <input
        type={type}
        className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
      />
    </div>
  );
};

export default Form;
