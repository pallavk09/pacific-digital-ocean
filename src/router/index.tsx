import { Suspense, lazy } from "react";
import { Styles } from "../styles/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoute from "../common/ProtectedRoute";
import NoonVsActual from "../pages/NoonVsActual";

const RootLayout = lazy(() => import("../pages/RootLayout"));
const Home = lazy(() => import("../pages/Home"));
// const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/compare", element: <NoonVsActual /> },
    ],
  },
]);
const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <RouterProvider router={myRouter} />
    </Suspense>
  );
};

export default Router;
