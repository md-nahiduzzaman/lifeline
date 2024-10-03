

import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AdminEditDoctors = () => {
    const [value, setValue] = useState('');
    return (
        <div>
            <h1 className="text-3xl font-medium text-center">Let's Edit Any Data You Want</h1>
            <div>
                <p className="mt-2 text-center">Warning: Editing may cause unexpected changes. Proceed with caution
                    <span className="text-red-400 lg:hidden"> !</span></p>

            </div>

            <form action="" className="mt-12 bg-blue-50 shadow-2xl p-4 py-7 rounded-xl">
                <div className="w-full grid gap-4 lg:gap-0 grid-cols-1 lg:grid-cols-2">
                    <div>
                        <label className="block font-medium text-[15px] text-gray-500 dark:text-gray-300">Name</label>

                        <input type="text" placeholder='Your Name' className="mt-2 block w-[275px] placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                    </div>
                    <div>
                        <label className="block font-medium text-[15px] text-gray-500 dark:text-gray-300">Email</label>

                        <input type="email" className="mt-2 block w-[275px] placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                    </div>


                </div>
                <div className="grid gap-4 lg:gap-0 grid-cols-1 lg:grid-cols-2 mt-12">
                    <div>
                        <label className="block font-medium text-[15px] text-gray-500 dark:text-gray-300">Experience</label>

                        <input type="email" className="mt-2 block w-[275px] placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                    </div>


                    <div className="">
                        <label className="block font-medium text-[15px] mb-2 text-gray-500 dark:text-gray-300">Image_Url</label>
                        <input
                            type="file"
                            name="image"
                            className="w-[275px] h-[42px] rounded-md border-[1px] border-gray-600 appearance-none file:h-full file:py-2 file:px-4 file: file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-300"
                        />

                    </div>
                </div>
                <div className="grid gap-4 lg:gap-0 grid-cols-1 lg:grid-cols-2 mt-12">
                    <div>
                        <label className="block font-medium text-[15px] text-gray-500 dark:text-gray-300">checked_patient</label>

                        <input type="email" className="mt-2 block w-[275px] placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                    </div>
                    <div>
                        <label className="block font-medium text-[15px] text-gray-500 dark:text-gray-300">Publication</label>

                        <input type="email" className="mt-2 block w-[275px] placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                    </div>


                </div>
                <div className="grid gap-4 lg:gap-0 grid-cols-1 lg:grid-cols-2 mt-12">
                    <div className="flex items-center">
                        <div>
                            <label className="block font-medium text-[15px] text-gray-500 dark:text-gray-300">Awards</label>

                            <input type="email" className="mt-2 block w-[275px] placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                        </div>
                    </div>
                    <div>
                        <label className="block font-medium text-[15px] text-gray-500 dark:text-gray-300">Degrees</label>

                        <input type="email" className="w-[275px] mt-2 block placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                    </div>
                </div>

                <div className="grid gap-4 lg:gap-0 grid-cols-1 lg:grid-cols-2 mt-12">
                    
                        <div>
                            <label className="block font-medium text-[15px] text-gray-500 dark:text-gray-300">Reg_No</label>

                            <input type="email" className="mt-2 block w-[275px] placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                            <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <label className="block font-medium text-[15px] text-gray-500 dark:text-gray-300">Shorts_Descroption</label>

                            <input type="email" className="mt-2 block w-[275px] placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                            <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    
                </div>
                <div className='mt-8'>
                 <ReactQuill  theme="snow" value={value} onChange={setValue} />
                </div>
                <div className='w-[290px] mx-auto mt-6'>
                     <button type='submit' className='bg-blue-200 hover:bg-blue-300
                      rounded-lg w-full h-[45px] text-[17px] font-medium'>Submit Edit</button>
                </div>
            </form>
        </div>
    )
}
export default AdminEditDoctors