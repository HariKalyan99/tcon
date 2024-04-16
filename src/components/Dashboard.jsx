import React, { useEffect } from "react";
import Jumbotron from "./Jumbotron";
import Stratergy from "./Stratergy";
import SwiperSlider from "./Swiperslider";
import gif from '../assets/vid.gif'
import Header from "./Header";
import Footer from "./Footer";
import Interiorstyle from "./Interiorstyle";
import Checkpointhero from "./Checkpointhero";
import Workgallery from "./Workgallery";
import Parallaxwork from "./Parallaxwork";


const Dashboard = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }, 100)
  }, ["/"]);

  const contactTexts = [
    {text: "Thank you for your interest in reaching out to us. Whether you have questions, feedback, or inquiries, we're here to assist you. Please swipe left, you can get in touch with us in various ways:", heading:' ContactUs:'},
    {text: "For general questions or information, please email us at contact@example.com, tap the button to get redirected to email below.", heading: 'General Inquires:'},
    {text: "If you require assistance with an existing order, product, or service, our dedicated customer support team is here to help. Please email us at support@example.com or call us at +91-9148911954 during our business hours.", heading: 'Customer Support:'},
    {text: "Looking to join our team? To view current job openings and learn more about working with us or for inquiries related to employment/recruitment, please email us at careers@example.com.", heading: 'Career Opportunities:'},
    {text: "No. 1670/49 6th Main Cross, Kengeri stage 2, Kengeri Satellite Town Bengaluru - 560060", heading: 'Address:'},
    {text: "Monday - Friday: 9:00 AM - 5:00 PM (IST)", heading: 'Business Hours:'}
  ]


  const texts = [
    {text: "At Tron's constructions, our primary focus is on crafting exceptionalinteriors and exteriors that redefine modern living. With a passion for design innovation and meticulous attention to detail, we specialize in creating captivating spaces that seamlessly blend style, functionality, and comfort. "},
    {text: "From thoughtfully curated interiors that reflect your personality and lifestyle to striking exteriors that make a statement, we are committed to and design excellence delivering unparalleled craftsmanship"},
    {text: "Whether it's transforming a single room or an entire property, trust us to bring your vision to life with creativity, precision, and expertise. of interior and exterior design with Tron's constructions. Experience the perfect harmony"}
   ]
  return (
    <div className="dashboard" id="aboutus">
      <Header />
      <main className="videoDimensions" >
      <div className="position-relative overflow-hidden text-center bg-body-light h-100" style={{backgroundColor: "rgba(0, 0, 0, 1)"}}>
        <img src={gif} alt="background" style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: "10", opacity: "0.3"}}/>
        <div className="col-md-6 p-lg-5 mx-auto mt-5" style={{position: "relative", zIndex: "100"}}>
          <h1 className="display-3 fw-lighter "
            style={{ color: "var(--primary-color)" }}
          >
            Building Dreams, One Brick at a Time 
          </h1>
          <p className="fw-light fst-italic" style={{ color: "white"}}>
            Crafting Homes, Creating Memories
          </p>
        </div>
      </div>
    </main>
    <Jumbotron />
    <SwiperSlider />
    <Checkpointhero />
    <Stratergy />
    <Interiorstyle />
    <Workgallery />
    <Parallaxwork texts={texts} screenHeight={"dashboard"} contactTexts={contactTexts}/>
    <Footer />
    </div>
  );
};

export default Dashboard;
