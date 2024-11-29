import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our
          <span className="text-coral-red"> Popular </span>
          Products
        </h2>
        <p className="lg:max-w-lg font-montserrat text-slate-gray">
          Our products are designed to make your life easier and more enjoyable.
          From our best-selling kitchen appliances to our stylish home decor
          items, we have something for everyone
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6  gap-14">
        {products.map((product, index) => (
          <PopularProductCard key={index} product={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
