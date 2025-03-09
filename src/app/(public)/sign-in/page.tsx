'use client'

import { FormInput } from "@/components/form-input";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useActionState } from "react";
import { toast } from "sonner";

const submit = async (_: any, formData: FormData) => {
  const rawData = Object.fromEntries(formData) as { email: string, password: string }
  const data = { callbackURL: "/home", ...rawData }

  await authClient.signIn.email(data, {
    onError: (ctx) => void toast.error(ctx.error.message)
  })
}

export default function SignIn() {
  const [_, action, pending] = useActionState(submit, undefined)

  return (
    <form action={action} className="form">
      <h1 className="text-3xl font-bold text-center">Welcome back!</h1>

      <FormInput
        label="Email"
        name="email"
        type="email"
        placeholder="your@email.com"
        autoComplete="email"
        required
      />

      <FormInput
        label="Password"
        name="password"
        type="password"
        placeholder="yourpassword"
        required
      />

      <div className="flex flex-col">
        <h1>dont have an account? <Link href="/sign-up" className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer">register</Link></h1>
        <Button disabled={pending}>{pending ? "..." : "Sign in"}</Button>
      </div>
    </form>
  )
}