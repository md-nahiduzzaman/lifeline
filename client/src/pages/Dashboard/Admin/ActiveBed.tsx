import { useEffect, useState } from "react"

const Total_Bed = () => {

    const [info, setInfo] = useState<any>([])
    const [fixed, setFixed] = useState<String>('all')
    console.log(fixed)
    useEffect(() => {
        fetch('http://localhost:5000/admin-all-bed')
            .then((res: any) => {
                return res.json()
            })
            .then((data: any) => {
                console.log(data)
                if (fixed!=='all') {
                    const filterData = data.filter((info: any) => info.status === fixed)
                    console.log(filterData)
                    setInfo(filterData)
                }
                else {
                    setInfo(data)
                }
            })
    }, [fixed])
    return (

        <section className="container px-4 mx-auto">
            <div className="flex justify-between flex-col lg:flex-row gap-4">
                <div>
                    <h2 className="text-lg font-medium text-gray-800 dark:text-white">Customers</h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                        These companies have purchased in the last 12 months.
                    </p>
                </div>

                <button onClick={() => {
                    setFixed('active')
                }} className="h-[33px] font-medium px-3 rounded-xl bg-[#79f042e0]">Active Bed</button>
                <button onClick={() => {
                    setFixed('unactive')
                }} className="h-[33px] font-medium px-3 rounded-xl bg-red-400">Unactive Bed</button>
                <button onClick={()=>{
                    setFixed('all')
                }} className="h-[33px] font-medium px-3 rounded-xl lg:w-[80px] bg-blue-300">All</button>
            </div>
            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                        >
                                            <button className="flex items-center gap-x-3 focus:outline-none">
                                                <span>Category</span>

                                            </button>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                        >
                                            About
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                        >
                                            License use
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    {
                                        info.map((data: any) => <tr>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div>
                                                    <h2 className="font-medium text-gray-800 dark:text-white">{data.category}</h2>
                                                    <p className="text-sm font-normal text-gray-600 dark:text-gray-400">catalogapp.io</p>
                                                </div>
                                            </td>
                                            <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                {
                                                    data.status === 'active' ? (<div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                        Active
                                                    </div>) : (<div className="inline px-3 py-1 text-sm font-normal rounded-full text-red-400 gap-x-2 bg-red-200 dark:bg-gray-800">Unactive</div>)
                                                }
                                            </td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div>
                                                    <h4 className="text-gray-700 dark:text-gray-200 text-[16px] font-medium">Room_ no:{data.roomNumber} <span>floor:{data.floorNumber}</span> </h4>
                                                    <p className="text-gray-500 dark:text-gray-400 font-medium mt-2">Price Per day:{data.price}$</p>
                                                </div>
                                            </td>

                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                {
                                                    data.status === 'unactive' ? (<button className="bg-[#79f042e0] font-medium px-3 py-1 rounded-xl w-[100px]">Active it</button>) : (<button className="bg-red-300 w-[100px] font-medium px-3 py-1 rounded-xl">Unactive it</button>)
                                                }
                                            </td>

                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Total_Bed