// eslint-disable-next-line react/prop-types
const Cards = ({img, num, msg}) => {
  return (
    <div className='Cards flex flex-col  rounded overflow-hidden bg-zinc-300'>
        <img className="h-[200px] w-[250px] object-cover" src={img} alt="myImage" />
        <p className="font-bold text-xl my-1 text-slate-800">{num}</p>
        <p className="text-2xl font-bold text-slate-600">{msg}</p>
    </div>
  )
}

export default Cards