import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


export const Header = () => {
    return (
        <>

<div className='flex gap-1 justify-center'>
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink className=''>About</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Produts</NavigationMenuTrigger>
      <NavigationMenuContent>
      
        <NavigationMenuLink>Web 1</NavigationMenuLink>
        <NavigationMenuLink>Web 1</NavigationMenuLink>
        <NavigationMenuLink>Web 1</NavigationMenuLink>
        <NavigationMenuLink>Web 1   </NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Produts</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Web 1</NavigationMenuLink>
        <NavigationMenuLink>Web 1</NavigationMenuLink>
        <NavigationMenuLink>Web 1</NavigationMenuLink>
        <NavigationMenuLink>Web 1   </NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

</div>

        </>
    )
}
