// export default function Navbar() {
//   return (
//     <nav
//       className="
//         fixed
//         left-1/2
//         top-3
//         z-50
//         flex
//         w-[calc(100%-2rem)]
//         -translate-x-1/2
//         items-center
//         justify-between
//         rounded-3xl
//         bg-[#d5dbe6c4]
//         p-2.5
//         text-white

//         mobile-lg:w-[calc(100%-3rem)]
//         tablet:w-[92%]
//         laptop:w-[90%]
//         desktop:w-[88%]
//       "
//     >

//       {/* LOGO */}
//       <div className="flex items-center">

//         <div
//           className="
//             flex
//             h-8
//             w-8
//             items-center
//             justify-center
//             rounded-full
//             bg-white
//           "
//         >
//           <i className="fa-solid fa-tooth text-[#131c15]"></i>
//         </div>

//         <p
//           className="
//             px-2
//             font-sans
//             text-sm
//             font-medium
//             text-[#131c15]

//             mobile-lg:text-base
//             laptop:text-lg
//           "
//         >
//           Luke Dental
//         </p>

//       </div>


//       {/* NAVIGATION LINKS */}
//       <div className="hidden tablet:flex">

//         <a
//           className="pageNavigation px-3 py-2 font-sans font-medium text-[#131c15]"
//           href="#about"
//         >
//           About Us
//         </a>

//         <a
//           className="pageNavigation px-3 py-2 font-sans font-medium text-[#131c15]"
//           href="#services"
//         >
//           Services
//         </a>

//         <a
//           className="pageNavigation px-3 py-2 font-sans font-medium text-[#131c15]"
//           href="#bookPage"
//         >
//           Contact Us
//         </a>

//         <a
//           className="pageNavigation px-3 py-2 font-sans font-medium text-[#131c15]"
//           href="#team"
//         >
//           Doctors
//         </a>

//         <a
//           className="pageNavigation px-3 py-2 font-sans font-medium text-[#131c15]"
//           href="#testimonials"
//         >
//           Reviews
//         </a>

//       </div>


//       {/* BOOK BUTTON */}
//       <div>
//         <button
//           className="
//             rounded-full
//             bg-[#131c15]
//             px-3
//             py-1.5
//             font-sans
//             text-xs
//             font-normal
//             text-white

//             mobile-lg:px-4
//             mobile-lg:text-sm

//             laptop:text-base

//             hover:bg-[#50e7f87d]
//             hover:text-[#131c15]
//           "
//         >
//           <span className="hidden mobile-lg:inline">
//             Book Appointment
//           </span>

//           <span className="mobile-lg:hidden">
//             Book
//           </span>
//         </button>
//       </div>

//     </nav>
//   );
// }

import { useState } from "react";

// The links live in one list so we don't have to write them twice
// (once for the big-screen menu, once for the phone menu).
const links = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#bookPage" },
  { label: "Doctors", href: "#team" },
  { label: "Reviews", href: "#testimonials" },
];

export default function Navbar() {
  // isOpen remembers: is the phone menu open (true) or closed (false)?
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1700px] mt-3 p-2.5 bg-[#d5dbe6c4] text-white rounded-3xl">
      {/* Top row: logo | links | buttons */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-[#ffffff] rounded-4xl w-8 h-8 flex justify-center items-center">
            <i className="fa-solid fa-tooth text-[#131c15]"></i>
          </div>
          <p className="text-[#131c15] px-2 font-medium font-sans">Luke Dental</p>
        </div>

        {/* Links: hidden on small screens, shown from 1024px (lg) and up */}
        <div className="hidden lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              className="text-[#131c15] px-3 py-2 pageNavigation font-medium font-sans"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: Book button (from 481px) + hamburger (below 1024px) */}
        <div className="flex items-center gap-2">
          <button className="hidden sm:block bg-[#131c15] text-white px-4 py-1.5 rounded-full font-normal font-sans hover:bg-[#50e7f87d] hover:text-[#131c15]">
            Book Appointment
          </button>

          <button
            type="button"
            className="flex lg:hidden items-center justify-center w-9 h-9 rounded-full bg-[#ffffff] text-[#131c15] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open or close the menu"
            aria-expanded={isOpen}
          >
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Phone / tablet menu: only exists while isOpen is true, and never on 1024px+ */}
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-1 mt-3 pt-3 border-t border-[#131c15]/10">
          {links.map((link) => (
            <a
              key={link.href}
              className="text-[#131c15] px-3 py-2 pageNavigation font-medium font-sans"
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* On the tiniest screens the Book button lives in here instead of the top row */}
          <button className="sm:hidden mt-2 bg-[#131c15] text-white px-4 py-2 rounded-full font-normal font-sans">
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};