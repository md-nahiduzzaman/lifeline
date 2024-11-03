
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import img from '../../../assets/images/Stripe-Payment-Logo.png'
import useAxiosCommon from "../../../hooks/useAxiosCommon"

const PaymentDetails = () => {
  const axiosCommon=useAxiosCommon()
  const { email } = useParams()
  const [details, setDetails] = useState<any>([])
  console.log(email)
  useEffect(() => {
    axiosCommon.get(`/get_doctor_payment/${email}`)
      .then(res => { console.log(res.data); setDetails(res.data) })
  }, [])
  console.log()
  return (
    <div>
      <section className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-x-3">
            <h2 className="text-[16px] font-medium text-gray-800 dark:text-white">Doctor Name</h2>

            <span className="px-3 text-[15px] py-1 text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400
          font-medium">{details[0]?.name}</span>

          </div>

          <div className="flex items-center gap-x-3 mt-5">
            <h2 className="text-[16px] font-medium text-gray-800 dark:text-white">Doctor Email</h2>

            <span className="px-3 text-[15px] py-1 text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400
          font-medium">{details[0]?.email}</span>

          </div>
        </div>

        <div>
           <img src={img} className="w-[130px] h-[110px]" alt="" />
        </div>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden md:rounded-lg">
                <div className="flex p-2 py-3 justify-between my-3 bg-white">
                  <p className="w-[250px] text-center font-medium">Transaction</p>
                  <p className="w-[130px] text-center font-medium ml-16">Salary</p>
                  <p className="w-[160px] text-center font-medium">Date</p>
                  <p className="w-[180px] text-center font-medium">Time</p>
                  <p className="w-[170px] text-center font-medium text-green-400">Status</p>

                </div>
                {

                  details.map((info: any) => <div key={info._id} className="my-3 rounded-md flex p-2 py-4 justify-between bg-white border-2 border-gray-300">
                    <p className="w-[250px] text-center font-medium">{info.paymentIntent.id}</p>
                    <p className="w-[130px] text-center font-medium ml-16">{info.price}$</p>
                    <p className="w-[160px] text-center font-medium">{info.date}</p>
                    <p className="w-[180px] text-center font-medium">{info.time}</p>
                    <p className="w-[170px] text-[17px] text-center font-medium text-green-400">{info.paymentIntent.status}</p> 
                  </div>)
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default PaymentDetails