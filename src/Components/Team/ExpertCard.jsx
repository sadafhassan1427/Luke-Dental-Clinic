// export default function ExpertCard ({ name, title, image }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
//       <img src={image} alt={name} className="h-60 w-full object-cover p-1 serviceImage rounded-3xl mb-3 hover:scale-101" />
//       <div className="flex flex-col">
//         <h3 className="font-semibold text-sm text-black">{name}</h3>
//         <p className="text-black text-xs">{title}</p>
//       </div>
//     </div>
//   );
// };

export default function ExpertCard ({ name, title, image }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex flex-col items-center">
      <img src={image} alt={name} className="h-60 w-full object-cover p-1 serviceImage rounded-3xl mb-3 hover:scale-101" />
      <div className="flex flex-col">
        <h3 className="font-semibold text-sm text-black">{name}</h3>
        <p className="text-black text-xs">{title}</p>
      </div>
    </div>
  );
};