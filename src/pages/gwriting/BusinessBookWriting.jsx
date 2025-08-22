import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/Slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/bb.png'
import Rightbook from '../../assets/rbb.png'

import img1 from '../../assets/persuasive.png';
import img2 from '../../assets/promotional.png'; 
import img3 from '../../assets/instructional.png';



const BusinessBookWriting = () => {
    
  const paras = [
    <>Lead the Business World With Our <strong>Business Book Ghostwriting Services!</strong></>,
    <>We provide business book ghostwriting services for business owners</>,
    <> corporate champs eager to get into the creative world but can’t since it requires time and attention. With our expert business book ghostwriters, you can achieve ultimate excellence in business writing. Contact us at the earliest to get details about it.</>
  ];
  const sectionData = [
    {
      heading: "Write your business book with ease. Hire a Business Book Ghostwriter.",
      subheading: "The most important writing specialty, business book ghostwriting, is one that most individuals struggle with. Writers of USA provide a broad selection of business book writing services that address your corporate requirements.",
      items: [
        'Business owners, entrepreneurs, or owners of companies of all sizes and shapes must occasionally demonstrate what their brands stand for. You need more than a solid portfolio to promote your company; you also need official documents like a business book.',
        "Employ a business book copywriter who will effectively communicate your brand's message. With the help of our professional business book writing services, we have collaborated with several outstanding companies to help them communicate their corporate philosophy and value to their valued clients and customers. Hire our professional business book ghostwriter immediately to get your brand a cutting-edge book that appeals to your business persona.",
        
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Professional Business Book Ghostwriters For Hire!",
      subheading:"From working a 9-5 job to establishing an empire, you came a long way and achieved many milestones, which is great! But don’t you think all you have experienced, learned and conquered in the corporate world should be out there so that people with startups can get ideas about managing a business? We understand that it would be quite difficult for you to write a whole book and then publish it since you are busy with so many things, and also, you need to be an expert while constructing a book that holds your corporate traits.",
      items: [
        "Therefore, we’d like to introduce you to our business book writers. Although we work on a broad spectrum, it never makes us forget the diverse range of writing niches that need our most assistance. Business writing involves a great amount of formality because it shows your persona; hence, you can’t just come up with any idea and put it into your book. Writing a corporate book requires a serious attitude, dedication, and attentiveness. Our team of writers tries to understand the motive of your business so that they can grasp the knowledge and use it in your book. Hiring our ghostwriters can save you time and put your business in front."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Should You Choose Our Business Book Ghostwriting Services?",
      subheading:"Our services include everything from ghost business book writing to editing and publishing assistance. Whether you need help crafting a compelling storyline or want to polish your manuscript, our team of experienced individuals is here to help. We pride ourselves on providing exceptional service and producing high-quality work. Don’t let your ideas gather dust on a shelf. Contact us today!"
    },

  ];
const mainthreeparas = [
  <>Bring Your Story to Life With a Book Writer by Your Side!</>,
  <>Hire a book writer now, and start working on your first book. Allow Us To Make You Realize Your Full Literary Potential and make you stand out in the crowd of millions with your bestseller book!</>
]



  const faqData =[
  {
    "question": "What is business book writing?",
    "answer": "Writing a business book entails producing intelligent, engaging, and informative writing focused on numerous business-related topics. These books attempt to offer knowledge to enhance readers' comprehension and performance in the business world, strategies, and experiences."
  },
  {
    "question": "How much does it cost to hire a business ghostwriter?",
    "answer": "Hiring a ghostwriter for the business book can be costly if the employed writer is experienced. However, an inexperienced freelance writer might charge less, depending on your choice. Going with an experienced business writer would be a wise decision!"
  },
  {
    "question": "How can I start writing a business book?",
    "answer": "Start by identifying your target market and the main takeaway of your book. Organise chapters, conduct comprehensive research, and outline major subjects. To create a captivating and worthwhile business book, write continuously, solicit comments, and revise."
  }
]





const tabs = [
  {
    id: 1,
    label: "Persuasive",
    paragraph: "In this form of business writing, we ensure to generate a maximum audience for your business. We create CTAs that make readers learn more about your business and brand.",
    img: img1, // main image shown below
    heading: "Persuasive",
  },
  {
    id: 2,
    label: "Promotional",
    paragraph: "We provide our clients with promotional business book writing that helps them promote their businesses globally. If you want the world to talk about your business, hire us today!",
    img: img2,
heading: "Promotional",
  },
  {
    id: 3,
    label: "Instructional",
    paragraph: "Writing an instructional business book can be rewarding and allow you to share your expertise and insights with a wide audience. Our business writers help you create a step-by-step guide for your business book.",
    img: img3,
heading: "Instructional",
  },

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

export default BusinessBookWriting