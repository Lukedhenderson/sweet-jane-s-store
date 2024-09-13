import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import Logo from "@/components/logo";


export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <div className="border-b border-black bg-sky-200">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-24 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2"> 
            <Logo className="w-20"/>
          </Link>
          <MainNav data={categories}/>
          <NavbarActions />
        </div>
      </Container>
    </div>
   );
}
 
export default Navbar;