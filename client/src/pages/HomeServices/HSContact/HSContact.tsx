import emailjs from '@emailjs/browser';
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa6"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { Link } from "react-router-dom"
const HSContact :React.FC = () => {
  const [sendMessage, setSendMessage] = useState('');
  const handileClick =( e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as any
    const fullName = target.fullName.value;
    const email = target.email.value;
    const message = target.message.value;
    console.log(fullName, email, message);
    const tampeltName = {
      from_name: fullName,
      email_id: email,
      to_name: 'Life line',
      message: message,
    };
    emailjs
      .send(
        'service_13f844g',
        'template_ge2kf4v',
        tampeltName,
        'SA1wdj_co8cqkTOI7'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setSendMessage('success fully your message is done');
        },
        error => {
          console.log('FAILED...', error.text);
          setSendMessage(error.text);
        }
      );
  };
  console.log(sendMessage)
  return (
    <div className="my-[110px] bg-[#23085A] text-white py-10 ">
    <div className=" rounded-lg lg:p-12 p-3  max-w-screen-xl mx-auto">
      <h2 className="text-xl font-bold">Get in Touch with Us</h2>
      <p className=" lg:w-2/3 mt-3">
        Feel free to contact me via email or through my social media
        profiles. Whether you have a question, want to discuss a project, or
        just want to connect, I m here to help!
      </p>

      <div className=" lg:flex gap-6  mt-8 ">
        <form onSubmit={handileClick} className="lg:w-1/2">
          <div className=" grid gap-6  ">
            <div>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full  text-neutral"
                name="fullName"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered w-full text-neutral"
                name="email"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Enter Your message"
                id=""
                required
                className="w-full p-3  text-neutral  bg-white min-h-32 bg-transparent border"
              ></textarea>
<p className='font-bold'>{sendMessage}</p>
              <button
                type="submit"
                className="btn mt-4  bg-[#5dEB4B]  text-white border-none"
              >
                Send message
              </button>
            </div>

          </div>
        </form>

        <div className="lg:w-1/2">
          <p>
          We are currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want to run past me.
            You can contact anytime at 24.
          </p>

          <div className="mt-7">
            <p className="  underline">0156891****</p>

            <p className=" mt-4  underline">
lifeline1cout009@gmail.com
            </p>

            <p className="mt-4 underline ">
            123 Life Line Street, Dhaka, Bangladesh
            </p>
            <div className="text-3xl mt-10 flex gap-5">
              <Link
                target="_blank"
                to={
                  'https://web.facebook.com/profile.php?id=100089601605572'
                }
              >
                <FaFacebook />
              </Link>
              <Link
                target="_blank"
                className="cursor-pointer"
                to={'https://www.linkedin.com/in/sanim-mia'}
              >
                <SiLinkedin/>
              </Link>
              <Link
                target="_blank"
                className="cursor-pointer"
                to={'https://github.com/SanimSRk'}
              >
                <SiGithub />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HSContact
