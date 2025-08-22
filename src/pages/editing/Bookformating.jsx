import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/Slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/wikir.png'
import Rightbook from '../../assets/wikil.png'

import img1 from '../../assets/action.png';
import img2 from '../../assets/children.png'; 
import img3 from '../../assets/fantasy.png';
import img5 from '../../assets/suspense.png';
import img8 from '../../assets/fiction.png'



const Bookformating = () => {
    
  const paras = [
    <> Book Formatting Services To Prepare Your Book For Success</>,
<>Have you ever wondered how to make your book as visually enchanting as its story? </>,
<> Our professional book formatting services are designed to do just that. We are proficient in focusing on every detail and ensuring that your book isn’t just read but truly experienced. Let us help you frame a refined, competent look that will upgrade your book and make it something readers can’t wait to get their hands on.</>
  ];
  const sectionData = [
    {
      heading: "Achieve A Polished Look With The Top-Tier EBook Formatting Service",
      subheading: "Book formatting is an art that enriches the overall reading experience and increases the influence of your book. We are here to give your book the professional touch it deserves with our top-tier eBook formatting service. Our team of talented book formatters will convert your manuscript into a visually appealing, easy-to-read eBook that complements your narrative. Join hands with us today to handle your book formatting so you can focus on creating unforgettable stories.Here’s why you should choose us:",
      items: [
       "We flaunt your book’s distinct style and genre through personalized formatting.",
       "Experienced in delivering high-quality book formatting services.",
       "Fluent in creating reader-friendly layouts across various publishing platforms."
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Enhance Your Book’s Appeal; Hire Our Top Book Formatters",
      subheading:"Are you ready to turn your manuscript into a beautifully refined book that can mesmerize the readers from start to finish? We’ve got you covered. We are a book formatting company that is capable of converting your writing into a visually stunning masterpiece for print and digital publication. We pay keen attention to every detail, like fonts, layout, readability, and ensure your book shines.Here’s what we offer:",
      items: [
        "Book formatting services that suit the requirements of multiple publishing platforms.",
        "Elegant layouts for both print and e-books, designed to attract readers.",
        "Remarkable blend of typography and design to create a compelling and professional presentation of your book."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "What Benefits Do You Get From Our Book Formatting Services?",
      subheading:"Our We provide book formatting services that are designed to meet the unique needs of all kinds of literary creations, including intriguing fiction to thoughtful books, with precision and style. Our team of talented book formatters transforms your manuscript into a visually enchanting and cohesive piece, making sure that the structure and design speak as loudly as your content. Our services also come with expert insights and book review services to help you refine your content before it hits the shelves."
    },

  ];
const mainthreeparas = [
  <>Turn Your Book Into A Flawless Masterpiece</>,
  <>You can now finally make your dream come true of creating a visually aesthetic and beguiling book with our skilled book formatters.</>
]



  const faqData =[
  {
    "question": "Why Is EBook Formatting Important?",
    "answer": "EBook formatting ensures that your manuscript is professionally structured, easy to read, and compatible across various devices like Kindle, Nook, and tablets. Proper formatting enhances the reader’s experience and gives your book a polished, professional look."
  },
  {
    "question": "What Factors Affect The Cost Of EBook Formatting Services?",
    "answer": "The cost depends on factors such as book length, complexity of design, inclusion of images or tables, and whether you need both print and digital formatting. Custom requests may also influence pricing."
  },
  {
    "question": "What Is The Turnaround Time For EBook Formatting Services?",
    "answer": "Turnaround time varies depending on the project’s complexity. Simple eBook formatting can take a few days, while detailed formatting with design elements may take one to two weeks."
  },
  {
    "question": "How Do I Know If A Book Formatting Company Is Reputable?",
    "answer": "A reputable company will have client testimonials, a portfolio of past work, clear pricing, transparent communication, and experience across different genres and publishing platforms."
  },
  {
    "question": "Can You Help With Both EBook Formatting And Print Book Formatting?",
    "answer": "Yes, professional formatting services typically include both eBook formatting for digital platforms and print formatting for paperback or hardcover editions."
  },
  {
    "question": "Can I Request Revisions If I’m Not Happy With The Initial Formatting?",
    "answer": "Yes, most formatting services include revision rounds to ensure your book matches your expectations before final delivery."
  },
  {
    "question": "What’s Included In Custom EBook Formatting Services And Design?",
    "answer": "Custom eBook formatting includes tailored layouts, typography, clickable table of contents, image placement, chapter styling, and design adjustments to suit your genre and audience."
  }
]










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
    label: "Suspense",
    paragraph: "A well-written suspense or thriller is the only thing that can keep a reader up at night. If renowned authors like Stephan King inspire you, you can publish a book that fits this genre's requirements. Get in touch with us.",
    img: img5,
    heading: "SUSPENSE",
  },
  
   {
    id: 5,
    label: "HISTORY",
    paragraph: "Writing a fiction novel takes time, effort, and a captivating storyline. Let our writers know if you have brilliant concepts for a fiction or nonfiction book. We'll bring your concepts to life and reveal the world of endearing and magical fictional characters. ",
    img: img8,
    heading: "HISTORY",
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


export default Bookformating