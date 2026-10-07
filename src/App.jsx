import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import TemporaryPage from "./pages/temporarypage/TemporaryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "/temporary",
    element: <TemporaryPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
