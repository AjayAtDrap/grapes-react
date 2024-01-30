import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./component/Signup";
import Edit from "./component/Edit";
import Dash from "./component/Dash";
import Grapes from "./component/Grapes";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Grapes />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/dash",
    element: <Dash />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
