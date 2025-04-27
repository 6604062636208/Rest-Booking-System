import React from "react";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";

const Buttons = ({ text, isOngoing }) => {
  return (
    <Button disabled={isOngoing} className="capitalize mt-2">
      {isOngoing ? (
        <>
          <LoaderCircle className="animate-spin" />
          <span>Please wait...</span>
        </>
      ) : (
        <p>{text}</p>
      )}
    </Button>
  );
};

export default Buttons;
