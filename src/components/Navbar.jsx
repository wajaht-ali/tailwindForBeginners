
const Navbar = () => {
  return (
    <div className="Navbar h-14 w-full bg-slate-300 text-black flex justify-between px-4
    items-center md:px-4">
        <div className="text-2xl font-bold text-indigo-600">PW SKills</div>
        <ul className="md:flex hidden font-semibold">
            <li className="mx-[20px] cursor-pointer">Home</li>
            <li className="mx-[10px] cursor-pointer">About Us</li>
            <li className="mx-[10px] cursor-pointer">Contact Us</li>
        </ul>
        <div className="hidden md:block bg-indigo-600 text-white p-2 rounded cursor-pointer font-semi-bold">Login/Signup</div>
        <div className="md:hidden">
            <a className="text-4xl" href="#">&#8801;</a>
        </div>
    </div>
  )
}

export default Navbar