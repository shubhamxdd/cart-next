import { Metadata } from "next";
import SignupForm from "./SignupForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const SignupPage = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
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
