import Form from "@/components/common/Form";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const initialState = {
    userName: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have and account?{" "}
          <Link
            to="/auth/login"
            className="font-medium text-primary hover: underline ml-1"
          >
            Login
          </Link>
        </p>
      </div>
      <Form
        formControls={registerFormControls}
        buttonText="Create account"
        formData={formData}
        setFormData={setFormData}
        onSubmit={() => {}}
      />
    </div>
  );
};

export default Register;
