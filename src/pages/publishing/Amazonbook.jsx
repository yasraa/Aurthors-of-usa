import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/Slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/edir.png'
import Rightbook from '../../assets/edil.png'

import img1 from '../../assets/action.png';



const Amazonbook = () => {
    
  const paras = [
    <>Amazon Book Publishing Services</>,
    <>Achieve International Recognition </>,
    <>You don’t have to worry about the technical stuff with our Amazon book publishing services. We are proficient in handling everything from flawless editing to professional formatting and all the other stuff in between. Our team ensures your book not only looks great but also stands out in the competitive Amazon marketplace and touches the hearts of readers worldwide.</>
  ]
  const sectionData = [
    {
      heading: "Premium Amazon Book Publishing Services To Combine Creativity With Expertise ",
      subheading: "You’ll have access to readers across the globe with Amazon’s vast reach which is absolutely perfect for both first-time authors and experienced writers. We believe every story deserves to be shared and that is why we’re here to help create your manuscript into a book you’ll be proud to share with the world. In addition to Amazon photo book publishing and Amazon self publishing services, we also provide: ",
      items: [
  "Amazon Kindle Direct Publishing (KDP) Support",
  "Professional Formatting Assistance",
  "Marketing and Promotion Support",
  "Expert Editorial Services",
  "Book Cover Design",
],

      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Leading Amazon Book Publishing Company With Award-Winning Results",
      subheading:" Books have the astonishing power to change lives, spark ideas, and leave a lasting impression on readers. We have experience in publishing bestsellers and receiving industry praise therefore we know what it takes to make your book a success. Let us help you turn your manuscript into a top seller on Amazon.  ",
      items: [
  "We guide authors to navigate their own publishing path, giving them full control.",
  "Our Amazon book publisher services emphasize quality at every step of the journey.",
  "We want to help your work reach readers worldwide.",
  "We encourage creativity and new ideas.",
  "Our services are here to help you meet your literary goals.",
  "We aim to make a meaningful difference in the literary world."
],


      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Our Expertise Is Your Best Asset For Amazon Self Publishing Services",
      subheading:"Allow us to help you get your book published on Amazon and into the hands of readers. You’ll reach more people with our Amazon photo book publishing and give your book the attention it deserves."
    },

  ];
const mainthreeparas = [
<>Reach Readers Everywhere With Our Amazon Self Publishing Services</>,
<>Are you ready to share your book with the world? Partner with our Amazon book publishing company that knows the correct way to share your book with the world. We’ll guide you through the process and make sure everything from ebook ghostwriting services to publishing is set up for success.</>
]



  const faqData =[
  {
    "question": "What does your Amazon Book Publishing service include?",
    "answer": "Our service covers everything from ghostwriting, editing, proofreading, and formatting to cover design, marketing, printing, and Amazon distribution."
  },
  {
    "question": "Can you help me publish my book in print and digital formats on Amazon?",
    "answer": "Yes, we prepare both eBook and print versions, ensuring your book is properly formatted and available across Amazon’s platforms."
  },
  {
    "question": "Do you assist with marketing and distribution on Amazon?",
    "answer": "Absolutely. We optimize your book for Amazon’s marketplace, help with visibility strategies, and assist in promoting your book to the right audience."
  },
  {
    "question": "Will my book reach a global audience via Amazon?",
    "answer": "Yes. We manage worldwide Amazon distribution, so your book is accessible to readers across multiple regions."
  },
  {
    "question": "How streamlined is your Amazon publishing process?",
    "answer": "We handle everything from manuscript review and cover design to formatting, printing, and final publishing—allowing you to focus on your next project."
  },
  {
    "question": "How do authors feel about your Amazon publishing services?",
    "answer": "Our clients appreciate the simplified process. They highlight responsive communication, full support from manuscript to listing, and success with getting their book ‘live’ on Amazon."
  }
]









const tabs = [
  {
    id: 1,
    label: "Customized printing",
    paragraph: "We offer personalized book printing to match your specific needs. Choose from a variety of bindings and finishes to create a professional look. Our top-quality printing makes your vision come true.",
    img: img1, // main image shown below
    heading: "Customized printing",
  },
  {
    id: 2,
    label: "On-demand printing",
    paragraph: "Need memoirs, documents, or marketing materials quickly? With our memoir writing services and on-demand printing, you can print in whatever quantity you want, with fast turnaround and no minimum order.",
    img: img1, // main image shown below
    heading: "On-demand printing",
  },
   {
    id: 3,
    label: "Ebook Conversion",
    paragraph: "Turn your manuscript into a well-structured eBook. We handle the conversion to various formats, making sure your content is prepared for readers on any platform. For additional support, explore our book review services to enhance your eBook's credibility and reach.",
    img: img1, // main image shown below
    heading: "Ebook Conversion",
  },
   {
    id: 4,
    label: "Book Distribution",
    paragraph: "Broaden your reach with our book distribution. We connect you with a wide network of retailers, distributors, and online platforms to get your book in front of more readers around the world.",
    img: img1, // main image shown below
    heading: "Book Distribution",
  },
   {
    id: 5,
    label: "Ebook Distribution",
    paragraph: "We distribute your eBooks to the biggest online stores and platforms, increasing your chances of maximum sales and visibility. ",
    img: img1, // main image shown below
    heading: "Ebook Distribution",
  },
 
];






  return (
    <div>
              <Nav />
     <Hero paras={paras} sections={sectionData} secsections={section2Data} />
    {/* <Footer /> */}
      <Main mainones={mainoneData} mainthrees={mainthreeparas}/>
      <Slides tabs={tabs} />
<Testimonials/>
      <FAQ data={faqData} />
       <Location />
    <Footer />
    </div>
  )
}



export default Amazonbook