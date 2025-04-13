import Link from 'next/link'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-black via-gray-900 to-gray-800 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">Memory Game</h1>

        {/* Navegación */}
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

        {/* Menú de sesión */}
        <div className="flex items-center space-x-4">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>imagen</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Iniciar sesión</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Registrarse</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Ranking</MenubarItem>
          
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </header>
  )
}
