import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateUserForm from "./forms/CreateUserForm";

const CreateUser = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Create User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create User</DialogTitle>
          <DialogDescription>
            Fill in the fields to create a user
          </DialogDescription>
          <CreateUserForm setOpen={setOpen} />
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
      </DialogContent>
    </Dialog>
  );
};
export default CreateUser;
