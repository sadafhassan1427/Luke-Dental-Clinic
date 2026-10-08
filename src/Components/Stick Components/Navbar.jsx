import { useState } from "react";

const links = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#bookPage" },
  { label: "Doctors", href: "#team" },
  { label: "Reviews", href: "#testimonials" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1700px] mt-3 p-2.5 bg-[#d5dbe6c4] text-white rounded-3xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-[#ffffff] rounded-4xl w-8 h-8 flex justify-center items-center">
            <i className="fa-solid fa-tooth text-[#131c15]"></i>
          </div>
          <p className="text-[#131c15] px-2 font-medium font-sans">Luke Dental</p>
        </div>

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

          <button className="sm:hidden mt-2 bg-[#131c15] text-white px-4 py-2 rounded-full font-normal font-sans">
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};