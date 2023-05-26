import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound } from './views';
import { Login, Register } from './components';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children: [
    //   {
    //     path: '/dashboard',
    //     element: <Navigate to="/" />
    //   },
    //   {
    //     path: "/",
    //     element: <Dashboard />,
    //   },
    //   {
    //     path: "/surveys",
    //     element: <Surveys />,
    //   },
    //   {
    //     path: "/surveys/create",
    //     element: <SurveyView />,
    //   },
    //   {
    //     path: "/surveys/:id",
    //     element: <SurveyView />,
    //   },
    // ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
  // {
  //   path: "/",
  //   element: <GuestLayout />,
  //   children: [
  //     {
  //       path: "/login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "/signup",
  //       element: <Signup />,
  //     },
  //   ],
  // },
  // {
  //   path: "/survey/public/:slug",
  //   element: <SurveyPublicView />,
  // },
]);

export default router;