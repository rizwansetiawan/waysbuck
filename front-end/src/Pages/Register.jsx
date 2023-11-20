import React from "react";
import AuthLayouts from "./../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
const Register = () => {
  return (
    <AuthLayouts title="REGISTER" box="h-[390px]" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default Register;
