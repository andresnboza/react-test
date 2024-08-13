type IPasswordInput = {
  onChange: (value: string) => void;
  loadingState: boolean;
};

const PasswordInput = (props: IPasswordInput) => {
  const { onChange, loadingState } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div className="input-group mb-3 p-0">
      <span className="input-group-text" id="basic-addon2">
        🔒
      </span>
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        aria-label="Password"
        disabled={loadingState}
        aria-describedby="basic-addon2"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default PasswordInput;
