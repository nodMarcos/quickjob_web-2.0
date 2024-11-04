import { z } from "zod";

const loginSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email("Invalid email."),
  password: z.string().min(6, "Your password needs to have at least 6 characters."),
  confirmPassword: z.string().min(6, "Your password needs to have at least 6 characters.")
})

export default loginSchema;