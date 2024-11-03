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
  isLoading:boolean
}

const SolutionsCardDeatils:React.FC<PackageCardProps> = ({solution,isLoading}) => {
    const {image,service,description,features,title}=solution
  return (
    isLoading?<div className="flex w-full flex-col gap-4">
    <div className="flex items-center gap-4">
      <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
      <div className="flex flex-col gap-4">
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
    </div>
    <div className="skeleton h-[250px] w-full"></div>
  </div> :<>
     <div className="w-full grid items-end overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <img className="object-cover object-center w-full h-56" src={image} alt="avatar" />

    <div className="flex items-center px-6 py-3 bg-gray-900">
        <h1 className="mx-3 text-lg font-semibold text-white">{title}</h1>
    </div>

    <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-[#23085A]">{service}</h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">{description}</p>

        <div className="flex items-center mt-3 text-gray-700 dark:text-gray-200">
          <ul className="list-inside list-disc">
            {
                features.map((list:any)=> <li key={list}>{list} </li> )
            }
          </ul>
         
        </div>

        <button className="btn w-full mt-4 text-white bg-[#23085A]">View details</button>
    </div>
</div>
    </>
   

  )
}

export default SolutionsCardDeatils
