import Hero from './Pages/Hero.jsx';
import About from './Pages/About.jsx';
import BookPage from './Pages/BookPage.jsx';
import Team from './Pages/Team.jsx';
import ReviewsPage from './Pages/ReviewsPage.jsx';
import Footer from './Components/Stick Components/Footer';
import AllServices from './Components//Services/AllServices.jsx'

export default function App() {
  return (
    <>
      <Hero />
      <hr></hr>
      <About />
      <AllServices />
      <div className="flex items-center justify-center bg-[#e9f3ff]"><BookPage /></div>
      <Team />
      <hr></hr>
      <ReviewsPage />
      <hr></hr>
      <Footer />
    </>
  );
};