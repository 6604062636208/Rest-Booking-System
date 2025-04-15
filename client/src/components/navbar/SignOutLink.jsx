"use client";
import React from "react";
import { SignOutButton } from "@clerk/clerk-react";
import { toast } from "sonner";

const SignOutLink = () => {
  return (
    <SignOutButton redirectUrl="/">
      <button
        onClick={() => {
          console.log("Logout successfully");
          toast("Test Toast", {
            description: "You have been signed out.",
            duration: 10000,
          });
        }}
      >
        Logout
      </button>
    </SignOutButton>
  );
};

export default SignOutLink;
