// import img from "./a-logo.png"
// import { GrFormSearch } from "react-icons/gr";
// import { FaReact } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { TbHexagonLetterAFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      {/* <div className="flex items-center justify-between border-b-2 border-yellow-900 border-opacity-40 bg-gradient-to-r    px-8  md:flex md:items-center md:justify-between  "> */}

      <div className="container mx-auto flex items-center justify-between bg-gradient-to-br from-yellow-600 via-yellow-800 to-yellow-900  w-full  px-8 py-2  ">
        <div className=" w-full ">
          <TbHexagonLetterAFilled className="text-4xl hover:text-black  " />
        </div>

        <div className=" flex items-center justify-end  w-full text-right invisible lg:visible  md:visible xl:visible">
          <ul className=" ">
            <li className=" ">
              <a
                className="m-3 font-bold text-lg    border-black  hover:border-b-2  hover:border-white"
                href=""
              >
                About
              </a>
              <a
                className="m-3  font-bold text-lg  border-black  hover:border-b-2  hover:border-white"
                href=""
              >
                Projects
              </a>
              <a
                className="m-3  font-bold text-lg  border-black  hover:border-b-2  hover:border-white"
                href=""
              >
                Contact
              </a>
            </li>
            
          </ul>
          <div className="sm:mr-7">
          <FaBars className="text-4xl  hover:text-yellow-600 visible md:invisible " />
          </div>
        </div>
        

        {/* <div className="  w-full  text-right invisible lg:visible md:visible xl:visible">
          <ul className=" ">
            <li className=" ">
              <a
                className="m-3 font-bold text-lg    border-black  hover:border-b-2  hover:border-white"
                href=""
              >
                About
              </a>
              <a
                className="m-3  font-bold text-lg  border-black  hover:border-b-2  hover:border-white"
                href=""
              >
                Projects
              </a>
              <a
                className="m-3  font-bold text-lg  border-black  hover:border-b-2  hover:border-white"
                href=""
              >
                Contact
              </a>
            </li>
          </ul>
        </div> */}

        {/* <div className=" flex items-center pr-5">
          <input
            className="h-10 w-72 rounded-l-lg  text-left pl-5 bg-gray-600 text-base placeholder-slate-300 shadow-inner"
            type="text"
            placeholder="Search"
          />
          <GrFormSearch className="searchlogo h-10 rounded-r-lg   w-12   bg-gray-700 text-yellow-600 " />
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
