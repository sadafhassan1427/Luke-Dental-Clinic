import ServiceCard from "./ServiceCard"
export default function AllServices() {
  const servicesData = [
    {
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with modern cosmetic treatments.",
      services: ["✓ Teeth Whitening", "✓ Veneers", "✓ Smile Makeovers"],
      image: "/assets/immg1.avif",
    },
    {
      title: "Implants & Prosthetics",
      description: "Restore functionality and aesthetics with implants.",
      services: ["✓ Dental Implants", "✓ Dentures"],
      image: "/assets/immg2.avif",
    },
    {
      title: "Restorative Care",
      description: "Repair and protect your teeth with restorative solutions.",
      services: ["✓ Fillings", "✓ Crowns & Bridges", "✓ Root Canal Therapy"],
      image: "/assets/immg3.avif",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 bg-[#e9f3ff]" id="services">
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold wttf">OUR SERVICES</h2>
        <p className="text-gray-600">Dental Services for Every Need</p>
      </div>

      {/* 1 column until 1024px, then 3 columns */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            services={service.services}
            image={service.image}
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-[#50e7f87d] text-black px-6 py-3 rounded hover:bg-[black] hover:text-[white]">
          Explore All Services
        </button>
      </div>
    </section>
  );
};