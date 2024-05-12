import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/Home/Home";
import App from "@/App";
import CarsPage from "@/pages/Cars/Cars";
import ContactPage from "@/pages/Contact/Contact";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy/PrivacyPolicy";
import AuthForm from "@/components/Forms/Auth/AuthForm";
import AboutUsPage from "@/pages/AboutUs/AboutUs";
import ProfilePage from "@/pages/Profile/Profile";
import UserDetailsSection from "@/pages/Profile/Sections/UserDetails/UserDetails";
import BookedCarsSection from "@/pages/Profile/Sections/BookedCars/BookedCars";
import RecommendationsSection from "@/pages/Profile/Sections/Recommendations/Recommendations";
import ActionsSection from "@/pages/Profile/Sections/Actions/Actions";
import FavoriteCarsPage from "@/pages/FavoriteCars/FavoriteCars";

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
        element: <AuthForm authType="signIn" />,
      },
      {
        path: "/sign-up",
        element: <AuthForm authType="signUp" />,
      },
      {
        path: "/favorite-cars",
        element: <FavoriteCarsPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
        children: [
          {
            path: "/profile/user-details",
            element: <UserDetailsSection />,
          },
          {
            path: "/profile/booked-cars",
            element: <BookedCarsSection />,
          },
          {
            path: "/profile/recommendations",
            element: <RecommendationsSection />,
          },
          {
            path: "/profile/actions",
            element: <ActionsSection />,
          },
        ],
      },
    ],
  },
]);
