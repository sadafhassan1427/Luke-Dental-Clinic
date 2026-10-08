export default function Footer() {
    return (
        <div className="footer bg-[#e9f3ff]">
            {/* 1 column on phones, 2 from 481px, 4 from 1024px */}
            <div className="grid grid-cols-1 gap-8 mx-auto w-full max-w-[1700px] px-6 pt-10 mb-5 pb-5 text-left text-[#575a5b] sm:grid-cols-2 lg:grid-cols-4 xl:px-15">
                <div>

                    <div className="flex items-center mb-6">
                        <div className="bg-[#ffffff] rounded-4xl w-8 h-8 flex justify-center items-center">
                            <i className="fa-solid fa-tooth text-[#131c15]"></i> 
                        </div>
                        <p className="text-[#131c15] px-2 font-bold font-sans">Luke Dental</p>
                    </div>

                    <p className="pb-4">Providing top-quality dental care<br></br>with a gentle touch since 2010.</p>
                    <div className="icons">
                        <i className="fa-brands fa-facebook mr-2 text-[20px] hover:text-black"></i>
                        <i className="fa-brands fa-instagram mr-2 text-[20px] hover:text-black"></i>
                        <i className="fa-brands fa-twitter text-[20px] hover:text-black"></i>
                    </div>
                </div>

                <div>
                    <h4 className="pb-4 font-bold text-black text-[20px]">Quick Links</h4>
                    <ul>
                        <li className="links mb-1"><a href="#home">Home</a></li>
                        <li className="links mb-1"><a href="#about">About Us</a></li>
                        <li className="links mb-1"><a href="#services">Services</a></li>
                        <li className="links mb-1"><a href="#team">Doctors</a></li>
                        <li className="links mb-1"><a href="#testimonials">Testimonials</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="pb-4 font-bold text-black text-[20px]">Services</h4>
                    <ul>
                        <li className="links mb-1"><a href="#services">General Dentistry</a></li>
                        <li className="links mb-1"><a href="#services">Cosmetic Dentistry</a></li>
                        <li className="links mb-1"><a href="#services">Dental Implants</a></li>
                        <li className="links mb-1"><a href="#services">Orthodontics</a></li>
                        <li className="links mb-1"><a href="#services">Pediatric Dentistry</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="pb-4 font-bold text-black text-[20px]">Contact Us</h4>
                    <ul className="break-words">
                        <li><p><b className="text-black">Address: </b>123 Dental Ave, Chandigarh, India</p></li>
                        <li><p><b className="text-black">Phone: </b>+91 77890 33890</p></li>
                        <li><p><b className="text-black">Email: </b>megha@lukedental.in</p></li>
                        <li>
                            <p><b className="text-black">Working Hours:</b><br></br>Monday - Thursday: 9AM - 9PM<br></br>Saturday - Sunday: 10AM - 6PM</p>
                        </li>
                    </ul>
                </div>

            </div>
<hr></hr>
            <div className="py-5">
                <p className="text-black text-sm text-center px-4">© 2023 Luke Dental Clinic. All rights reserved.</p>
            </div>
            
        </div>
    );
};