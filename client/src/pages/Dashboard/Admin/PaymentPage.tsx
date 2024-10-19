
import { useLoaderData } from 'react-router-dom'
import logo from '../../../assets/images/Stripe-Payment-Logo.png'
import { useState } from 'react'
import './style.css'
import { FaPlus } from 'react-icons/fa6'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY);

const PaymentPage = () => {
    const singleData: any = useLoaderData()
    console.log(singleData)
    const [amount, setAmount] = useState(0)
    const [modal,setModal]=useState(false)
    console.log("it is amount", amount)
    const handleChange=()=>setModal(true)
    console.log(modal)
    return (
        <div>
            <div className='mb-8'>
                <img src={logo} className='w-[220px] h-[145px] block mx-auto' alt="" />
            </div>
            <div>

                <div className='w-[360px] md:w-[390px] mx-auto min-h-[66vh] rounded-xl bg-white shadow-xl p-3'>
                    <div>
                        <img src={singleData.image_url} className='w-[75px] block mx-auto h-[75px] rounded-[50%]' alt="" />
                    </div>
                    <div className='p-2 border-2 border-black rounded-md'>
                        <h2 className='rounded-md border-2 border-black text-[17px] font-medium my-4 text-gray-500 p-1'>Name: {singleData.name}</h2>
                        <h2 className='rounded-md border-2 border-black text-[17px] font-medium my-4 text-gray-500 p-1'>Email: {singleData.email}</h2>
                        <h2 className='rounded-md border-2 border-black text-[17px] font-medium my-4 text-gray-500 p-1'>Role: Doctor</h2>
                        <h2 className='rounded-md border-2 border-black text-[17px] font-medium my-4 text-gray-500 p-1'>Department: {singleData.department}</h2>
                        <h2 className='rounded-md border-2 border-black text-[17px] font-medium my-4 text-gray-500 p-1'>Reg_No: {singleData.reg_no}</h2>

                        <div>
                            <h1 className='text-gray-500'>Amount: </h1>
                            <form action="" onSubmit={(e: any) => {
                                e.preventDefault()
                                setAmount(e.target.amount.value)
                            }}>
                                <div className='flex items-center'>
                                    <input placeholder='Fill The Box' type="number" className='h-[35px] pl-2 rounded-l-md w-[280px] md:w-[300px] border-2 border-black' name="amount" />
                                    <button type='submit' className='bg-blue-500 rounded-r-md w-[55px] h-[35px] text-xl font-medium '>Ok</button>
                                </div>
                            </form>
                        </div>
                        <button onClick={handleChange}  className='px-3 py-2 w-full rounded-lg text-[17px] font-medium mt-5 bg-blue-500'>Proceed Payment</button>
                        {
                            modal&&(
                                <div className="mo relative">
                            <div className="over"></div>
                            <div className='mo-con '>
                                <Elements stripe={stripePromise}>
                                    
                                </Elements>
                                <button onClick={()=>{
                                    setModal(false)
                                }}>
                                <FaPlus className='bg-red-300 rounded-[50%] text-3xl -top-3 -right-3 rotate-45 absolute text-black'></FaPlus>
                                </button>
                            </div>
                              
                            
                        </div>
                            )
                        }
                         
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PaymentPage