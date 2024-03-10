import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/Home/Home";
import App from "@/App";
import CarsPage from "@/pages/Cars/Cars";
import ContactPage from "@/pages/Contact/Contact";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy/PrivacyPolicy";
import AuthForm from "@/components/Forms/Auth/AuthForm";
import AboutUsPage from "@/pages/AboutUs/AboutUs";

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
        element: <AboutUsPage />,
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

