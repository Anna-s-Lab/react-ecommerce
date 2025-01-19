import Form from "@/components/common/Form";
import { loginFormControls } from "@/config";
import { login } from "@/store/auth-slice";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const initialState = { email: "", password: "" };

  const [formData, setFormData] = useState(initialState);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login(formData)).then((data) => {
      console.log(data);
      if (data?.payload.success) {
        toast({
          title: "Success",
          description: data?.payload.message,
        });
        navigate("/auth/login");
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  };
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Welcome
        </h1>
        <p className="mt-2">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="font-medium text-primary hover: underline ml-1"
          >
            Register
          </Link>
        </p>
      </div>
      <Form
        formControls={loginFormControls}
        buttonText="Create account"
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Login;
