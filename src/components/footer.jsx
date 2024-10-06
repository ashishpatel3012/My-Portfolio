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
    <div className="container mx-auto">
    <h1 className="text-4xl mb-12  text-center underline underline-offset-[12px] decoration-yellow-700 lg:text-7xl lg:mt-28 lg:mb-20">Contact Me</h1>
     <div className="mt-6 p-8 flex flex-col items-center justify-center border border-gray-500 rounded-md">
        
        <div className="flex items-center justify-center gap-3 mt-3  flex-wrap sm:w-full lg:w-max ">
            <p className="bg-gray-800 hover:text-yellow-800 py-2 text-sm px-28  flex items-center justify-center w-50 gap-2 rounded-lg sm:w-full"><MdLocalPhone className="text-3xl"/>9988776655</p>
            <p className="bg-gray-800 hover:text-yellow-800 py-2 text-sm px-14  flex items-center justify-center w-50 gap-2 rounded-lg sm:w-full"><IoMdMail className="text-3xl "/>ashishpatel7042@gmail.com</p>
            <p className="bg-gray-800 hover:text-yellow-800 py-2 text-sm px-28  flex items-center justify-center w-50 gap-2 rounded-lg sm:w-full"><FaLocationDot className="text-3xl"/>Sachin, Surat</p>
        </div>

        <div className="my-7 flex items-center gap-6 ">
        <a className="" href="">
            <RiInstagramFill className="text-3xl hover:text-yellow-700  " />
          </a>
          <a href="">
            <TiSocialTwitter className="text-3xl hover:text-yellow-700	" />
          </a>
          <a href="">
            <IoLogoGithub className="text-3xl hover:text-yellow-700 hover:bg-white border rounded-full " />
          </a>
          <a href="">
            <TiSocialLinkedin className="text-3xl hover:text-yellow-700	" />
          </a>
        </div>
     </div>
     </div>
    </>
  )
}
