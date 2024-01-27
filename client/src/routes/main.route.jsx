import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/Home/Home";
import App from "@/App";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  }
]);

