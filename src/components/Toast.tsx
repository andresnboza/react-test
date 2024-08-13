const Toast = ({
  message,
  show,
  onClose,
}: {
  message: string;
  show: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={`toast align-items-center text-bg-primary ${
        show ? "show" : ""
      }`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{ position: "fixed", top: "20px", right: "20px" }}
    >
      <div className="d-flex">
        <div className="toast-body">{message}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default Toast;
