import { Metadata } from "next";
import { getServerSession } from "next-auth";
export default async function Product() {
  const session = await getServerSession();
  return (
    <>
      <h1 className="text-2xl text-center mt-2">HOMEPAGE</h1>
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
