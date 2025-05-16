import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-black via-gray-900 to-gray-800 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Memory Smash</h1>

        {/* Menú de navegación */}
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

        {/* Botones de sesión */}
        <div className="flex items-center space-x-3">
          <Link href="/login">
           <Button className="bg-gray text-white border-white hover:bg-white hover:text-black">
              Iniciar sesion
            </Button>
           
          </Link>
          <Link href="/register">
            <Button className="bg-blue-600 hover:bg-blue-900 text-white">
              Registrarse
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
