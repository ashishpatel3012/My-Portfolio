export const Icons = (props) => {
  return (
    <div className="w-44 h-44 p-14 hover:bg-gray-700 rounded-2xl bg-gray-800 flex flex-col items-center">
            <img  src={props.img} className="" alt="" />
            <h2 className="mt-4 text-sm">{props.title}</h2>
        </div>
  )
}