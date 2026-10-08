export default function ReviewCard({ name, rating, comment, image }) {
  return (
    <div className="reviewCard flex flex-col items-start bg-[#f1f6f7] pt-6 pb-6 text-left px-5 rounded-3xl w-full max-w-lg mx-auto lg:max-w-none">
      <div className="flex flex-col">
        <div className="flex flex-row items-start mb-2">
          <div className="w-10 h-10 rounded-full items-center justify-center mr-3">
            <img src={image} alt={name} className="h-full w-full object-cover rounded-full" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-sm text-black">{name}</h3>
            <p className="text-[#FDCC0D] text-base">{rating}</p>
          </div>
        </div>
        <div className="items-start"><p className="text-black text-xs">{comment}</p></div>
      </div>
    </div>
  );
};