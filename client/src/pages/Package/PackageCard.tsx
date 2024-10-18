import React from "react";
import { Link } from "react-router-dom";

interface PackageProps {
  packageName: string;
  price: number;
  duration: string;
  servicesIncluded: string[];
  _id:string
}

interface PackageCardProps {
  prices: PackageProps;
}
const PackageCard: React.FC<PackageCardProps> = ({ prices }) => {
  const { packageName, price, duration, servicesIncluded ,_id} = prices;
  return (
    <div className="rounded-lg  shadow-lg grid items-end p-6 text-white bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] transform transition-transform duration-300 hover:scale-105">
     <h2 className="text-xl font-bold text-center">{packageName}</h2>
     <p className="my-6 text-center"><sup className="text-3xl">$</sup> <span className="text-6xl font-serif">{price}</span><sub className=" font-bold">{duration}</sub> </p>
     <hr />

     <ul className="list-insid list-disc mt-3">
        {
            servicesIncluded.map(list=><li className="my-2" key={list}>{list} </li>)
        }
     </ul>
<Link to={`/payments/${_id}`}>
<button className="btn border-none w-full mt-6 bg-[#1E3A8A] text-white">Subscribe now</button>
</Link>
    </div>
  )
}

export default PackageCard
