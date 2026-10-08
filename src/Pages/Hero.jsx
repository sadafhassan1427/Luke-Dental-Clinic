import "../../public/styles/style.css";
import WorkingHours from '../Components/Stick Components/WorkingHours';
import Navbar from '../Components/Stick Components/Navbar';

export default function Hero() {
  return (
    <div className="unbounded-font pt-22 bg-[#e9f3ff] overflow-x-hidden" id="home">
      <Navbar />
      <div className="flex flex-col gap-8 mx-auto w-full max-w-[1700px] py-6 md:py-10 lg:flex-row lg:items-center lg:gap-0">
        <div className="lg:w-[58%]">
          <div className="flex flex-col items-start pl-6 pr-6 md:pr-10 text-[#131c15]">
            <h1 className="unbounded-font heroHeading mt-4 lg:mt-10 leading-tight text-xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
              Your Perfect Smile
            </h1>
            <h1 className="unbounded-font heroHeading pb-4 lg:pb-5  leading-tight text-xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
              Awaits You here
            </h1>
            <p className="pl-2 font-sans text-sm sm:text-base">Advanced dental care with a gentle touch.</p>
            <p className="pl-2 font-sans text-sm sm:text-base">Book your appointment today.</p>
          </div>

          <div className="flex flex-col gap-3 px-6 mt-6 sm:flex-row md:items-start md:mt-10">
            <WorkingHours />
            <div className="flex flex-col items-center justify-center w-full py-5 sm:py-0 sm:flex-1 min-w-0 md:flex-none md:h-33 md:w-56 xl:w-60 rounded-3xl bg-[#50e7f87d] text-[#131c15] bigButton">
              <div className="bg-[#ffffff] rounded-4xl w-8 h-8 flex justify-center items-center mb-3 bigButtonDiv">
                <i className="fa-solid fa-arrow-right-long transform rotate-315 "></i>
              </div>
              <button className="text-sm md:text-base text-center">Book Appointment</button>
            </div>
          </div>
        </div>
        <img
          className="hidden lg:block mx-auto lg:w-[38%] aspect-square object-cover rounded-4xl"
          src="/assets/heroimg.jpg"
          alt="hero"
        />
      </div>
    </div>
  );
};