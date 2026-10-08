export default function WorkingHours() {
  return (
    <div className="flex flex-col w-full sm:flex-1 min-w-0 md:flex-none md:w-72 xl:w-80 rounded-3xl bg-[#d5dbe6c4] font-semibold items-start p-4 text-[#131c15]">
      <h5 className="text-sm sm:text-base">Working Hours</h5>
      <div className="flex flex-col w-full gap-2 py-3 text-sm md:text-base md:gap-0 md:py-4">
        <div className="flex flex-row justify-between gap-3 sm:flex-col sm:gap-0 md:flex-row md:gap-3 font-medium font-sans"><p>Monday - Friday</p><p>9 AM - 9 PM</p></div>
        <div className="flex flex-row justify-between gap-3 sm:flex-col sm:gap-0 md:flex-row md:gap-3 font-medium font-sans"><p>Saturday, Sunday</p><p>10 AM - 6 PM</p></div>
      </div>
    </div>
  );
};