import React, { useRef } from "react";
import BookT from '../assets/bookt.png';
import BookM from '../assets/bookm.png';
import BookR from '../assets/bookr.png';
import BookS from '../assets/books.png';
import BookC from '../assets/bookc.png';
import '../styles/Testimonials.css';

const Testimonials = ({service}) => {
  const sliderRef = useRef(null);

  const sliderData = [
    {
      img: BookT,
      title: "Book Editing",
      description:
        "Do you need a trusted team to refine your writing and make it flawless? Our skilled editors are ready to elevate your script with precision and utmost care."
    },
    {
      img: BookM,
      title: "Proofreading",
      description:
        "Is your manuscript ready, and you want it to be without any mistakes and look professional? Our book proofreading service ensures every detail is perfect, so your work gets attention for all the right reasons."
    },
    {
      img: BookR,
      title: "Book Formatting",
      description:
        "Are you looking to make your script a beautifully designed book that’s ready to attract readers? Trust our expert book formatting service to make it happen for you."
    },
    {
      img: BookS,
      title: "Book Marketing",
      description:
        "In addition to ghostwriting services, we also offer book marketing services that can help increase your book sales with expert promotion services. Get the support you need to reach more readers and grow your audience abundantly."
    },
    {
      img: BookC,
      title: "Book Cover Designs",
      description:
        "Are you struggling to turn your ideas into the perfect book cover? Our talented illustrator can help you in designing a cover that tells your story and grabs attention instantly."
    }
  ];

  // Scroll left
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -450, // Adjust width per card
      behavior: "smooth"
    });
  };

  // Scroll right
  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 450, // Adjust width per card
      behavior: "smooth"
    });
  };

  return (

    <div className="services">
      <div className="serv">
        <h1 style={{textAlign:"center"}}>Our Services</h1>
        <p >Our immensely skilled authors are well-versed in how to create compelling and thought provoking work regardless of the genre.
             It brings us tremendous pride to share that we are powered by industry veterans who produce top-notch work.</p>
    <div className="servcon">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
      className="lefarr"
      >
        ◀
      </button>

      {/* Scrollable container */}
      <div
        ref={sliderRef}
        className="servmain"
      >
        {sliderData.map((item, index) => (
          <div
            key={index}
          className="servcard"
          >
            <img
              src={item.img}
              alt={item.title}

            />
            <div className="servcardcon">
            <h3>{item.title}</h3>
            <p >
              {item.description}
            </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
className="rigarr"
      >
        ▶
      </button>
    </div>
     <div className="hero1btn">
        <div className="left-main-btn"><button>Call Now</button></div>
        <div className="right-main-btn"><button>Get Free Consultation</button></div>
        </div>
    </div>

    <section class="testimonials-section">
    <h2>Voices Of Our Clients</h2>
    <p>We value our clients’ trust in us and always manage to satisfy them. Our ghostwriting services ensure that each project we take on results in amazing manuscripts every time.</p>
    
    <div class="testimonial-container">
        <div class="testimonial-card">
            <h3>Amanda</h3>
            <p>At first, I had my doubts about using Writers of USA's ghostwriting services, however, it was well beyond my expectations. They used my rough drafts to make a mesmerizing story that I can completely claim as my own. Everything went smoothly, and the finished product was better than my expectations in every way.</p>
            <div class="stars">★★★★★</div>
        </div>
        
        <div class="testimonial-card">
            <h3>Mike Lee</h3>
            <p>I am someone who’s always struggled with writing a book on my own, and I knew I would need professional help to get my book done. WritersOfUSA was perfect for me. They took my scattered thoughts and merged them into a clear, organized book that still sounded like me. It was an absolute pleasure working with them, and I’m so proud of the result.</p>
            <div class="stars">★★★★★</div>
        </div>
        <div class="testimonial-card">
            <h3>Milred G.</h3>
            <p>I am someone who’s always struggled with writing a book on my own, and I knew I would need professional help to get my book done. WritersOfUSA was perfect for me. They took my scattered thoughts and merged them into a clear, organized book that still sounded like me. It was an absolute pleasure working with them, and I’m so proud of the result.</p>
            <div class="stars">★★★★★</div>
        </div>
    </div>
</section>
    </div>
  );
};

export default Testimonials;
