import React from 'react'
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Slides from '../components/Slides';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import FAQ from '../components/Faq';
import Sidebook from '../assets/side-books.png'
import Rightbook from '../assets/book-right.png'

import img1 from '../assets/action.png';
import img2 from '../assets/children.png'; 
import img3 from '../assets/fantasy.png';
import img4 from '../assets/erotic.png';
import img5 from '../assets/suspense.png';
import img6 from '../assets/drama.png';
import img7 from '../assets/novel.png';
import img8 from '../assets/fiction.png'
import img9 from '../assets/romance.png'

const Home = () => {
    
  const paras = [
    <>Professional <strong>Book Writing Services!</strong> </>,
    <>We create masterpieces and help you become a <strong>bestseller</strong>.</>,
    <>Our <strong>book writing service</strong> is dedicated to helping authors turn their dreams into published reality
    . Are you one of the dreamers? Allow us to transform your dreams into reality with the expertise of our professional book writers!
     Our <strong>Ghost book writing services</strong> aren’t limited to any genre or style, and we try our best to cater to your needs.</>
  ];
  const sectionData = [
    {
      heading: "Transform Your Ideas into Best-Sellers with the Help of Our Professional Book Writers for Hire!",
      subheading: "Are you an aspirational writer in need of assistance? You can get help from our team of skilled book authors and editors to make your thoughts a reality. Because we respect excellent writing, our book-writing service is dedicated to helping authors.",
      items: [
        'Our team of expert writers provides thorough book writing services.',
        "Create a compelling story that keeps readers interested.",
        "From beginning to end, receive first-rate service."
      ],
      img: Sidebook
    },
  ];
const mainthreeparas = [
  <>Make Your Story Shine With The Expertise Of A Ghostwriter</>,
  <>Are you ready to write your book but need a little help? A ghostwriter can help you compose a professionally written book that stands out and gets noticed.</>
]
  const section2Data = [
    {
      heading: "Hire The Best Writers Of USA For Your Publishing Dreams",
      subheading:"Great writers faced challenges and obstacles but never gave up on their passion. They set the road for many others to follow by daring to pursue their dreams of becoming authors. We have a rich and varied literary world full of great and inspirational stories because of them. With the help of our affordable book writing services, you can join in too! Here's why choosing us is the best option for you:",
      items: [
        " We make your concepts come to life and turn your ideas into an engaging work of art.",
        "Your book can become a best-seller thanks to our years of experience.",
        "You can get more than just the best Writers Of USA by joining our pleased customers.",
        "With our amazing services, get started immediately and turn your writing aspirations into a reality."
      ],
      img: Rightbook
    },
  ];


  const faqData = [
    {
      question: "What Is The Difference Between A 'Book Writer' And An 'Author'?",
      answer: "An author creates a book without any outside help; however, when we are talking about a book writer, he is someone you hire and pays to write a book for you."
    },
    {
      question: " Is Writing A Book For Someone Illegal?",
      answer: "Writing something for someone else and getting paid for it is a standard practice in many industries, and it is considered genuine freelance work and not illegal."
    },
    {
      question: "How Much Do Your Book Writing Services Cost?",
      answer: "The cost of our book writing service varies; it depends on your choice of domain and genre and what type of changes or updates you need for your book. It can be affordable and costly both at the same time."
    },
    {
      question:" Why Should I Hire A Book Writer?",
      answer:"If you want your book to be written by a professional and experienced writer, you must hire one; they know publishing standards and can compose a well-written book than someone less experienced. Besides, it saves a lot of time and makes you famous. The choice is still yours!"
    },
    {
      question:"Do Book Writers Edit Or Proofread Their Work?",
      answer:"Yes, they do. But you can always hire a separate team of editors and proofreaders to ensure your book is spotless."
    },
    {
      question:"How Can I Find Someone To Write My Book?",
      answer:"Contact our professional book writing team by completing a simple form. We will make sure to get back to you shortly."
    }
  ];


   const mainoneData = [
    {
      heading: "Why Choose Writers Of USA As Your Book Writing Agency?",
      subheading:"Our services include everything offered by a book writing agency, from writing and editing to publishing. Don't let your ideas stale on a shelf. Today, get your hands on the top book writing firm based in USA and let us assist you in bringing your book to life. Count on us to make your book a best-seller as one of the best book writing services in the business. Benefits from working with us include:"
    },

  ];

const tabs = [
  {
    id: 1,
    label: "Action",
    paragraph: "If you are looking forward to writing a story full of action and adventure, you can rely on our great book writing services to create appropriate content for this genre. We can compose stories to keep your audience engaged until the end.",
    img: img1, // main image shown below
    heading: "ACTION",
  },
  {
    id: 2,
    label: "Children",
    paragraph: "It takes work to write a children's book. The tone, voice, narration, and so on must be precisely right to captivate small minds. Hire our professional book writers today if you want to be a children's author.",
    img: img2,
heading: "CHILDREN",
  },
  {
    id: 3,
    label: "Fantasy",
    paragraph: "Do you want to write a fantasy story of witches, wizards, magicians, and talking furniture or animals? Allow our writers to work on your project because they have years of experience creating fantasy novels.",
    img: img3,
heading: "FANTASY",
  },
  {
    id: 4,
    label: "Erotic",
    paragraph: "Are you a fan of erotic novels and want to write one? We can assist you in writing your erotic novel. If you have a plot in mind, drop us a message, and we'll take over your project and put your thoughts into words.",
    img: img4,
    heading: "EROTIC",
  },
  {
    id: 5,
    label: "Suspense",
    paragraph: "A well-written suspense or thriller is the only thing that can keep a reader up at night. If renowned authors like Stephan King inspire you, you can publish a book that fits this genre's requirements. Get in touch with us.",
    img: img5,
    heading: "SUSPENSE",
  },
  
   {
    id: 6,
    label: "Drama",
    paragraph: "You never want to miss a good drama. A sizable audience prefers to read drama over fantasy and fiction. Let's share your good drama with the world if you have one in mind. Publish a drama book with our help today. ",
    img: img6,
    heading: "DRAMA",
  },
   {
    id: 7,
    label: "Novel",
    paragraph: " Would you like to pen a narrative-based book? We can assist you in drafting novels on a variety of subjects. We specialize in novel writing services understand what's necessary to produce content on various subjects.",
    img: img7,
    heading: "NOVEL",
  },
   {
    id: 8,
    label: "Fiction",
    paragraph: "Writing a fiction novel takes time, effort, and a captivating storyline. Let our writers know if you have brilliant concepts for a fiction or nonfiction book. We'll bring your concepts to life and reveal the world of endearing and magical fictional characters. ",
    img: img8,
    heading: "FICTION",
  },
    {
    id: 9,
    label: "Romantic",
    paragraph: " John Green, Stephanie Meyer, and Daniel Steel served as inspirations. You can hire a writer for your love novel. Over the years, our writers have read and written about several romantic novels for clients; they can do the same for you!",
    img: img9,
    heading: "ROMANTIC",
  }
];


const servicehead = {
  heading: "The Process Behind Our Expert Ghost Writing Services",
}





  return (
    <div>
              <Nav />
     <Hero paras={paras} sections={sectionData} secsections={section2Data} />
    {/* <Footer /> */}
      <Main mainones={mainoneData} mainthrees={mainthreeparas}/>
      <Slides tabs={tabs} />
<Testimonials service={servicehead}/>
      <FAQ data={faqData} />
       <Location />
    <Footer />
    </div>
  )
}

export default Home