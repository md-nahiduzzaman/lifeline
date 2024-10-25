import { useLoaderData } from "react-router-dom"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from "./CheckOutForm/CheckOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY);
const Payments = () => {
  const packageData = useLoaderData() as any
  console.log(packageData)
  return (
   <div className="font-custom">
     <div className="max-w-screen-xl mx-auto py-[120px]">
    <div>
    <Elements stripe={stripePromise}>
<CheckOutForm price={packageData?.price} duration={packageData?.duration} 
packageName={packageData?.packageName}
></CheckOutForm>
     </Elements>
    </div>
    </div>
   </div>
  )
}

export default Payments
