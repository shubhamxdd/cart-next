import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

// todo form handling using react hook form TODO

const SignupForm = () => {
  return (
    <>
      <h1 className="text-2xl mb-6 text-center dark:text-white">
        Create a new account
      </h1>

      <div className="border-[1px] border-zinc-400 px-10 py-5 rounded-lg shadow-lg max-w-md mx-auto dark:bg-gray-800 dark:border-gray-700">
        <form>
          <div className="mb-4">
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </Label>
            <Input
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Username
            </Label>
            <Input
              id="username"
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
          <Button type="submit" variant={"submit"}>
            Create
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
