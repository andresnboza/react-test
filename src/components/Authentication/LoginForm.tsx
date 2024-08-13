import { useState } from "react";
import Button from "../Inputs/Button";
import PasswordInput from "../Inputs/PasswordInput";
import UsernameInput from "../Inputs/UsernameInput";
import Toast from "../Toast";
import { login } from "../../utils/auth";

type IProps = {
  onSubmit: () => void;
};

const LoginForm = (props: IProps) => {
  const { onSubmit } = props;

  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    // This is only for test purpose but the validation should be different for production
    if (username.length && password.length) {
      setLoading(true); // Start loading

      login(username, password).then((isAuthenticated) => {
        setLoading(false); // Stop loading
        if (isAuthenticated) {
          onSubmit();
        } else {
          setToastMessage("Invalid credentials");
          setShowToast(true);
        }
      });
    } else {
      setLoading(true);
      // await 2 seconds
      setTimeout(() => {
        setLoading(false);
        setShowToast(true);
        setToastMessage("Invalid credentials");
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <UsernameInput
          loadingState={loading}
          onChange={(value) => setUsername(value)}
        />
        <PasswordInput
          loadingState={loading}
          onChange={(value) => setPassword(value)}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          label="Login"
          loadingState={loading}
        />
        
        {/* Toast for showing feedback */}
        <Toast
          message={toastMessage}
          show={showToast}
          onClose={() => setShowToast(false)}
        />
      </div>
    </form>
  );
};

export default LoginForm;
