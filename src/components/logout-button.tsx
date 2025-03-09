'use client'

import { authClient } from "@/lib/auth-client"
import { LogOut } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export const LogoutButton = () => {
  const router = useRouter()

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/")
      }
    })
  }

  return (
    <Button onClick={handleLogout}>
      <LogOut /> Sign Out
    </Button>
  )
}