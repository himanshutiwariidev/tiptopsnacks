import Header from '../components/Navbar'
import HeroBanner from '../sections/Hero'
import Products from '../sections/Products'
import About from '../sections/About'
import BestProductShowcase from '../sections/BestProductshowcase'
import PartnerSection from '../sections/PartnerSection'
import OEMBrandsSection from '../sections/OEMBrands'
import WhyChooseUs from '../sections/Whychooseus'
import Footer from '../components/Footer'
import ContactSection from '../sections/Contact'
import TestimonialsSection from '../sections/Testimonial'

export default function Home() {
  return (
    <>
      <Header/>
      <HeroBanner/>
        <About/>
           <Products/>
            <OEMBrandsSection/>

       <BestProductShowcase/>
       <PartnerSection/>


      <WhyChooseUs/>
   <TestimonialsSection/>
   <ContactSection/>
<Footer/>
    </>
  )
}
