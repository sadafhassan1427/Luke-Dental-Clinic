import TrustCard from "./TrustCard";

export default function TrustPoints() {
    return (
        <div className="flex flex-col items-start text-black">
            <div className="choose mx-5 my-6 lg:m-10">Why Choose Us</div>
            <div className="flex flex-col gap-4 w-full lg:flex-row lg:items-end lg:gap-0">
                <div className="w-full px-5 lg:w-120 lg:ml-10 lg:px-0">
                    <h2 className="wtf text-xl sm:text-2xl lg:text-3xl">About Luke Dental Clinic</h2>
                    <div className="w-full pl-1 lg:w-100">
                        <p className="wtf2 text-left lg:text-justify">At Luke Dental, we believe that a healthy smile is a gateway to confidence and well-being.</p>
                        <p className="wtf2 text-left lg:text-justify">Our team of experienced dentists and hygienists use the latest technology to provide top-quality dental care in a comfortable and welcoming environment.</p>
                    </div>
                </div>
                <div className="w-full px-5 lg:w-50 lg:px-0 lg:ml-10 xl:ml-90">
                    <p className="wtf2 text-left lg:text-justify">Whether you need routine cleanings, cosmetic enhancements, or advanced procedures, <br className="hidden lg:block" /> we are here to help you achieve the smile of your dreams.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-3 self-stretch m-5 mb-3 sm:grid-cols-2 lg:grid-cols-4">
                <TrustCard 
                    title="State of the art equipment & technology"
                    description="We use the latest advancements in dental technology to provide the highest quality care." 
                />
                <TrustCard 
                    title="Experienced & Caring Professionals" 
                    description="Our team of dentists, hygienists, and specialists brings years of expertise and a passion for patient care." 
                />
                <TrustCard 
                    title="Pain free, stress free treatments" 
                    description="We understand that dental visits can be stressful, which is why we prioritize gentle techniques." 
                />
                <TrustCard 
                    title="Personalized approach for every patient" 
                    description="Every smile is unique, and so is every treatment plan. We take time to understand your needs."
                />
            </div>
        </div>  
    );
};