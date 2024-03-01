"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <Button onClick={() => signOut()} variant={"destructive"}>
      Sign out
    </Button>
  );
};

export default LogoutButton;
