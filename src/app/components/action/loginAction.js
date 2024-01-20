"use server";
import { signIn } from "@/app/auth";

export async function loginAction(formData) {
  // console.log(formData);
  await signIn("credentials", {
    username: formData.username,
    password: formData.password,
    redirectTo: "/",
  });
}
