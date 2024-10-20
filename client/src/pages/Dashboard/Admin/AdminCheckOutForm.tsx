import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
interface AdminCheckOutFormProps {
    price: number,
    name: string,
    email:string
}

const AdminCheckOutForm: React.FC<AdminCheckOutFormProps> = ({ price,name,email }) => {

    const { user } = useContext(AuthContext)
    console.log(user)
    const stripe = useStripe()
    
    const [error, setError] = useState<any>('')
    const [clientSecret, setClientSecret] = useState("");
    const elements = useElements()
    
    
    useEffect(() => {
        axios.post('http://localhost:5000/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
                console.log(clientSecret)
            })
    }, [price])
    const handelSubmit = async (e: any) => {
        e.preventDefault()
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

        const { paymentIntent, error: con } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user.email || 'anonymous',
                        name: user.displayName || 'anonymous'
                    }
                }
            }
        )
        if (con) {
            console.log(con)
        }
        else {
            console.log(paymentIntent)
            if (paymentIntent.status) {
                Swal.fire("Payment Successfully Done");
                const date1=new Date()
                const date=new Date(date1).toLocaleDateString()
                const time=new Date(date1).toLocaleTimeString()
                const info={
                    price,name,email,date,paymentIntent,time
                }
                console.log(info)

                axios.post('http://localhost:5000/doctor-payment',info)
                .then(res=>console.log(res.data))
            }
        }
    }
    
    return (
        <div>
            <form onSubmit={handelSubmit}>
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
                    }}>

                </CardElement>
                <button className="w-full mt-4 bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition" type="submit" disabled={!stripe || !elements}>
                    Pay Now
                </button>
                {
                    error && (<p className="text-red-400">{error}</p>)
                }
            </form>
        </div>
    )
}
export default AdminCheckOutForm