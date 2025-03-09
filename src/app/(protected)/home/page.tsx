import { LogoutButton } from "@/components/logout-button"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function Home() {
  const data = await auth.api.getSession({ headers: await headers() })
  if (!data?.session) redirect("/")

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-1">
      <h1 className="text-4xl font-bold">{data.user.name}</h1>
      <h1 className="text-2xl">{data.user.email}</h1>
      <LogoutButton/>
    </div>
  )
}