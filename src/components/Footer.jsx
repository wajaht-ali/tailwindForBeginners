import img from '../assets/goPro.jpg';
import img2 from '../assets/sports1.jpg';
const Footer = () => {
    return (
        <div className="footer h-auto w-full bg-slate-800 text-white flex flex-col md:flex-row px-4 pt-8 md:px-12 flex-wrap justify-between gap-y-1">
            <div className='w-64 flex flex-col border-2 border-white p-1 items-center'>
                <img className=' h-[100px] w-[100px] object-cover' src={img} alt="" />
                <p className="text-lg">Lorem ipsum dolor sit amet.</p>
                <img className='h-[120px] w-[120px] object-cover rounded' src={img2} alt="" />
            </div>
            <div className='w-64 flex flex-col border-2 border-white p-1 items-center md:justify-evenly'>
                <div>
                    <h2>PW Skills</h2>
                    <div className="w-20 h-1 border-b-2 border-yellow-300 rounded-md"></div>
                </div>
                <div>
                    <ul className="list-none">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div>3</div>
            <div>4</div>
        </div>
    )
}

export default Footer