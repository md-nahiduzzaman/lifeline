import axios from "axios"
import { useEffect, useState } from "react"
import PackageCard from "./PackageCard";
const PackagePrice = () => {
const [packageData,setPackage]=useState([])

interface pack{

    packageId:String;
    packageName:String;
    servicesIncluded:String;
    price:number;
    currency:String;
    duration:String;
}

console.log(packageData)
  useEffect(()=>{
    axios.get('package.json').then(res=>{
        setPackage(res.data)
    }).catch(error=>{
        console.log(error)
    })

  },[])
  return (
    <div className="max-w-screen-xl lg:mb-[120px] mx-auto min-h-screen grid items-center">
         <h2 className="text-center text-xl font-bold">Ours service packages</h2>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{
    packageData.map((prices:pack)=><PackageCard key={prices?.packageId} prices={prices}></PackageCard>)
}
   </div>
    </div>
  )
}

export default PackagePrice
