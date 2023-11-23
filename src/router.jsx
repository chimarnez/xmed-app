import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import SignupPage from "./pages/signup";
import App from "./pages/app";
import DoctorsPage from "./pages/doctors";
import PatientsPage from "./pages/patients";
import RecordsPage from "./pages/records";
import RecordDetails from "./pages/record-details";
import UserPage from "./pages/user";
import UserEditPage from "./pages/user-edit";
import SettingsPage from "./pages/settings";
import { loginAction } from "./services/login";
import { loader as patientLoader } from "./services/patient";
import { loader as userLoader } from "./services/user";
import { loader as recordsLoader } from "./services/records";
import { loader as doctorsLoader, getDoctorProfile } from "./services/doctor";
import AppIndexPage from "./pages/app-index";
import DoctorsDetailPage from "./pages/doctors-detail";

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
      { index: true, element: <AppIndexPage /> },
      {
        path: "doctors",
        loader: doctorsLoader,
        element: <DoctorsPage />,
      },
      {
        path: "doctors/:id",
        loader: getDoctorProfile,
        element: <DoctorsDetailPage />,
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
        path: "records/:id",
        element: <RecordDetails />,
      },
      {
        path: "users",
        loader: userLoader,
        element: <UserPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export default router;
