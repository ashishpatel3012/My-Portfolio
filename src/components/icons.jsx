export const Icons = (props) => {
  return (
    <div className="  w-20 h-20  hover:bg-gray-300 rounded-md bg-black flex flex-col items-center justify-center lg:h-44 lg:w-44 lg:p-12  ">
       {/* <div className="w-44 h-44 p-14 hover:bg-gray-700 rounded-2xl bg-gray-800 flex flex-col items-center"> */}
            <img  src={props.img} className="w-10 lg:w-24" alt="" />
            {/* <h2 className="mt-1 text-sm">{props.title}</h2> */}
        </div>
  )
}