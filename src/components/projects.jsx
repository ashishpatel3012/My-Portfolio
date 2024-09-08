
import data from "./ProjectcCardData.json";

export const Projects = () => {
  return (
    <>
      <div className="mt-40  mx-10 ">
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
      </div>
    </>
  );
};
