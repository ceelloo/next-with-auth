'use client'

import { FormInput } from "@/components/form-input";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useActionState } from "react";
import { toast } from "sonner";

const submit = async (_: any, formData: FormData) => {
  const rawData = Object.fromEntries(formData) as { name: string, email: string, password: string }
  const data = { callbackURL: "/sign-in", ...rawData }

  await authClient.signUp.email(data, {
    onError: (ctx) => void toast.error(ctx.error.message)
  })
}

export default function SignUp() {
  const [_, action, pending] = useActionState(submit, undefined)

  return (
    <form action={action} className="form">
      <h1 className="text-3xl font-bold text-center">Create account.</h1>

      <FormInput
        label="Name"
        name="name"
        placeholder="yourname"
        autoComplete="name"
        required
      />

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
        <h1>already have an account? <Link href="/sign-in" className="text-blue-500 hover:text-blue-600 hover:underline">Sign in</Link></h1>
        <Button disabled={pending}>{pending ? "..." : "Create account"}</Button>
      </div>
    </form>
  )
}