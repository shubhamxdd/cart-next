import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";
export default async function Product() {
  const session = await getServerSession();
  return (
    <>
      <h1 className="text-2xl text-center mt-2">HOMEPAGE</h1>
      <Button variant={"default"} asChild><Link href={"/product"}>Go to products page</Link></Button>
      {session ? (
        <div>
          you are currently logged in
          <h1>Welcome {session.user?.name}</h1>
          <p>{session.user?.email}</p>
        </div>
      ) : (
        <div>
          <h1>you are not logged in</h1>
        </div>
      )}
    </>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Home | E-Commerce",
    template: "%s | E-Commerce",
  },
  description: "",
};
