
import { useLoaderData } from 'react-router-dom'
import logo from '../../../assets/images/Stripe-Payment-Logo.png'
import { useState } from 'react'

const PaymentPage = () => {
    const singleData: any = useLoaderData()
    console.log(singleData)
    const [amount, setAmount] = useState(0)
    console.log("it is amount",amount)
    return (
        <div>
            <div className='mb-8'>
                <img src={logo} className='w-[220px] h-[145px] block mx-auto' alt="" />
            </div>
            <div className='relative w-[350px] mx-auto min-h-[60vh] rounded-xl bg-white shadow-xl'>
                <div>
                    <img src={singleData.image_url} className='w-[75px] h-[75px] rounded-[50%] absolute -top-5 -left-3' alt="" />
                </div>
                <div className='absolute top-[75px] left-4'>
                    <h2 className='text-[17px] font-medium my-3 text-gray-500'>Name: {singleData.name}</h2>
                    <h2 className='text-[17px] font-medium my-3 text-gray-500'>Email: {singleData.email}</h2>
                    <h2 className='text-[17px] font-medium my-3 text-gray-500'>Role: Doctor</h2>
                    <h2 className='text-[17px] font-medium my-3 text-gray-500'>Department: {singleData.department}</h2>
                    <h2 className='text-[17px] font-medium my-3 text-gray-500'>Reg_No: {singleData.reg_no}</h2>

                    <div>
                        <h1 className='text-gray-500'>Amount: </h1>
                        <form action="" onSubmit={(e: any) => {
                            e.preventDefault()
                            setAmount(e.target.amount.value)
                        }}>
                            <div className='flex items-center'>
                                <input placeholder='Fill The Box' type="number" className='pl-2 rounded-l-md border-2 h-[40px] border-black' name="amount" />
                                <button type='submit' className='bg-blue-400 rounded-r-md w-[55px] h-[40px] text-xl font-medium '>Ok</button>
                            </div>
                        </form>
                    </div>
                    <button className='px-3 py-2 rounded-lg text-[17px] font-medium mt-3 bg-blue-400'>Proceed Payment</button>
                </div>

            </div>
        </div>
    )
}
export default PaymentPage