import img from "../assets/goPro.jpg";
import img2 from "../assets/mediaCam.jpg";
const Hero = () => {
  return (
    <div className="Hero w-full">
        <img className="md:hidden w-full h-[90vh]" src={img} alt="Image1" />
        <img className="hidden md:block h-[90vh] w-full object-fit" src={img2} alt="Image2" />
    </div>
  )
}

export default Hero