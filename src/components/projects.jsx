// import data from "./ProjectcCardData.json";
import { useState } from "react";
import data from "./data-projects.json";

export const Projects = () => {
  const [noOfElement, setNoOfElement] = useState(6);

  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };

  const slice = data.slice(0, noOfElement);
  return (
    <>
    <div className="container mx-auto  xl:container ">
      <h1 className="text-4xl mb-10  text-center underline underline-offset-[12px] decoration-yellow-700 lg:text-7xl lg:my-24">
        Projects
      </h1>

      <div className=" py-16 px-8  border border-gray-500 rounded-md flex flex-wrap items-center justify-center  gap-8 sm:p-16  md:p-12  lg:gap-12  ">
        {slice.map((data, id) => {
          return (
            <div key={id}  className=" hover:bg-gray-600  rounded-md  text-center text-2xl border border-gray-500 ">
              <img
                className="rounded-t bg-indigo-900 w-full  md:h-48 md:w-[320px] lg:w-[420px] lg:h-64  "
                src={data["image-url"] }
                alt="project image"

              />
              {/* <a className="text-center cursor-pointer p-2">{data.title}</a> */}
              <div className="h-14 flex items-center justify-center text-3xl font-bold border border-gray-500">
              <a className="text-center cursor-pointer py-2" href={data["project-link"]}>{data.title}</a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button
          className="bg-blue-600 my-6 px-3 py-1 text-sm font-light  rounded-full hover:bg-blue-900 lg:px-7 lg:py-3 lg:text-lg"
          onClick={() => loadMore()}
        >
          See more
        </button>
      </div>

      {/* <div className="mt-40  mx-10 ">
        <h1 className="text-7xl text-center">Projects</h1>
        <div className=" mt-28 flex items-center justify-center flex-wrap gap-10">
          {data.map((data, id) => {
            return (
              <div
                key={id}
                className="  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div>
                  <img src={data["image-url"]} alt="" />
                </div>
                <div className="p-5 flex flex-col  gap-5">
                  <h1 className="text-3xl font-medium">{data.title}</h1>
                  <p>{data.description}</p>

                  <button className=" bg-yellow-700  hover:bg-transparent border border-yellow-700 hover:text-yellow-700  max-w-28 py-2  rounded-md">
                    {data["btn-link"]}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      </div>
    </>
  );
};
