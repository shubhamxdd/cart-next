"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setSubmitting(true);
      if (!data.email || !data.password) {
        toast.error("Please fill all fields");
        return;
      }
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      console.log("LoginForm", { res });

      if (!res?.error) {
        // todo uncomment
        // router.push("/product");
        router.push("/");
        toast.success("Logged in successfully");
        router.refresh();
      } else {
        toast.error(res.error);
      }
      setSubmitting(false);
    } catch (error) {
      toast.error("Error logging in");
      console.log(error);
      setSubmitting(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <h1 className="text-2xl mb-6 text-center dark:text-white">
        Login to your account
      </h1>

      <div className="border-[1px] border-zinc-400 px-10 py-5 rounded-lg shadow-lg max-w-md mx-auto dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </Label>
            <Input
              {...register("email", {
                required: "Email is required",
                minLength: {
                  value: 1,
                  message: "Minimum length is 1",
                },
              })}
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.email && (
              <p className="text-red-400">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-6">
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </Label>
            <Input
              type="password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 1,
                  message: "Minimum length is 1",
                },
              })}
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.password && (
              <p className="text-red-400">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-4 -mt-2">
            <p>
              New here ?
              <Button variant={"link"} asChild className="-mx-1">
                <Link href={"/signup"}>Signup</Link>
              </Button>
            </p>
          </div>
          <Button type="submit" variant={"submit"} disabled={submitting}>
            Login
          </Button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
