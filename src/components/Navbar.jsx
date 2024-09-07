// import img from "./a-logo.png"
import { IoIosSearch } from "react-icons/io";
import { FaReact } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-5 mt-5">
        <div>
          <FaReact className="text-5xl ml-5 text-yellow-800" />
          {/* <img className="w-20 text-white " src="public/images/a-logo.png " alt="" /> */}
        </div>

        <div className="  w-full  text-right mr-20">
          <ul className="">
            <li className=" ">
              <a
                className="m-4 hover:text-yellow-600 hover:border-b-2 border-yellow-600 "
                href=""
              >
                About
              </a>
              <a className="m-4  hover:text-yellow-600 hover:border-b-2 border-yellow-600" href="">
                Portfolio
              </a>
              <a className="m-4  hover:text-yellow-600 hover:border-b-2 border-yellow-600" href="">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className=" flex items-center pr-5">
          <input
            className="h-10 w-72  text-left pl-5 bg-gray-600 text-base placeholder-yellow-600 shadow-inner"
            type="text"
            placeholder="Search"
          />
          <IoIosSearch className="h-10 text-sm w-12  bg-gray-700 text-yellow-600 " />
        </div>
      </div>
    </>
  );
};

export default Navbar;
