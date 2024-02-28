import { Metadata } from "next";
import SignupForm from "./SignupForm";

const SignupPage = () => {
  return (
    <>
      <SignupForm />
    </>
  );
};

export default SignupPage;

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account",
};
