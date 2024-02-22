import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/Home/Home";
import App from "@/App";
import AboutPage from "@/pages/About/About";
import CarsPage from "@/pages/Cars/Cars";
import ContactPage from "@/pages/Contact/Contact";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy/PrivacyPolicy";
import AuthForm from "@/components/Forms/Auth/AuthForm";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/cars",
        element: <CarsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/sign-in",
        element: <AuthForm authType="signIn" />
      },
      {
        path: "/sign-up",
        element: <AuthForm authType="signUp" />
      }
    ]
  }
]);
