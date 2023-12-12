import { PASSWORD_REGEX } from "@/utils/constants";
import { z } from "zod";

export type User = {
  email: string;
  password: string;
};

export const UserModel = z.object({
  email: z.string().email().trim().toLowerCase(),
  password: z
    .string()
    .regex(PASSWORD_REGEX, {
      message:
        "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
    })
    .trim()
    .toLowerCase(),
});

export type UserLoginType = z.infer<typeof UserModel>;
