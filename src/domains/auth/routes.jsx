// src/domains/auth/routes.js

import Login from "./pages/Login";
import Register from "./pages/Register";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
// import VerifyEmail from "./pages/VerifyEmail";

const authRoute = [
    {
        path: "login",
        element: <Login />,
        handle: { breadcrumb: "Login" }
    },
    {
        path: "register",
        element: <Register />,
        handle: { breadcrumb: "Register" }
    },
    // {
    //   path: "forgot-password",
    //   element: <ForgotPassword />,
    //   handle: { breadcrumb: "Forgot Password" }
    // },
    // {
    //   path: "reset-password/:token",
    //   element: <ResetPassword />
    // },
    // {
    //   path: "verify-email",
    //   element: <VerifyEmail />
    // }
];

export default authRoute;