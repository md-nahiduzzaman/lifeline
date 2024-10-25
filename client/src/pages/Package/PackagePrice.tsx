
import { useEffect, useState } from "react";
import PackageCard from "./PackageCard";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import HSContact from "../HomeServices/HSContact/HSContact";
import PKBanner from "./PKBanner/PKBanner";

const PackagePrice = () => {
  const [packageData, setPackage] = useState<pack[]>([]); // Define state with correct type
const axiosCommon=useAxiosCommon()
  interface pack {
    packageId: string; // Use 'string' instead of 'String'
    packageName: string;
    servicesIncluded: string[];
    price: number;
    currency: string;
    duration: string;
    _id:string
  }

  useEffect(() => {
    axiosCommon
      .get("/services-cards")
      .then((res) => {
        setPackage(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-gray-50 font-custom ">
      <div>
        <PKBanner></PKBanner>
      </div>
    <div className="max-w-screen-xl  mx-auto min-h-screen grid items-center">
      <h2 className="text-center text-xl font-bold mb-6">Our service packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packageData.map((prices: pack) => (
          <PackageCard key={prices.packageId} prices={prices} />
        ))}
      </div>
      <HSContact></HSContact>
    </div>
    </div>
  );
};

export default PackagePrice;
