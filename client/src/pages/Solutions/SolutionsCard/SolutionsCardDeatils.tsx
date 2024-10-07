import React from "react"
interface Solutions {
  title: string;
  description: string;
  image: string;
  features:string[];
  service:string
  // Add other properties here if needed
}
interface PackageCardProps {
  solution: Solutions;
}

const SolutionsCardDeatils:React.FC<PackageCardProps> = ({solution}) => {
    const {image,service,description,features,title}=solution
  return (
    <div className="w-full grid items-end overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <img className="object-cover object-center w-full h-56" src={image} alt="avatar" />

    <div className="flex items-center px-6 py-3 bg-gray-900">
        <h1 className="mx-3 text-lg font-semibold text-white">{title}</h1>
    </div>

    <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{service}</h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">{description}</p>

        <div className="flex items-center mt-3 text-gray-700 dark:text-gray-200">
          <ul className="list-inside list-disc">
            {
                features.map((list:any)=> <li key={list}>{list} </li> )
            }
          </ul>
         
        </div>

        <button className="btn w-full mt-4 text-white bg-[#06B6D4]">View details</button>
    </div>
</div>

  )
}

export default SolutionsCardDeatils
