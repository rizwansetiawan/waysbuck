import React from "react";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";
const Login = () => {
  return (
    <AuthLayouts title="LOGIN" box="h-[325px]" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default Login;
