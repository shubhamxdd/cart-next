"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

type Inputs = {
  email: string;
  name: string;
  password: string;
};

const SignupForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmitting(true);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error:", errorData);
      toast.error("Error: " + errorData.message);
    }
    if (res.ok) {
      console.log("Registration successful");
      toast.success("Registration successful");
      router.push("/login");
    }
    console.log("Response", res);
    setSubmitting(false);
  };

  return (
    <>
      <h1 className="text-2xl mb-6 text-center dark:text-white">
        Create a new account
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
              {...register("email", { required: true })}
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Username
            </Label>
            <Input
              {...register("name", { required: true })}
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
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
              {...register("password", { required: true })}
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="mb-4 -mt-2">
            <p>
              Already have account ?
              <Button variant={"link"} asChild className="-mx-1">
                <Link href={"/login"}>Login</Link>
              </Button>
            </p>
          </div>
          <Button type="submit" variant={"submit"} disabled={submitting}>
            Create
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
