import ReviewCard from "./ReviewCard";

export default function Reviews() {
  const reviewsData = [
    {
      name: "Jeremy Curry",
      rating: '★★★★★',
      comment: "I've always been anxious about visiting the dentist, but when I walked into Lume Dental, I felt at ease. The staff was incredibly welcoming, and Dr. Beatrice Cox took the time to explain everything in",
      image: "/assets/R1.avif",
    },
    {
      name: "Dr. Aseel Ali",
      rating: '★★★★★',
      comment: "I had been putting off my dental check-up for years due to bad past experiences. A friend recommended Lume Dental, and I'm so glad they did! Dr. Fletcher Morse was kind, patient, and",
      image: "/assets/R2.avif",
    },
    {
      name: "Dr. Aseel Ali",
      rating: '★★★★★',
      comment: "After going to Lume Dental, I'm no longer conscientious about smiling in photos! The team at Lume Dental transformed my smile through their careful treatments. They're gentle,",
      image: "/assets/R3.avif",
    },
  ];

  return (
    <div>
      <p className="bekarPara text-sm text-center">TESTIMONIALS</p>
      <h2 className="bekarHead text-center px-4 text-xl sm:text-2xl lg:text-[1.7rem]">What Our Patients Say</h2>
      <div className="grid grid-cols-1 gap-3 m-4 lg:grid-cols-3">
        {reviewsData.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            rating={review.rating}
            comment={review.comment}
            image={review.image}
          />
        ))}
      </div>
      <div className="border-t border-b border-[#343639c4] py-4 bekarDiv px-3 w-[90%] md:w-[70%] lg:w-1/2">
        <p className="text-black font-medium">Smiles That Speak for Themselves</p>
        <p className="text-[#343639c4] text-sm">Here's what our happy patients have to say about their experience with us</p>
      </div>
    </div>
  );
};