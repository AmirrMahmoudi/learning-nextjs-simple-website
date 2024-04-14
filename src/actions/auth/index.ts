"use server";

import { signInSchema } from "@/app/(auth)/signin/_types/signin.schema";
import { OperationResult } from "@/types/operation-result";
import { error } from "console";
import { redirect } from "next/navigation";
import { serverActionWrapper } from "../server-action-wrapper";
import { createData } from "@/core/http-service/http-service";
import { SignIn } from "@/app/(auth)/signin/_types/signin.types";

export async function signInAction(
  formState: OperationResult<string> | null,
  formData: FormData
) {
  const mobile = formData.get("mobile") as string;
  //   const validatedData = signInSchema.safeParse({
  //     mobile,
  //   });
  //   if (!validatedData.success) {
  //     return {
  //       message: "خطا در فرمت موبایل",
  //     };
  //   } else {
  return serverActionWrapper(
    async () =>
      await createData<SignIn, string>("/signin", {
        mobile,
      })
  );
  //   }
}
