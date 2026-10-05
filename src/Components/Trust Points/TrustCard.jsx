export default function TrustCard({ title, description }) {
    return (
        <div className="serviceCard flex flex-col items-start bg-[#d5dbe6c4] p-2 justify-start pt-7 rounded-3xl">
            <div className="ugh2">
                <h5 className="ugh mr-1 text-left">{title}</h5>
                <p className=" text-left">{description}</p>
            </div>
        </div>
    );
};