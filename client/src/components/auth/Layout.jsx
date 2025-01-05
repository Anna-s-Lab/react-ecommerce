import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight">
            E-commerce - React App Using Redux | Tailwind
          </h1>
        </div>
      </div>
      <div
        className="flex
       items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
