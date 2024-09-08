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
    <h1 className="text-7xl mt-20 text-center">Contect Me</h1>
     <div className="my-40 flex flex-col items-center justify-center bg-slate-500">
        
        <div className="flex items-center justify-center gap-5 mt-10  flex-wrap ">
            <p className="bg-gray-900 py-4 px-4 flex items-center w-80 gap-2 rounded-lg"><IoMdMail className="text-4xl"/>ashishpatel7042@gmail.com</p>
            <p className="bg-gray-900 py-4 px-4 flex items-center w-80 gap-2 rounded-lg"><MdLocalPhone className="text-4xl"/>9988776655</p>
            <p className="bg-gray-900 py-4 px-4 flex items-center w-80 gap-2 rounded-lg"><FaLocationDot className="text-4xl"/>Sachin, Surat</p>
        </div>

        <div className="my-10 flex items-center gap-8 ">
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
