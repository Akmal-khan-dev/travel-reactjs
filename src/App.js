
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Recommend from './components/Recommend';
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <>
      <ScrollToTop/>
      <Navbar/>
      <Hero/>
      <Services/>
      <Recommend/>
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default App;
