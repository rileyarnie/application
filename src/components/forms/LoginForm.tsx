import { FormFieldType } from "@/lib/types";
import { LoginFormValidation } from "@/lib/validation";
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

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginFormValidation>>({
    resolver: zodResolver(LoginFormValidation),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit({
    username,
    password,
  }: z.infer<typeof LoginFormValidation>) {
    setIsLoading(true);

    try {
      const loggedinUser = await axios.post(
        `${BASE_URL}/login`,
        { username, password },
        {
          headers: {
            Authorization: BASIC_AUTH,
          },
        }
      );

      console.log("loggedinUser", loggedinUser.data);
      localStorage.setItem("token", loggedinUser.data.token);
      setIsLoading(false);
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
          name="username"
          label="username"
          placeholder="Username"
          iconSrc="/icons/user.svg"
          iconAlt="username"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="password"
          label="Password"
          placeholder="Enter password"
          iconSrc="/icons/eye.svg"
          iconAlt="password"
        />
        <SubmitButton isLoading={isLoading}>Log in</SubmitButton>
      </form>
    </Form>
  );
};

export default LoginForm;
