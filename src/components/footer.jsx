import { RiInstagramFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io";

import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";



export const Footer = () => {
  return (
    <>
    <h1 className="text-4xl  text-center underline decoration-yellow-700">Contact Me</h1>
     <div className="mt-6 flex flex-col items-center justify-center bg-gray-950">
        
        <div className="flex items-center justify-center gap-3 mt-10  flex-wrap ">
            <p className="bg-gray-900 hover:text-yellow-800 py-2 text-sm px-14 flex items-center w-50 gap-2 rounded-lg  "><IoMdMail className="text-3xl "/>ashishpatel7042@gmail.com</p>
            <p className="bg-gray-900 hover:text-yellow-800 py-2 text-sm px-6 flex items-center w-50 gap-2 rounded-lg"><MdLocalPhone className="text-3xl"/>9988776655</p>
            <p className="bg-gray-900 hover:text-yellow-800 py-2 text-sm px-5 flex items-center w-50 gap-2 rounded-lg"><FaLocationDot className="text-3xl"/>Sachin, Surat</p>
        </div>

        <div className="my-7 flex items-center gap-8 ">
        <a className="" href="">
            <RiInstagramFill className="text-4xl hover:text-pink-400  " />
          </a>
          <a href="">
            <TiSocialTwitter className="text-4xl hover:text-sky-400	" />
          </a>
          <a href="">
            <IoLogoGithub className="text-4xl hover:text-black hover:bg-white border rounded-full " />
          </a>
          <a href="">
            <TiSocialLinkedin className="text-4xl hover:text-sky-800	" />
          </a>
        </div>
     </div>
    </>
  )
}
