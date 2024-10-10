import React from "react"
import { Link } from "react-router-dom"
const ServiceCart:React.FC<any> = ({card}) => {
    const {image,title,description,details,_id}=card
  return (
    <div>
      <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <img
        className="object-cover object-center w-full h-56"
        src={image}
        alt="avatar"
    />

    <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <ul className="list-item list-inside list-none">
        {
   details?.servicesIncluded?.map((list:any,index:number)=> <li key={index}>{list}</li>)
}
        </ul>
    </div>
<div className="px-6 py-4">
  <Link to={`/home-serviceDeatils/${_id}`}><button className="btn w-full bg-[#06B6D4] text-white">Booking Now</button></Link>
</div>
   
</div>

    </div>
  )
}

export default ServiceCart
