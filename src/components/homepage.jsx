import { RiInstagramFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

import { FaMinus } from "react-icons/fa";

export const Homepage = () => {
  return (
    <>
      <div className="  flex flex-col items-center justify-between px-10 py-5 ">
        <div className=" flex flex-col order-2">
          <h1 className="text-2xl  ">
            I'm{" "}
            <span className="text-yellow-700 text-4xl underline underline-offset-4 decoration-white">
              Ashish Patel
            </span>
          </h1>
          <p className="underline decoration-yellow-700 text-center text-xl mt-2">
            Front-End Developer{" "}
          </p>
          <button className=" rounded py-3 mt-7 w-full border  text-yellow-800 border-yellow-800 hover:bg-yellow-800 hover:text-white shadow-lg shadow-yellow-800/30">
            Contact Me
          </button>
        </div>

        <div className="   flex items-center justify-center my-10 order-1 ">
          <img
            className="w-80 border-double border-4 border-yellow-700"
            src="images/demo-img.jpg"
            alt=""
          />
        </div>

        <div className="flex items-center justify-center  flex-row gap-2 order-3 ">
          <h1 className="h-20 ml-4 text-8xl font-thin text-start text-yellow-700">
            -
          </h1>
          <div className="flex items-center justify-center  flex-row gap-2 ">
            <a href="">
              <IoMdMail className="text-2xl hover:text-pink-400  " />
            </a>
            <a href="">
              <MdLocalPhone className="text-2xl hover:text-sky-400	" />
            </a>
            <a href="">
              <IoLogoGithub className="text-2xl hover:text-black hover:bg-white border rounded-full " />
            </a>
            <a href="">
              <TiSocialLinkedin className="text-2xl hover:text-sky-800	" />
            </a>
          </div>
          <h1 className="h-20 ml-4  text-8xl font-thin text-end text-yellow-700">
            -
          </h1>
        </div>
      </div>

      <div className="  p-10">
        <h1 className="text-4xl mb-2 text-stat underline decoration-yellow-700">
          About
        </h1>
        <div className="">
          <p className="flex text-gray-500 text-left ">
            <FaMinus className="text-yellow-700 text-9xl mr-2 h-6" />
            Lorem, ipsum dolor sit amet consectetur adipis icing elit. Rerum
            sapiente volupt atem dolorem asper natur dolores voluptas incid unt
            omnis, necessi tatibus expedita deserunt perspiciatis fugiat sequi
            nesciunt vel dignissimos nihil sed odit? Doloribus ipsam quasi
            expedita alias! Accusantium neque eum laudantium voluptas aperiam
            porro perferendis odit facere culpa, ipsa excepturi quibusdam
            dignissimos.
          </p>
        </div>
      </div>
    </>
  );
};
