import Image, { StaticImageData } from "next/image";
import { CurrencyEur, Plus } from "phosphor-react";

interface CardProductProps {
  name: string;
  price: string;
  image: StaticImageData;
}

export const CardProduct = ({ name, image, price }: CardProductProps) => {
  return (
    <div className="w-[174px] shadow-md">
      <div className="bg-brand-100 w-full h-[233px] flex items-center justify-center rounded-t-md">
        <Image src={image} alt={name} objectFit="contain" />
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <span className="font-bold uppercase text-sm">{name}</span>
          <span className="text-brand-400 flex items-center">
            <CurrencyEur size={15} />
            {price}
          </span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="font-bold uppercase text-sm text-brand-400">
            brandy
          </span>
          <button className="bg-brand-100 p-1 rounded-sm hover:bg-brand-400 hover:text-white transition-all duration-100 ease-linear">
            <Plus size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};
