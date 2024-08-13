type ITextInput = {
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  loadingState: boolean;
  value?: string;
};

const TextInput = (props: ITextInput) => {
  const { onChange, placeholder, label, loadingState, value } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div className="input-group mb-3 p-0">
      <span className="input-group-text" id="basic-addon1">
        {label}
      </span>
      <input
        type="text"
        className="form-control"
        value={value}
        placeholder={placeholder}
        aria-label={label}
        disabled={loadingState}
        aria-describedby="basic-addon1"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default TextInput;
