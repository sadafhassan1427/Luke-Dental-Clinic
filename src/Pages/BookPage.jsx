export default function BookPage() {
    return (
        <div className="bookPage flex flex-col items-start justify-center pl-5 pr-4 py-8 sm:pl-10 sm:py-10 rounded-4xl mt-1" id="bookPage">
            <h1 className="unbounded-font font-bold ytf text-lg sm:text-3xl md:text-4xl lg:text-[2.5rem]">Your Perfect Smile</h1>
            <p className="text-black font-semibold pl-3 text-xs sm:text-base"> in Minutes</p>
            <p className="text-black pl-3 pt-2 sm:pt-3 text-xs sm:text-base">Want a brighter smile? Schedule your visit today!</p>
            <div className="flex flex-row items-center mt-4 sm:mt-5 w-full max-w-56 sm:max-w-70 text-black bg-white rounded-4xl font-bold pl-5 sm:pl-7 pr-2 py-1.5 sm:py-2 text-sm sm:text-base bigButton1">
                <h4>Book Now</h4>
                <div className="bg-white rounded-4xl w-7 h-7 ml-10 sm:ml-18 flex justify-center items-center bigButton1Div">
                    <i className="fa-solid fa-arrow-right-long text-black transform rotate-315  "></i>
                </div>
            </div>
        </div>
    );
};