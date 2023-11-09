import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import SignupPage from "./pages/signup";
import App from "./pages/app";
import DoctorsPage from "./pages/doctors";
import PatientsPage from "./pages/patients";
import RecordsPage from "./pages/records";
import { loginAction } from "./services/login";
import { loader as patientLoader } from "./services/patient";
import { loader as userLoader } from "./services/user";
import { loader as recordsLoader } from "./services/records";
import UserPage from "./pages/user";
import UserEditPage from "./pages/user-edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        action: loginAction,
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "edit-user",
        element: <UserEditPage />,
      },
      {
        path: "create-user",
        element: <UserEditPage />,
      },
    ],
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "doctors",
        element: <DoctorsPage />,
      },
      {
        path: "patients",
        loader: patientLoader,
        element: <PatientsPage />,
      },
      {
        path: "records",
        loader: recordsLoader,
        element: <RecordsPage />,
      },
      {
        path: "users",
        loader: userLoader,
        element: <UserPage />,
      },
    ],
  },
]);

export default router;
