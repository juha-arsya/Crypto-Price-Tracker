import Form from "../components/Form";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="flex gap-x-3">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-gray-700">Register</h1>
          <p className="font-medium text-slate-500 mb-8">
            Welcome, Please enter your details
          </p>
          <form action="">
            <Form
              htmlFor="name"
              type="name"
              placeholder="insert your name here..."
              name="name"
            >
              Fullname
            </Form>
            <Form
              htmlFor="email"
              type="email"
              placeholder="example@mail.com"
              name="email"
            >
              Email
            </Form>
            <Form
              htmlFor="password"
              type="password"
              placeholder="*****"
              name="password"
            >
              Password
            </Form>
            <Form
              htmlFor="confirmpass"
              type="password"
              placeholder="*****"
              name="confirmpass"
            >
              Confirm Password
            </Form>
            <Button classname="bg-gray-700 w-full">Register</Button>
          </form>
          <p className="text-sm mt-5 text-center">
            Have an account?{" "}
            <Link className="font-bold text-gray-700" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
