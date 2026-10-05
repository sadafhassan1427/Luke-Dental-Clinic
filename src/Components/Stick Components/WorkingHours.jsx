// export default function WorkingHours() {
//   return (
//     <div
//       className="
//         flex
//         w-full
//         flex-col
//         items-start
//         rounded-3xl
//         bg-[#d5dbe6c4]
//         p-5
//         font-semibold
//         text-[#131c15]

//         tablet:w-80
//         laptop:p-6
//       "
//     >

//       <h5 className="text-lg laptop:text-xl">
//         Working Hours
//       </h5>

//       <div
//         className="
//           grid
//           w-full
//           grid-cols-[1fr_auto]
//           gap-x-3
//           gap-y-2
//           py-4
//           font-sans
//           text-sm
//           font-medium

//           mobile-lg:text-base
//           laptop:text-lg
//         "
//       >

//         <p>Monday - Friday</p>
//         <p>9 AM - 9 PM</p>

//         <p>Saturday, Sunday</p>
//         <p>10 AM - 6 PM</p>

//       </div>

//     </div>
//   );
// }


// export default function WorkingHours() {
//   return (
//     <div className="flex flex-col w-full md:w-72 xl:w-80 rounded-3xl bg-[#d5dbe6c4] font-semibold items-start p-4 text-[#131c15]">
//       <h5>Working Hours</h5>
//       <div className="flex flex-col w-full py-4 text-sm sm:text-base">
//         <div className="flex flex-row justify-between gap-3 font-medium font-sans"><p>Monday - Friday</p><p>9 AM - 9 PM</p></div>
//         <div className="flex flex-row justify-between gap-3 font-medium font-sans"><p>Saturday, Sunday</p><p>10 AM - 6 PM</p></div>
//       </div>
//     </div>
//   );
// };


// export default function WorkingHours() {
//   return (
//     <div className="flex flex-col flex-1 min-w-0 md:flex-none md:w-72 xl:w-80 rounded-3xl bg-[#d5dbe6c4] font-semibold items-start p-3 sm:p-4 text-[#131c15]">
//       <h5 className="text-sm sm:text-base">Working Hours</h5>
//       <div className="flex flex-col w-full gap-2 py-3 text-xs sm:text-sm md:text-base md:gap-0 md:py-4">
//         <div className="flex flex-col md:flex-row md:justify-between md:gap-3 font-medium font-sans"><p>Monday - Friday</p><p>9 AM - 9 PM</p></div>
//         <div className="flex flex-col md:flex-row md:justify-between md:gap-3 font-medium font-sans"><p>Saturday, Sunday</p><p>10 AM - 6 PM</p></div>
//       </div>
//     </div>
//   );
// };











export default function WorkingHours() {
  return (
    <div className="flex flex-col w-full sm:flex-1 min-w-0 md:flex-none md:w-72 xl:w-80 rounded-3xl bg-[#d5dbe6c4] font-semibold items-start p-4 text-[#131c15]">
      <h5 className="text-sm sm:text-base">Working Hours</h5>
      <div className="flex flex-col w-full gap-2 py-3 text-sm md:text-base md:gap-0 md:py-4">
        {/* Day on the left, time on the right on phones; stacked in the narrow side-by-side cards (481-767px); back to one line from 768px */}
        <div className="flex flex-row justify-between gap-3 sm:flex-col sm:gap-0 md:flex-row md:gap-3 font-medium font-sans"><p>Monday - Friday</p><p>9 AM - 9 PM</p></div>
        <div className="flex flex-row justify-between gap-3 sm:flex-col sm:gap-0 md:flex-row md:gap-3 font-medium font-sans"><p>Saturday, Sunday</p><p>10 AM - 6 PM</p></div>
      </div>
    </div>
  );
};