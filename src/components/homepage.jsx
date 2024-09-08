import { RiInstagramFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io";

import { FaMinus } from "react-icons/fa";

export const Homepage = () => {
  return (
    <>
      <div className="  flex items-center justify-between px-20 py-28 ">
        <div className="text-3xl flex flex-col gap-6">
          <h1 className="text-4xl ">
            i'm <span className="text-yellow-700 text-6xl">Ashish patel</span>
          </h1>
          <p className="">React Developer </p>
          <button className=" rounded py-3 mt-7 w-60 border text-yellow-800 border-yellow-800 hover:bg-yellow-800 hover:text-white shadow-lg shadow-yellow-800/30">
            Contect Me
          </button>
        </div>

        <div className=" w-96">
          <img src="images/demo-img.jpg" alt="" />
        </div>

        <div className="flex items-center justify-center ml-10 flex-col gap-5  ">
          <h1 className="h-24 text-8xl font-thin text-center text-yellow-700">
            |
          </h1>
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

      <div className="  px-20 py-28">
        <h1 className="text-7xl mb-5">About</h1>
        <div className="">
          
          <p className="flex ">
          <FaMinus className="text-yellow-700 text-9xl  h-6"/>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            sapiente voluptatem dolorem aspernatur dolores voluptas incidunt id
            omnis, necessitatibus expedita deserunt perspiciatis fugiat sequi
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
