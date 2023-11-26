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
// import UserEditPage from "./pages/user-edit";
import SettingsPage from "./pages/settings";
import BlogPage from "./pages/blog";
import { loginAction } from "./services/login";
import { loader as patientLoader } from "./services/patient";
import { loader as userLoader } from "./services/user";
import { loader as recordsLoader, getDoctorRecords } from "./services/records";
import { loader as doctorsLoader, getDoctorProfile } from "./services/doctor";
import AppIndexPage from "./pages/app-index";
import DoctorsDetailPage from "./pages/doctors-detail";
import AppRedirect from "./pages/redirect";
import DoctorsRecordsPage from "./pages/doctors-records";
import DoctorsPatientsPage from "./pages/doctors-patients";
import * as routes from "./constants/route-names";
import CreatePatientPage from "./pages/create-patient";
import EditRecord from "./components/edit-record";
import RootPage from "./pages/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
        action: loginAction,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "/app",
    element: <App />,
    children: [
      { index: true, element: <AppIndexPage /> },
      {
        path: routes.DOCTORS,
        loader: doctorsLoader,
        element: <DoctorsPage />,
      },
      {
        path: routes.RECORDS,
        loader: getDoctorRecords,
        element: <DoctorsRecordsPage />,
      },
      {
        path: `${routes.RECORDS}/:id`,
        element: <RecordDetails />,
      },
      {
        path: `${routes.RECORDS}/edit`,
        element: <EditRecord />,
      },
      {
        path: routes.PATIENTS,
        element: <DoctorsPatientsPage />,
      },
      {
        path: `${routes.DOCTORS}/:id`,
        loader: getDoctorProfile,
        element: <DoctorsDetailPage />,
      },
      {
        path: routes.MEDICAL_INFORMATION,
        loader: patientLoader,
        element: <PatientsPage />,
      },
      {
        path: `${routes.MEDICAL_INFORMATION}/new`,
        element: <CreatePatientPage />,
      },
      {
        path: routes.MEDICAL_HISTORY,
        loader: recordsLoader,
        element: <RecordsPage />,
      },
      {
        path: `${routes.MEDICAL_HISTORY}/:id`,
        element: <RecordDetails />,
      },
      {
        path: routes.USERS,
        loader: userLoader,
        element: <UserPage />,
      },
      {
        path: routes.SETTINGS,
        element: <SettingsPage />,
      },
      {
        path: routes.BLOG,
        element: <BlogPage />,
      },
      {
        path: routes.REDIRECT,
        element: <AppRedirect />,
      },
    ],
  },
]);

export default router;
