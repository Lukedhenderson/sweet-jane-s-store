"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href:`/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }));

  return ( 
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      <a href="/#mission"><div className="text-neutral-500 transition-colors font-medium hover:text-black">Our Misson</div></a>
      <a href="/#farm"><div className="text-neutral-500 transition-colors font-medium hover:text-black">The Farm</div></a>
      <a href="/#keepers"><div className="text-neutral-500 transition-colors font-medium hover:text-black">The Beekeepers</div></a>
      {routes.map((route) => (
        <Link 
          key={route.href}
          href={route.href}
          className={cn(
            "text-base font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
   );
}
 
export default MainNav;