import React from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
// import LandingPage from './LandingPage';
import HeroSection from 'components/HeroSection';
import FeatureSection from 'components/FeatureSection';
import CompetitiveRatesSection from 'components/CompetitiveRatesSection';
import PersonalizedServiceSection from 'components/PersonalizedServiceSection';
function index() {
  const testimonials = [
    {
      text: "This testimonial component is amazing! I love how easy it is to integrate and customize.",
      author: "John Doe",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAE0Y1qROAq3Z775lkatrO2nl7A4Krpmf4w&usqp=CAU"

    },
    {
      text: "I've never seen a testimonial section look this good. Great job!",
      author: "Jane Smith",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAE0Y1qROAq3Z775lkatrO2nl7A4Krpmf4w&usqp=CAU"
    },
    // Add more testimonials as needed
  ];
  return (
    <div className='d-flex flex-column'>
      <Header />
      <main>
        {/* <LandingPage /> */}
        <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <CompetitiveRatesSection />
        <PersonalizedServiceSection  testimonials={testimonials} />
      </main>
      <Footer />
    </div>
      </main>
      {/* <div className='mt-auto'><Footer /></div> */}
      
      </div>
  )
}

export default index