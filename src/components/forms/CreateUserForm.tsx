import { FormFieldType } from "@/lib/types";
import { CreateUserFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomFormField from "../CustomFormField";
import { Form } from "../ui/form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../ui/SubmitButton";
import { useState } from "react";
import { BASE_URL, BASIC_AUTH } from "@/lib/constants";

// {
//     "token": "",
//     "payload": {
//         "usrFirstname": "LEWIS",
//         "usrLastname": "HAMILTON",
//         "usrUsername": "EXT-SLH44"
//     }
// }

interface Iprops {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateUserForm = ({ setOpen }: Iprops) => {
  const form = useForm<z.infer<typeof CreateUserFormValidation>>({
    resolver: zodResolver(CreateUserFormValidation),
    defaultValues: {
      usrFirstname: "",
      usrLastname: "",
      usrUsername: "",
    },
  });

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit({
    usrFirstname,
    usrLastname,
    usrUsername,
  }: z.infer<typeof CreateUserFormValidation>) {
    setIsLoading(true);
    const token = localStorage.getItem("token");

    console.log("token", token);

    try {
      await axios.post(
        `${BASE_URL}/create`,
        { token, payload: { usrFirstname, usrLastname, usrUsername } },
        {
          headers: {
            Authorization: BASIC_AUTH,
          },
        }
      );
      setIsLoading(false);
      setOpen(false);
      navigate("/");
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="usrFirstname"
          label="First Name"
          placeholder="First name"
          iconSrc="/icons/user.svg"
          iconAlt="username"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="usrLastname"
          label="Last Name"
          placeholder="Last name"
          iconSrc="/icons/user.svg"
          iconAlt="username"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="usrUsername"
          label="Username"
          placeholder="Username"
          iconSrc="/icons/user.svg"
          iconAlt="username"
        />
        <SubmitButton isLoading={isLoading}>Create User</SubmitButton>
      </form>
    </Form>
  );
};

export default CreateUserForm;
