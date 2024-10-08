type IButtonProps = {
  onClick?: () => void;
  label: string;
  type: string;
  loadingState: boolean;
};

const Button = (props: IButtonProps) => {
  const { onClick, label, loadingState, type } = props;

  const handleClick = () => {
    onClick?.();
  };

  if (type == "info") {
    return (
      <button
        onClick={handleClick}
        type="button"
        disabled={loadingState}
        className={`btn btn-${loadingState ? "secondary" : "info"} `}
      >
        {loadingState ? "Loading ..." : label}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      disabled={loadingState}
      className={`btn btn-block btn-${loadingState ? "secondary" : "primary"} `}
    >
      {loadingState ? "Loading ..." : label}
    </button>
  );
};

export default Button;
