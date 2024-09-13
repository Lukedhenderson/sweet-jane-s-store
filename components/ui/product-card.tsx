"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useState } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const cart = useCart();
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem({ ...data, quantity });
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <div onClick={handleClick} className="bg-[AntiqueWhite] border-black group cursor-pointer rounded-md border p-3 space-y-4 mb-4">
      {/* Images and Actions */}
      <div className="aspect-square rounded-md bg-gray-100 relative">
        <Image 
          src={data?.images?.[0].url}
          fill
          alt="Image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-2">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
              onClick={onPreview}
              icon={<Expand size={15} className="text-grey-600" />}
            />
            <IconButton 
              onClick={onAddToCart}
              icon={<ShoppingCart size={15} className="text-grey-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">
          {data.name}
        </p>
        <p className="text-sm text-gray-500">
          {data.category?.name}
        </p>
      </div>
      {/* Quantity */}
      <div className="flex items-center justify-between">
        <input 
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          className="border rounded-md p-1 text-center w-16"
        />
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;