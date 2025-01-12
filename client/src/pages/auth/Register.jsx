import Form from "@/components/common/Form";
import { registerFormControls } from "@/config";
import { register } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    userName: "",
    email: "",
    password: "",
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(register).then(() => navigate("/auth/login"));
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
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Register;
