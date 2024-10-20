import axios from "axios"
import { useEffect, useState } from "react"
import { FaEdit, FaInfoCircle } from "react-icons/fa"
import { FaMoneyBill, FaTrash } from "react-icons/fa6"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

const AdminDoctors = () => {
    const [docotrs, setDoctors] = useState([])
    // ok done
    useEffect(() => {

        axios.get('http://localhost:5000/users')
            .then((response) => {
                setDoctors(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


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

                axios.delete(`http://localhost:5000/admin-delete-doctor/${id}`)
                    .then((res) => {
                        console.log(res.data)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        axios.get('http://localhost:5000/users')
                            .then((response) => {
                                setDoctors(response.data);
                            })
                            .catch((error) => {
                                console.error('Error fetching data:', error);
                            });
                    })
            }
        });
    })
    return (
        <section className="container px-4 mx-auto">
            <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">Numbers of Doctors</h2>

                <span className="px-3 py-1 text-blue-600 bg-blue-100 text-[16px] rounded-full dark:bg-gray-800 dark:text-blue-400">{docotrs.length}</span>
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
                                        <th scope="col" className="px-12 w-[100px] py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <button className="flex items-center gap-x-2">
                                                <span>Payment Details</span>
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
                                            <td className="w-[100px]">
                                                <Link to={`/dashboard/admin-doctors/payment/${info._id}`}><FaMoneyBill className="block mx-auto text-[22px]"></FaMoneyBill> </Link>
                                            </td>
                                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                                    <Link to={`/dashboard/admin-doctors/payment_details/${info.email}`}><button><FaInfoCircle className="text-xl"></FaInfoCircle></button></Link>
                                                </div>
                                            </td>

                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{info.email}</td>

                                            <td className="px-4 py-4 text-sm whitespace-nowrap">

                                                <button onClick={()=>{
                                                    handleDelete(info._id)
                                                }} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-5 h-5"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                </button>
                                            </td>
                                            <td>
                                                <Link to={`/dashboard/admin-doctors/admin-edit-doctors/${info._id}`}>
                                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-600 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="w-5 h-5"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                            />
                                                        </svg>
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