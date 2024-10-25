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
    <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300 grid items-end">
     <h2 className="text-xl font-bold text-center text-[#23085A]">{packageName}</h2>
     <p className="my-6 text-center"><sup className="text-3xl">$</sup> <span className="text-6xl font-serif">{price}</span><sub className=" font-bold">{duration}</sub> </p>
     <hr />

     <ul className="text-gray-700 mb-6">
        {
            servicesIncluded.map(list=><li className="my-2 list-inside list-disc" key={list}>{list} </li>)
        }
     </ul>
<Link to={`/payments/${_id}`}>
<button className="btn border-none w-full mt-6 bg-[#23085A] text-white">Subscribe now</button>
</Link>
    </div>
  )
}

export default PackageCard
