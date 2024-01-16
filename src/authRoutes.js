import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

import { DocumentIcon, RocketIcon } from "./components/Icons/Icons";

var authRoutes = [
  {
    id: "auth0",
    name: "Auth",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        id: "auth1",
        path: "/signin",
        name: "Sign In",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        id: "auth2",
        path: "/signup",
        name: "Sign Up",
        icon: <RocketIcon color="inherit" />,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default authRoutes;
