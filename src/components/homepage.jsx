import { RiInstagramFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

import { FaMinus } from "react-icons/fa";

export const Homepage = () => {
  const scroll = ScrollReveal({
    reset: true,
    duration: 2600,
    distance: "60px",
  });
  scroll.reveal(".img-transform", { delay: 400, origin: "top" });
  scroll.reveal(".text-transform", { delay: 300, origin: "left" });

  return (
    <>
    <div className="container mx-auto  ">
      <div className="  flex flex-col items-center  justify-between  px-10 py-5 md:flex md:flex-row md:items-center  md:p-8 lg:my-10 ">
        <div className="text-transform flex flex-col order-2 md:order-1 md:ml-10  md:flex md:items-center md:mt-20 lg:text-3xl lg:ml-24">
          <h1 className="text-1xl text-center  font-thin   ">
            I'm{" "}
            <span className="animate- text-yellow-700 text-4xl font-bold  bg-gradient-to-tr from-yellow-600 to-neutral-600 inline-block text-transparent bg-clip-text sm:text-4xl lg:text-5xl ">
              Ashish Patel
            </span>
          </h1>
          <p className="underline underline-offset-[3px] decoration-yellow-700 text-center text-xl mt-2 lg:text-2xl">
            Front-End Developer{" "}
          </p>
          {/* <button className=" rounded py-3 mt-6 w-full border  text-yellow-800 border-yellow-800 hover:bg-yellow-800 hover:text-white shadow-lg shadow-yellow-800/30 md:py-2 md:w-44 lg:py-4 lg:px-32 lg:w-full" >
            Contact Me
          </button> */}
          
            <div className="max-w-7xl mx-auto mt-8 ">
              <div className="relative group cursor-pointer">
                <div className="absolute  -inset-1 bg-gradient-to-r from-blue-700  to-yellow-800 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative  py-6 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <div className="space-y-2 text-center">
                    <p className="text-gray-200 w-96  md:w-72 lg:w-96  ">Contact Me</p>
                  </div>
                </div>
              </div>
            </div>
          
        </div>

        <div className="   flex items-center justify-center my-10 order-1 md:order-2 img-transform  ">
          <img
            className="min-w-80 border-double border-8 border-yellow-700 md:min-w-64 md:w-40 md:ml-10 md:rounded-full lg:w-96 lg:ml-24"
            src="images/demo-img.jpg"
            alt=""
          />
        </div>

        <div className="flex items-center justify-center  flex-row gap-2 order-3 md:flex md:flex-col md:items-center md:justify-center  ">
          <h1 className="h-20 ml-4 text-8xl font-thin text- text-yellow-700 ">
            -
          </h1>

          <div className="flex items-center justify-center  flex-row gap-2 md:flex md:flex-col md:items-center md:ml-4 md:gap-5 lg:mr-4 ">
            <a href="">
              <IoMdMail className="text-2xl hover:text-yellow-700 lg:text-4xl " />
            </a>
            <a href="">
              <MdLocalPhone className="text-2xl hover:text-yellow-700 lg:text-4xl	" />
            </a>
            <a href="">
              <IoLogoGithub className="text-2xl hover:text-yellow-700 hover:bg-white border rounded-full lg:text-4xl " />
            </a>
            <a href="">
              <TiSocialLinkedin className="text-2xl hover:text-yellow-700 lg:text-4xl	" />
            </a>
          </div>
          <h1 className="h-20 ml-4  text-8xl font-thin text-end text-yellow-700 ">
            -
          </h1>
        </div>
      </div>

      {/* ------------------------ */}

      <div className="  p-10 md:p-8 lg:my-32">
        <h1 className="text-4xl mb-8 text-center underline underline-offset-[12px] decoration-yellow-700 lg:text-7xl lg:my-24 ">
          About
        </h1>
        <div className="">
          <p className="flex text-gray-500 text-left  ">
            <FaMinus className="text-yellow-700 text-9xl mr-2 h-6 " />
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
      </div>
    </>
  );
};
