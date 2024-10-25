import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import React, { useContext, useEffect, useState } from "react"
import useAxiosCommon from "../../../hooks/useAxiosCommon"
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
const CheckOutForm:React.FC<any> = ({price,duration,packageName}) => {
    const stripe=useStripe()
    const elements=useElements()
    const [error,setError]=useState<any> ('')
    const axiosCommon=useAxiosCommon()
    const [clientSecret, setClientSecret] = useState("");
    const {user}=useContext(AuthContext)
const location=useLocation()
const navigation=useNavigate()
    useEffect(()=>{
        axiosCommon.post('/create-payment-intent',{price}).then(res=>{
            console.log(res.data)
            setClientSecret(res.data.clientSecret)
        }).catch(error=>{
            console.log(error)
        })
    },[axiosCommon])
    const handleSubmit =async(event:React.FormEvent<HTMLFormElement>)=> {
event.preventDefault()

    const targets = event.target as any
    const fullNmae = targets.fullName.value
    const email = targets.email.value
    const number = targets.phone.value
    const address = targets.address.value
    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)

    if (card === null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      console.log('payment error ', error)
      setError(error.message)

    } else {
      console.log('payment method', paymentMethod)
      setError("")
    }

    //------------ confran payments ------------------

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: fullNmae,
          email: email,
          phone: number,
          address: address,
        }
      }
    })


    if (confirmError) {
      console.log('confirm error message', confirmError)

}else{
    if(paymentIntent.status==='succeeded'){
        console.log('success intent fully done',paymentIntent)
       const paymentInfo ={
        fullNmae,
        email,
        number,
        address,
        date:new Date(),
        duration,
        packageName,
        price,
        transactionId:paymentIntent.id,
        userEmail:user.email,
userName:user.displayName,
status:'subscribe'
       }
axiosCommon.post('/payments-history',paymentInfo).then(res=>{
  console.log(res.data)
  if(res.data.insertedId){
axiosCommon.patch(`/user-status-upadate?email=${user?.email}`).then(res=>{
  console.log(res.data)
})
    Swal.fire({
      title: "Good job ",
      text: "payment success fullly done",
      icon: "success"
    });
navigation(location.state|| '/')
  }
}).catch(error=>{
  console.log(error)
})
    }
    
}
    }
  return (
    <div className="w-full md:w-1/2 lg:w-[40%] lg:p-10 mx-auto  p-3 bg-[#fbf7f0]">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
          <input type="text" name="fullName" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your full name" required />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" required />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
          <input type="tel" name="phone" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your phone number" required />
        </div>

        <div className="mb-6">
          <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
          <input type="text" id="address" name="address" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your address" required />
        </div>

        {/* Payment Information */}
        <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
        <p className="mb-3">Payment amount : {price}$ </p>
        <div className="">
          <label htmlFor="card-element" className="block text-gray-700 font-medium mb-2">Credit or Debit Card</label>
          <div className="w-full px-4 py-2 border border-gray-300 rounded-md">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': { color: '#aab7c4' },
                  },
                  invalid: { color: '#9e2146' },
                },
              }}
            />
          </div>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>
        <button  className="w-full mt-4 bg-[#23085A] text-white font-semibold py-3 rounded-md hover:bg-[#23085A] transition" type="submit" disabled={!stripe || !elements}>
    Pay Now
        </button>
      </form>
    </div>
  )
}

export default CheckOutForm
