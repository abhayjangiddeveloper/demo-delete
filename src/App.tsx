import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";

function App() {
  const DashBoard = () => {
    return (
      <div>
        <Home />
        <Outlet />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
