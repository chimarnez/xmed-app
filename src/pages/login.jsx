import { Form } from "react-router-dom";

const LoginPage = () => {
  // const navigation = useNavigate();
  return (
    <div>
      <Form method="post">
        <label>
          EMAIL
          <input name="email" />
        </label>
        <label>
          PASSWORD
          <input name="password" type="password" />
        </label>
        <button
        // onClick={() => {
        //   navigation("/app");
        // }}
        >
          Log In
        </button>
      </Form>
    </div>
  );
};

export default LoginPage;
