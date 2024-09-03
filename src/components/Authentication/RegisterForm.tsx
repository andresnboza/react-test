import { useState } from "react";
import Button from "../Inputs/Button";
import PasswordInput from "../Inputs/PasswordInput";
import UsernameInput from "../Inputs/UsernameInput";
import Toast from "../Toast";
import { register } from "../../utils/auth";
import TextInput from "../Inputs/TextInput";
import { useTheme } from "../../contexts/ThemeContext";
import "../../App.css";


type IProps = {
  onSubmit: () => void;
};

const RegisterForm = (props: IProps) => {
  const { onSubmit } = props;

  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  const { theme } = useTheme();

  const handleSubmit = () => {
    // This is only for test purpose but the validation should be different for production
    if (
      username.length &&
      password.length &&
      firstName.length &&
      lastName.length
    ) {
      setLoading(true); // Start loading

      register(username, password, firstName, lastName).then(
        (isAuthenticated) => {
          setLoading(false); // Stop loading
          if (isAuthenticated) {
            onSubmit();
          } else {
            setToastMessage("Invalid credentials");
            setShowToast(true);
          }
        }
      );
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
        <TextInput
          label="First Name"
          loadingState={loading}
          onChange={(value) => setFirstName(value)}
          placeholder={"Enter your First Name ..."}
          theme={theme}
        />
        <TextInput
          label="Last Name"
          loadingState={loading}
          onChange={(value) => setLastName(value)}
          placeholder={"Enter your Last Name ..."}
          theme={theme}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          label="Register"
          loadingState={loading}
        />
        <Toast
          message={toastMessage}
          show={showToast}
          onClose={() => setShowToast(false)}
        />
      </div>
    </form>
  );
};

export default RegisterForm;
