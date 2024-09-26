import axios from "axios"
import { useEffect, useState } from "react"
import SolutionsCardDeatils from "./SolutionsCardDeatils"

const SolutionCard = () => {
    const [solutaData,setsolutionData]=useState([])
    useEffect(()=>{
axios.get('solution.json').then(res=>{
    setsolutionData(res.data)
}).catch(error=>{
    console.log(error)
})
    },[])

    console.log(solutaData)
  return (
    <div className="max-w-screen-xl mx-auto mb-[120px]">
        <h2 className="text-xl text-center font-bold text-[#06B6D4]">Innovative Solutions</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-7">
    {
    solutaData?.map((solution:String)=><SolutionsCardDeatils key={solution?.title} solution={solution}></SolutionsCardDeatils> )
    }
  </div>
    </div>
  )
}

export default SolutionCard
