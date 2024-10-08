import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container"
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Landing from "@/components/landingdiv";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("bff86f38-ec3e-4c77-8a73-642671efa7e9");
  
  {/* where you can add div above billboard */}

  return (  
     <Container>
      <div className="text-6xl font-bold text-center mt-7 border border-black">Seven Oaks Honey</div>      
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured products" items={products} />
      </div>
      <Landing />
    </Container>
   );
}
 
export default HomePage;