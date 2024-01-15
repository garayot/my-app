import Header from '../components/Header';
import Hero from '../components/Hero';
import News from '../components/News';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Events from '../components/Events';
import Booking from '../components/Booking';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <News/>
      <About/>
      <WhyUs/>
      <Events/>
      <Booking/>
      <Team/>
      <Testimonial/>
      <Gallery/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default Homepage;
