/* eslint-disable react/prop-types */
import img from '../assets/sports1.jpg'
const Products = () => {
    return (
        <div className="Products h-auto md:h-[80vh] bg-slate-200 flex flex-col">
            <div className="w-full items-center flex flex-col mt-10">
                <div className="text-slate-800 font-bold text-3xl mt-4">
                    Our Products
                </div>
                <div className="border-slate-500 border-b-4 w-36 h-1 rounded mt-1">
                </div>
            </div>
            <div className="w-[full] md:w-full mt-10 md:mt-10 flex flex-col md:flex-row md:justify-around md:flex-wrap items-center md:items-center md:m-auto">
                <div className='flex flex-col text-black p-2 rounded border-2 border-slate-500 w-[220px] items-center text-center my-3'>
                    <img className="w-[180px] h-[160px] rounded" src={img} alt="myImage" />
                    <p className="font-bold text-xl">PW Skills lab</p>
                    <p className="text-black">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className='flex flex-col text-black p-2 rounded border-2 border-slate-500 w-[220px] items-center text-center my-3'>
                    <img className="w-[180px] h-[160px] rounded" src={img} alt="myImage" />
                    <p className="font-bold text-xl">PW Skills lab</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className='flex flex-col text-black p-2 rounded border-2 border-slate-500 w-[220px] items-center text-center my-3'>
                    <img className="w-[180px] h-[160px] rounded" src={img} alt="myImage" />
                    <p className="font-bold text-xl">PW Skills lab</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className='flex flex-col text-black p-2 rounded border-2 border-slate-500 w-[220px] items-center text-center my-3'>
                    <img className="w-[180px] h-[160px] rounded" src={img} alt="myImage" />
                    <p className="font-bold text-xl">PW Skills lab</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className='flex flex-col text-black p-2 rounded border-2 border-slate-500 w-[220px] items-center text-center my-3'>
                    <img className="w-[180px] h-[160px] rounded" src={img} alt="myImage" />
                    <p className="font-bold text-xl">PW Skills lab</p>
                    <p className="text-black">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default Products