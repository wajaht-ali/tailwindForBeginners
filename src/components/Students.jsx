import Cards from "./Cards"
import img from "../assets/goPro.jpg";
const Students = () => {
  return (
    <div className="Students h-auto w-100 flex flex-col flex-wrap items-center p-10 text-center">
        <div className="w-full h-auto flex flex-col items-center flex-wrap">
            <p className="text-indigo-800 font-bold text-3xl text-center md:text-4xl">&quot;Pure Hardwork, No Shortcut&apos;s!&quot;</p>
            <div className="border-b-4 border-yellow-400 w-36 h-1 rounded mt-2 md:mt-4 mb-12"></div>
            <div className="w-[100%] flex sm:flex-col  md:flex-row gap-6 flex-wrap items-center justify-around md:space-evenly">
                <Cards img={img} num={"600+"} msg={"Different Courses"}/>
                <Cards img={img} num={"700,000+"} msg={"Students Enrolled"}/>
                <Cards img={img} num={"10,000+"} msg={"Successful Transition"}/>
            </div>
        </div>
    </div>
  )
}

export default Students