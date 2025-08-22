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



const Ebookpub = () => {
    
  const paras = [
    <>EBook Publishing Services</>,
    <>To Kickstart Your EBook Journey Today</>,
    <>You have a killer ebook idea simmering, and we're convinced it needs to be read. If writer's block is your nemesis, or you just need a seasoned professional to help mold your narrative, we're here to make it happen. Let our ebook publishing services help you unleash your unique digital book on the world.</>
  ]
  const sectionData = [
    {
      heading: " EBook Publishing Companies That Turn Your Words Into Worldwide Reads",
      subheading: "We're in the business of bringing your ebook dreams to life. From day one, our ebook publishing services have approached every project with a personal touch because we know your story matters. You can trust us if you're looking to hire ebook publishing services, we're dedicated to creating an enchanting digital reading experience. ",
      items: [
  "Engrossing and memorable ebooks, created by proficient writers.",
  "Ebooks that show your distinct voice and style, with a strong, interactive narrative.",
  "A polished, error-free ebook, thanks to our expert editing and proofreading.",
  "Reliable, on-time delivery of your high-quality ebook."
],

      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Unlock Success With A Professional EBook Publisher For Hire",
      subheading:" Got an ebook idea but need the words to make it sing? Our friendly team of experienced storytellers is here to help, especially if you're just starting out with ebooks. We know the digital publishing world inside and out, so we'll make sure your book is polished and meets all the right standards.  ",
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
      heading: "Why Smart Writers Rely On Our Ebook Publishing Services",
      subheading:"Looking for the perfect ebook self publishing companies to bring your ebook idea to life? You've found them. You might be wondering what makes our ebook publisher for hire so special. Their captivating published works speak for themselves. What sets our writers apart is their genuine dedication to your project. They go beyond just the words, treating your story with the care and attention it deserves, because we believe in providing nothing but the best ebook content."
    },

  ];
const mainthreeparas = [
<>Transform Your Story Into A Digital Bestseller With Ease</>,
<>We believe your story needs to be read. We'll handle all the ebook publishing details, making it easy for you to turn your writing into a digital book that grabs attention and sells well.</>
]



  const faqData =[
  {
    "question": "What does your eBook Publishing service include?",
    "answer": "We offer full-service support from manuscript to marketplace—covering ghostwriting, editing, proofreading, formatting, cover design, marketing, and Amazon distribution."
  },
  {
    "question": "Can you help me publish both eBook and print formats on Amazon?",
    "answer": "Absolutely. We prepare your book for both digital and paperback formats, ensuring proper formatting and seamless platform submission."
  },
  {
    "question": "How will you help my eBook stand out and sell well?",
    "answer": "We optimize your book for digital platforms, assist with pricing and description strategy, and offer promotional guidance to increase visibility and sales."
  },
  {
    "question": "Will my eBook be accessible to readers worldwide?",
    "answer": "Yes. We manage global distribution, making your eBook available on major online retailers around the world."
  },
  {
    "question": "How streamlined is the eBook publishing process with your team?",
    "answer": "Very streamlined. We handle everything from editing and design to formatting, publishing, and post-launch marketing—all with transparent communication throughout."
  },
  {
    "question": "What do clients say about your eBook publishing service?",
    "answer": "Clients highlight responsive support, comprehensive assistance from manuscript to listing, and a stress-free publishing experience that delivers polished results."
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


export default Ebookpub