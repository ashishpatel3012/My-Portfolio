import { Icons } from "./icons";

export const My_skills = () => {
  return (
    <>
    <div className="container mx-auto">
      {/* <div className=" container  flex items-center justify-center flex-wrap w-3/5	mx-auto gap-16">

        <div className="w-52 h-52 p-14  rounded-2xl bg-gray-800 flex flex-col items-center">
            <img  src="./images/html.png" className="" alt="" />
            <h2 className="mt-4">HTML</h2>
        </div>
        <div className="w-52 h-52 p-14 rounded-2xl bg-gray-800 flex flex-col items-center">
            <img  src="./images/css.png" className="" alt="" />
            <h2 className="mt-4">CSS</h2>
        </div>
        <div className="w-52 h-52 p-14 rounded-2xl bg-gray-800 flex flex-col items-center">
            <img  src="./images/js.png" className="" alt="" />
            <h2 className="mt-4">JAVASCRIPT</h2>
        </div>
        <div className="w-52 h-52 p-14 rounded-2xl bg-gray-800 flex flex-col items-center">
            <img  src="./images/bootstrap-5.png" className="" alt="" />
            <h2 className="mt-4">BOOTSTRAP</h2>
        </div>
        <div className="w-52 h-52 p-14 rounded-2xl bg-gray-800 flex flex-col items-center">
            <img  src="./images/tailwindcss.png" className="" alt="" />
            <h2 className="mt-10  text-sm">TAILWIND CSS</h2>
        </div>
        <div className="w-52 h-52 p-14 rounded-2xl bg-gray-800 flex flex-col items-center">
            <img  src="./images/react-js.png" className="" alt="" />
            <h2 className="mt-4">REACT JS</h2>
        </div>
        <div className="w-52 h-52 p-14 rounded-2xl bg-gray-800 flex flex-col items-center">
            <img  src="./images/git-icon.png" className="" alt="" />
            <h2 className="mt-4">GIT</h2>
        </div>
        <div className="w-52 h-52 p-14 rounded-2xl bg-gray-800 flex flex-col items-center">
            <img  src="./images/figma.png" className="" alt="" />
            <h2 className="mt-4">FIGMA</h2>
        </div>
    </div> */}

      <h1 className="text-4xl mb-8  text-center underline underline-offset-[12px] decoration-yellow-700  lg:text-7xl lg:my-24 ">

      {/* <h1 className="text-4xl mb-8  text-center underline decoration-yellow-700  lg:text-7xl "> */}

        My Skills
      </h1>
      <div className="  border rounded-md border-gray-500 p-10 my-10 md:p-8 lg:flex lg:justify-center lg:py-24">
        <div className=" container   flex items-center justify-center flex-wrap gap-2 md:flex md:mx-auto lg:gap-5  lg:w-3/4 ">
          <Icons img="./images/html.png"  title="HTML" />
          <Icons img="./images/css.png" title="CSS" />
          <Icons img="./images/js.png" title="JAVASCRIPT" />
          <Icons img="./images/bootstrap.png" title="BOOTSTRAP" />
          <Icons img="./images/tailwindcss.png" title="TAILWIND CSS" />
          <Icons img="./images/react-js.png" title="REACT JS" />
          <Icons img="./images/git-icon.png" title="GIT" />
          <Icons img="./images/figma.png" title="FIGMA" />
        </div>
      </div>
      </div>
    </>
  );
};
