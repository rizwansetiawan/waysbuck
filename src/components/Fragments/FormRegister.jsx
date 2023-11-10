import React from "react";
import Input from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form className="flex flex-col">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="text" placeholder="Full Name" />
      <Button>Register</Button>
    </form>
  );
};

export default FormRegister;
