"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <Button onClick={() => signOut()} variant={"link"}>
      Sign out
    </Button>
  );
};

export default LogoutButton;
