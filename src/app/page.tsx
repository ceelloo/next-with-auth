import { LogoutButton } from "@/components/logout-button";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { LogIn, UserPlus } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const data = await auth.api.getSession({ headers: await headers() })

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-2">
      {data?.user ? (
        <h1 className="text-4xl font-bold">hello {data.user.name}!</h1>
      ) : (
        <h1 className="text-4xl font-bold">Next-With-Auth</h1>
      )}

      <div className="flex gap-2">
        {data?.session ? (
          <LogoutButton />
        ) : (
          <>
            <Link href="/sign-in" className={buttonVariants()}>
              <LogIn /> Sign in
            </Link>

            <Link href="/sign-up" className={buttonVariants()}>
              <UserPlus /> Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  )
}