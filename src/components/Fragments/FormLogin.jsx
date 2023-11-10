import React from "react";
import Input from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  return (
    <form className="flex flex-col">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Login</Button>
    </form>
  );
};

export default FormLogin;
