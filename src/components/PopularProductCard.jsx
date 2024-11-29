import React from "react";
import { star } from "../assets/icons";

function PopularProductCard({ imgURL, name, price }) {
  return (
    <div className="transform transition-transform duration-300 hover:-translate-y-4 flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="flex mt-8 justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          4.5
        </p>
      </div>
      <h3 className="mt-2 font-semibold text-2xl leading-normal font-palanquin">
        {name}
      </h3>
      <p className="text-2xl mt-2 font-semibold font-montserrat text-coral-red leading-normal">
        {price}
      </p>
    </div>
  );
}

export default PopularProductCard;
