import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <div>404 Not Found</div>,
    exact: true,
  },
  {
    path: "/signup",
    element: <Signup />,
    exact: true,
  }
]);

export default router;
