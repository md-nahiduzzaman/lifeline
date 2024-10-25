import axios from "axios";
import { useEffect, useState } from "react";
import SolutionsCardDeatils from "./SolutionsCardDeatils";

// Define the expected structure of the solution data
interface Solution {
  title: string;
  description: string;
  image: string;
  features:string[];
  service:string
  // Add other properties here if needed
}

const SolutionCard = () => {
  // Use the correct type: array of Solution objects
  const [solutaData, setSolutionData] = useState<Solution[]>([]);

  useEffect(() => {
    axios
      .get("solution.json")
      .then((res) => {
        setSolutionData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto mb-[120px]">
      <h2 className="text-xl text-center font-bold text-[#23085A]">Innovative Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-7">
        {solutaData?.map((solution) => (
          <SolutionsCardDeatils key={solution.title} solution={solution} />
        ))}
      </div>
    </div>
  );
};

export default SolutionCard;

