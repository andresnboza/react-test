type ITextInput = {
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  loadingState: boolean;
  value?: string;
  theme: 'light' | 'dark'; // Add this line
};

import "../../App.css";

const TextInput = (props: ITextInput) => {
  const { onChange, placeholder, label, loadingState, value, theme } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div className={`input-group mb-3 p-0 ${theme}-theme`}>
      <span className={`input-group-text ${theme}-theme`} id="basic-addon1">
        {label}
      </span>
      <input
        type="text"
        className={`form-control ${theme}-theme`}
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
