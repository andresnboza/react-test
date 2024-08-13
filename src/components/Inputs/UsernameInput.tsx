type IUsernameInput = {
  onChange: (value: string) => void;
  loadingState: boolean;
};

const UsernameInput = (props: IUsernameInput) => {
  const { onChange, loadingState } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div className="input-group mb-3 p-0">
      <span className="input-group-text" id="basic-addon1">
        @
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        disabled={loadingState}
        aria-describedby="basic-addon1"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default UsernameInput;
