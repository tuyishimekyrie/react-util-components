import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ColorMode from "../features/modes/Components/ColorMode";
import Language from "../features/languages/components/Language";
import RootLayout from "./Layouts/RootLayout";
import Loader from "../features/skeleton/components/Loader";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "mode",
        element: <ColorMode />,
      },
      {
        path: "language",
        element: <Language />,
      },
      {
        path:"/skeleton",
        element:<Loader/>
      }
    ],
  },
]);

export default router;
