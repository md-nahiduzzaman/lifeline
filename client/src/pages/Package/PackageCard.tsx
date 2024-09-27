import React from "react";

interface PackageProps {
  packageName: string;
  price: number;
  duration: string;
  servicesIncluded: string[];
}

interface PackageCardProps {
  prices: PackageProps;
}
const PackageCard: React.FC<PackageCardProps> = ({ prices }) => {
  const { packageName, price, duration, servicesIncluded } = prices;
  return (
    <div className="rounded-lg  shadow-lg grid items-end p-6 text-white bg-[#06B6D4]  transform transition-transform duration-300 hover:scale-105">
     <h2 className="text-xl font-bold text-center">{packageName}</h2>
     <p className="my-6 text-center"><sup className="text-3xl">$</sup> <span className="text-6xl font-serif">{price}</span><sub className=" font-bold">{duration}</sub> </p>
     <hr />

     <ul className="list-inside list-item list-disc mt-3">
        {
            servicesIncluded.map(list=><li className="my-2" key={list}>{list} </li>)
        }
     </ul>

    <button className="btn border-none mt-6 bg-[#1E3A8A] text-white">Subscribe now</button>

    </div>
  )
}

export default PackageCard
