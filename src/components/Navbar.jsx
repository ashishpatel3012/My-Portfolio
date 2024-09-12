// import img from "./a-logo.png"
import { GrFormSearch } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";



const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b-2 border-yellow-900 border-opacity-40 bg-gradient-to-r    px-8  md:flex md:items-center md:justify-between  ">
        <div>
          {/* <FaReact className="text-5xl  text-yellow-800" /> */}
          {/* <h1 className="text-2xl  text-yellow-800">AP</h1> */}

          <img className="w-14 text-white " src="/images/A-logo2.png " alt="" />
        </div >
          <FaBars className="text-4xl text-black hover:text-yellow-600 md:hidden "/>
        <div className="  w-full  text-right   ">
          
          <ul className=" ">
            <li className=" ">
              <a
                className="m-3 font-bold text-lg    border-black  hover:border-b-2  hover:border-yellow-700"
                href=""
              >
                About
              </a>
              <a className="m-3  font-bold text-lg  border-black  hover:border-b-2  hover:border-yellow-700" href="">
                Projects
              </a>
              <a className="m-3  font-bold text-lg  border-black  hover:border-b-2  hover:border-yellow-700" href="">
                Contact
              </a>
            </li>
          </ul>
        </div>

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
