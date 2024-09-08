export const Icons = (props) => {
  return (
    <div className="w-52 h-52 p-14  rounded-2xl bg-gray-800 flex flex-col items-center">
            <img  src={props.img} className="" alt="" />
            <h2 className="mt-4">{props.title}</h2>
        </div>
  )
}