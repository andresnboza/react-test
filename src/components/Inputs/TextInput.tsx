type ITextInput = {
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  loadingState: boolean;
};

const TextInput = (props: ITextInput) => {
  const { onChange, placeholder, label, loadingState } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div className="input-group mb-3 p-0">
      <input
        type="text"
        className="form-control"
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
