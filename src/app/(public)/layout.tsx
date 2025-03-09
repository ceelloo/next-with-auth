import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  const data = await auth.api.getSession({ headers: await headers() })
  if (data?.session) redirect('/home')

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-4">
      <Link href="/" className="text-4xl font-bold cursor-pointer">Next-With-Auth</Link>
      {children}
    </div>
  )
}