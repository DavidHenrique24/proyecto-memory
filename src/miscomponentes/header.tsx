import Link from "next/link"; // Importamos Link de next/link

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 shadow-md">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-6 text-white">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold hover:text-blue-400">
              Item One
            </NavigationMenuTrigger>
            <NavigationMenuLink className="text-sm hover:text-blue-300">
              <Link href="/juego">Juego</Link> 
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold hover:text-blue-400">
              Item Two
            </NavigationMenuTrigger>
            <NavigationMenuLink className="text-sm hover:text-blue-300">
              <Link href="/acerca"></Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold hover:text-blue-400">
              Item Three
            </NavigationMenuTrigger>
            <NavigationMenuLink className="text-sm hover:text-blue-300">
              <Link href="/item-three">Link</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
