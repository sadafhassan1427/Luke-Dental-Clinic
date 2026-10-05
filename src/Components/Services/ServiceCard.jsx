// export default function ServiceCard ({ title, description, services, image }) {
//   return (
//     <div className="bg-white shadow-md rounded-3xl p-6 flex flex-col items-center">
//       <img src={image} alt={title} className="w-full h-48 object-cover p-1 serviceImage rounded-3xl mb-4" />
//       <div className="flex flex-col place-items-start">
//         <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
//         <p className="text-black mb-3 text-left pb-2">{description}</p>
//         <ul className="list-none list-outside text-gray-700 pl-1 mb-4 text-left">
//           {services.map((service, index) => (
//             <li key={index}>{service}</li>
//           ))}
//         </ul>
//         <button className="bg-[#d5dbe6c4] text-black  px-4 py-2 rounded-2xl hover:bg-[#50e7f87d]">
//           Explore more
//         </button>
//       </div>

//     </div>
//   );
// }; 

export default function ServiceCard ({ title, description, services, image }) {
  return (
    <div className="bg-white shadow-md rounded-3xl p-4 sm:p-6 flex flex-col items-center w-full max-w-md mx-auto lg:max-w-none">
      <img src={image} alt={title} className="w-full h-48 object-cover p-1 serviceImage rounded-3xl mb-4" />
      <div className="flex flex-col place-items-start">
        <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
        <p className="text-black mb-3 text-left pb-2">{description}</p>
        <ul className="list-none list-outside text-gray-700 pl-1 mb-4 text-left">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <button className="bg-[#d5dbe6c4] text-black  px-4 py-2 rounded-2xl hover:bg-[#50e7f87d]">
          Explore more
        </button>
      </div>

    </div>
  );
}; 