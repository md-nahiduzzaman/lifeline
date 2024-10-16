
import axios from 'axios';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLoaderData } from 'react-router-dom';

import Swal from 'sweetalert2';

const AdminEditDoctors = () => {
    
    const [value, setValue] = useState('');
    const [selectedFile, setSelectedFile] = useState<any>(null);
    let photo:any='';

    const singleData: any = useLoaderData()
    console.log(singleData)
    const handleSubmit = ((e: any) => {
        e.preventDefault()
        if (!selectedFile) {
           
            alert('Please Select a photo')
            
            return
        }
        
        const email = singleData.email;
        const experience = e.target.experience.value;
        const checked_patient = e.target.checked_patient.value;
        const speciality = e.target.speciality.value;
        const visit = e.target.visit.value;
 
        const time1 = e.target.degree.value;
        const time = time1.split(',')
       
        const date1 = e.target.reg.value;
        const date = date1.split(',');
        
        const short_des = e.target.short_des.value;
        const long_des = value;   

        const form: any = new FormData(e.target)
        console.log(form)
        const image2: any = form.get('image')
        const data: any = new FormData()
        data.append("image", image2)
        
        fetch('https://api.imgbb.com/1/upload?key=58c258f947a2113010411cf51afd6eec', {
            method: 'POST',
            body: data,
        })
            .then((res: any) => {
                return res.json()
            })
            .then((data: any) => { 

                if (data.data.url) {
                    photo=data.data.url;
                    const updateDoc = {
                        speciality, 
                        checked_patient, date, experience, email,
                        visit, time, short_des, long_des, photo
                    }
                   
                    axios.put(`https://lifeline-server.vercel.app/admin-edit-doctor/${singleData._id}`, updateDoc, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                    .then((response) => {
                        Swal.fire("Data updated successfully");
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.error('Error updating doctor data:', error);
                    });
                }
            })
    })
    return (
        <div>
            <h1 className="text-3xl font-medium text-center">Let's Edit Any Data You Want</h1>
            <div>
                <p className="mt-2 text-center">Warning: Editing may cause unexpected changes. Proceed with caution
                    <span className="text-red-400 lg:hidden"> !</span></p>

            </div>

            <form onSubmit={handleSubmit} action="" className="mt-12 bg-blue-50 shadow-2xl p-4 py-7 rounded-xl">

                <div className="grid gap-4 lg:gap-0 grid-cols-1 lg:grid-cols-2 mt-12">
                    <div>
                        <label className="block font-medium text-[15px] text-gray-500 dark:text-gray-300">Experience</label>

                        <input name='experience' type="text" placeholder={`${singleData.experience}`} className="mt-2 block w-[275px] placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                    </div>


                    <div className="">
                        <label className="block font-medium text-[15px] mb-2 text-gray-500 dark:text-gray-300">Image_Url</label>
                        <input onChange={(e: any) => {
                            setSelectedFile(e.target.files[0])
                        }}
                            type="file"
                            name="image"
                            className="w-[275px] h-[42px] rounded-md border-[1px] border-gray-600 appearance-none file:h-full file:py-2 file:px-4 file: file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-300"
                        />

                    </div>
                </div>
                <div className="grid gap-4 lg:gap-0 grid-cols-1 lg:grid-cols-2 mt-12">
                    <div>
                        <label className="block font-medium text-[15px] text-gray-500 dark:text-gray-300">checked_patient</label>

                        <input name='checked_patient' type="number" placeholder={`${singleData.total_patient_checkups}`} className="mt-2 block w-[275px] placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                    </div>
                    <div>
                        <label className="block font-medium text-[15px] text-gray-500 dark:text-gray-300">Speciality</label>

                        <input name='speciality' placeholder={`${singleData.specialty}`} type="text" className="mt-2 block w-[275px] placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                    </div>

                </div>
                <div className="grid gap-4 lg:gap-0 grid-cols-1 lg:grid-cols-2 mt-12">
                    <div className="flex items-center">
                        <div>
                            <label className="block font-medium text-[15px] text-gray-500 dark:text-gray-300">Visit Charge</label>

                            <input name='visit' type="number" className="mt-2 block w-[275px] placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                        </div>
                    </div>
                    <div>
                        <label className="block font-medium text-[15px] text-gray-500 dark:text-gray-300">Visiting Time <span>(if 2 or 3 time use ",")</span></label>

                        <input name='degree' placeholder="10:00am-12:00pm, 8:00pm-10:00pm" type="text" className="w-[275px] mt-2 block placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                    </div>
                </div>

                <div className="grid gap-4 lg:gap-0 grid-cols-1 lg:grid-cols-2 mt-12">

                    <div>
                        <label className="block font-medium text-[15px] text-gray-500 dark:text-gray-300">Date <span> (format:Sun,Mon)</span></label>

                        <input name='reg' type="text" className="mt-2 block w-[275px] placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                        <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <label className="block font-medium text-[15px] text-gray-500 dark:text-gray-300">Shorts_Descroption</label>

                        <input name='short_des' type="text" className="mt-2 block w-[275px] placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                        <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                </div>
                <div className='mt-8'>
                    <ReactQuill theme="snow" value={value} onChange={setValue}/>
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