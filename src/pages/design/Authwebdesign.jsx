
import Nav from '../../components/nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/edir.png'
import Rightbook from '../../assets/edil.png'

import img1 from '../../assets/lied.png';



const Authwebdesign = () => {
    
  const paras = [
    <>Custom Author Website Design Services</>,
<>Our specialized author website design services empower you to establish a digital platform</>,
<>where readers can discover your work, gain insights into your background, and remain informed with your updates. We excel in creating websites that are easy to navigate, optimized for mobile devices, and reflect your unique aesthetic. Your website should work for you, making it easy for readers to find and follow your journey. Let’s build a site that helps grow your audience and strengthens your online presence. </>
  ];
  const sectionData = [
    {
      heading: "Top-Tier Author Website Designers Ready To Elevate Your Brand",
      subheading: "Every author needs an online place where readers can find them easily. Our team creates websites that display your books, your story, and your unique style. We make sure your site looks great and is easy to use when you’re launching your first book or expanding your audience.",
      items: [
  "Ghostwriting",
  "Proofreading",
  "Book Editing",
  "Book Formatting",
  "Book Marketing",
  "Book Cover Designs"
],

      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Make Your Mark With Our Captivating Web Design For Authors",
      subheading:"Your book tells a story and that’s why your website should have the same energy to it too. Readers, publishers, and media all look you up online, and if they don’t find a strong, professional website, you could be missing out on some pretty massive opportunities. ",
      items: [
  "Illustrations that instantly draw readers in and tell a story on their own.",
  "Graphics that fit perfectly with your book’s theme and content.",
  "Clear and consistent communication between illustrators and authors.",
  "Affordable pricing, so you get great work without breaking the bank.",
  "Fast turnaround times, so your project stays on track."
],

      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Our Best Author Website Design Services?",
      subheading:"We offer a full range of services to help bring your writing and online presence together. We’re here to assist you in designing a professional website for authors, ghostwriting, editing, publishing support, book trailer services, and every other step of the way. Our author site design team has the experience to make polished work out of your ideas. We focus on delivering top-quality results, ensuring your project stands out."
    },

  ];
const mainthreeparas = [
<>Build A Stunning Author Website With The Best Designers By Your Side</>,
<>A great book deserves an even better website. Your online presence should represent your style, story, and even your personality. We design author site designs that are simple, interactive, and easy to operate. Together, let’s build a space where your books shine, and your readers keep coming back.</>
]



  const faqData =[]







const tabs = [
  {
    id: 1,
    label: "Comic Book Website Design",
    paragraph: "Your comics deserve an author website that shows off their full potential. We design visually appealing, functional sites that highlight your characters, stories, and artwork. We make sure your website showcases the heart of your comic world through detailed character bios and dynamic story galleries.",
    img: img1, // main image shown below
    heading: "Comic Book Website Design",
  },
  {
    id: 2,
    label: "Storybook Website Design",
    paragraph: "Your website will invite readers into the world you’ve created with an interactive design and beautiful book illustrations. It’s not just about telling your story but it’s also about providing readers with an unforgettable experience.",
    img: img1, // main image shown below
    heading: "Storybook Website Design",
  },
   {
    id: 3,
    label: "Horror Book Website Design",
    paragraph: "Your horror book deserves a website that matches the intensity of your story. We design websites that give your readers a chilling experience from the moment they land on your page. Your site will be bold, eerie, easy to navigate, and will draw people in and keep them hooked.",
    img: img1, // main image shown below
    heading: "Horror Book Website Design",
  },
   {
    id: 4,
    label: "Fiction Book Website Design",
    paragraph: "Our professional author website design services design fiction book websites that take your characters and plot to the forefront. Your readers will feel connected to your world with thoughtful layouts and seamless navigation.",
    img: img1, // main image shown below
    heading: "Fiction Book Website Design",
  },
   {
    id: 5,
    label: "Romantic Book Website Design",
    paragraph: "We create websites that show the warmth, passion, and charm of your romance novels. Every detail is inviting, easy to explore, and filled with all the right touches to show off your books.",
    img: img1, // main image shown below
    heading: "Romantic Book Website Design",
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



export default Authwebdesign