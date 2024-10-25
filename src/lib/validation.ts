import { z } from "zod";

export const LoginFormValidation = z.object({
  username: z.string().min(1, "This is a required field"),
  password: z.string().min(1, "This is a required field"),
});
export const CreateUserFormValidation = z.object({
  usrFirstname: z.string().min(1, "This is a required field"),
  usrLastname: z.string().min(1, "This is a required field"),
  usrUsername: z.string().min(1, "This is a required field"),
});
