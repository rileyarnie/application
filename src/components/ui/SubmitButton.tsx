import React from "react";
import { Button } from "./button";

interface IProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: IProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">Loading ...</div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
