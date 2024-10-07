import { useEffect, useState } from "react"
import { FaEdit } from "react-icons/fa"
import { FaMoneyBill, FaTrash } from "react-icons/fa6"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"


const AdminDoctors = () => {
    const [docotrs, setDoctors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then((res: any) => {
                return res.json()
            })
            .then((data: any) => {
                setDoctors(data)
            })
    }, [])
    console.log('adefsaf')

    const handleDelete = ((id: any) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#7396DB",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    })
    return (
        <section className="container px-4 mx-auto">
            <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">Numbers of Doctors{docotrs.length}</h2>

                <span className="px-3 py-1 text-blue-600 bg-blue-100 text-[16px] rounded-full dark:bg-gray-800 dark:text-blue-400">100</span>
            </div>

            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center gap-x-3">


                                                <span>Name</span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <button className="flex items-center gap-x-2">
                                                <span>Pay</span>
                                            </button>
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Email address</th>

                                        <th scope="col" className="text-left w-[70px] py-3.5 px-4">
                                            <span className="">Delete</span>
                                        </th>
                                        <th className="text-left">
                                            Edit
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    {
                                        docotrs.map((info: any) => <tr>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center gap-x-3">

                                                    <div className="flex items-center gap-x-2">
                                                        <img src={info.image_url} className="w-[50px] h-[50px] rounded-[50%]" alt="" />
                                                        <span>{info.name}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                                    <button><FaMoneyBill className="text-xl"></FaMoneyBill></button>
                                                </div>
                                            </td>

                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{info.email}</td>

                                            <td className="px-4 py-4 text-sm whitespace-nowrap">

                                                <button onClick={handleDelete} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                    <FaTrash className="text-xl ml-3 text-red-400"></FaTrash>
                                                </button>
                                            </td>
                                            <td>
                                                <Link to={`/dashboard/admin-doctors/admin-edit-doctors/${info._id}`}>
                                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-600 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                        <FaEdit className="text-xl" />
                                                    </button>
                                                </Link>
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
export default AdminDoctors