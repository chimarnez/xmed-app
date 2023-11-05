import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1>Error</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
