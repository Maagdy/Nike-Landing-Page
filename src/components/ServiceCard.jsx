import React from "react";

/*
imgURL
label
subtext
*/

function ServiceCard({ service }) {
  return (
    <div className="transform transition-transform duration-300 hover:-translate-y-3  w-full sm:w-[350px] sm:min-w-[350px] shadow-3xl flex-1 rounded-[20px] px-10 py-16">
      <div className="flex justify-center items-center bg-coral-red h-11 w-11 rounded-full">
        <img src={service.imgURL} alt={service.label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal ">
        {service.label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-slate-gray text-lg leading-normal">
        {service.subtext}
      </p>
    </div>
  );
}

export default ServiceCard;
