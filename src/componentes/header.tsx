"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

interface email {
  email: string
}

export default function Header() {
 const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const storedEmail = localStorage.getItem("email")
    if (storedEmail) {
      setEmail(storedEmail)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("email")
    localStorage.removeItem("email") 
    setEmail(null)
    window.location.href = "/"
  }

  return (
    <header className="bg-gradient-to-br from-black via-gray-900 to-gray-800 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Memory Smash</h1>

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-blue-400 transition duration-300">
                  Inicio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/acerca" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-blue-400 transition duration-300">
                  Acerca
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/juego" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-blue-400 transition duration-300">
                  Jugar
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

       <div className="flex items-center space-x-3">
          {email ? (
            <>
              <span className="text-white">Hola, {email}</span>
              <Button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-900 text-white"
              >
                Cerrar sesión
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button className="bg-gray text-white border-white hover:bg-white hover:text-black">
                  Iniciar sesión
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-blue-600 hover:bg-blue-900 text-white">
                  Registrarse
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
