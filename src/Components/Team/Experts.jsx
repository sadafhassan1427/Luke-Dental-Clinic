// import ExpertCard from './ExpertCard';
// export default function Experts  () {
//   const expertsData = [
//     {
//       name: "Dr. Aseel Ali",
//       title: "Orthodontist",
//       image: "/assets/E1.jpg",
//     },
//     {
//       name: "Dr. Aian Musa",
//       title: "Dentist",
//       image: "/assets/E2.jpeg",
//     },
//     {
//       name: "Dr. Sarah Muhammed",
//       title: "Surgeon",
//       image: "/assets/E3.jpg",
//     },
//     {
//       name: "Dr. Sherif Emad",
//       title: "Surgeon",
//       image: "/assets/E4.png",
//     },
//   ];

//   return (
//     <section className="py-12 bg-[#e9f3ff]">
//       <div className="text-center mb-7">
//         <p className="text-gray-600">Our Doctors</p>
//         <h2 className="text-3xl font-bold wttf">Dental Experts You Can Trust</h2>
//       </div>

//       <div className="grid md:grid-cols-4 gap-4 mx-3">
//         {expertsData.map((expert, index) => (
//           <ExpertCard
//             key={index}
//             name={expert.name}
//             title={expert.title}
//             image={expert.image}
//           />
//         ))}
//       </div>
//       <p className="text-gray-700 text-sm pt-7 text-center">Each of our dentists, hygienists, and specialists brings, </p>
//       <p className="text-gray-700 text-sm text-center">Years of expertise and advanced training.</p>
//     </section>
//   );
// };

import ExpertCard from './ExpertCard';
export default function Experts  () {
  const expertsData = [
    {
      name: "Dr. Aseel Ali",
      title: "Orthodontist",
      image: "/assets/E1.jpg",
    },
    {
      name: "Dr. Aian Musa",
      title: "Dentist",
      image: "/assets/E2.jpeg",
    },
    {
      name: "Dr. Sarah Muhammed",
      title: "Surgeon",
      image: "/assets/E3.jpg",
    },
    {
      name: "Dr. Sherif Emad",
      title: "Surgeon",
      image: "/assets/E4.png",
    },
  ];

  return (
    <section className="py-12 bg-[#e9f3ff]">
      <div className="text-center mb-7 px-4">
        <p className="text-gray-600">Our Doctors</p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold wttf">Dental Experts You Can Trust</h2>
      </div>

      {/* 1 column on phones, 2 from 481px, 4 from 1024px */}
      <div className="grid grid-cols-1 gap-4 mx-4 sm:grid-cols-2 lg:grid-cols-4">
        {expertsData.map((expert, index) => (
          <ExpertCard
            key={index}
            name={expert.name}
            title={expert.title}
            image={expert.image}
          />
        ))}
      </div>
      <p className="text-gray-700 text-sm pt-7 px-4 text-center">Each of our dentists, hygienists, and specialists brings, </p>
      <p className="text-gray-700 text-sm px-4 text-center">Years of expertise and advanced training.</p>
    </section>
  );
};