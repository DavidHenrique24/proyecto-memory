"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { users } from "../bd/users"


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const userFound = users.find(
      (u) => u.email === email && u.password === password
    )

    if (userFound) {
      localStorage.setItem("user", JSON.stringify(userFound))
      window.location.href = "/"
    } else {
      setError("Email o contraseña incorrectos.")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Inicia Sesión</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Entra con tu email, para seguir disfrutando de Memory
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Contraseña</Label>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}
        <Button type="submit" className="w-full">
          Inicia Sesión
        </Button>
      </div>

      <div className="text-center text-sm">
        ¿No tienes cuenta?{" "}
        <Link href="/register" legacyBehavior passHref>
          <a className="underline underline-offset-4">Regístrate</a>
        </Link>
      </div>
    </form>
  )
}
