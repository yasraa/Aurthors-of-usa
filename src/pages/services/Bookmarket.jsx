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

import img1 from '../../assets/social.jpg';



const Bookmarket = () => {
    
  const paras = [
    <>Book Marketing Services</>,
    <> Turn Your Words Into Profit</>,
    <>Want your book to shine and reach more readers? Let us help you make it happen. Our best book marketing services are here to get your story noticed. With smart strategies, we’ll make sure your published book gets the attention it deserves.</>
  ]
  const sectionData = [
    {
      heading: " Elite Book Marketing Services At Your Fingertips",
      subheading: " Do you want your book in the hands of more readers without breaking the bank? We’ve got you covered. Our professional team knows how to promote your book the right way, all while staying within your budget.",
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
      heading: "Expand Your Book’s Reach With The Leading Book Marketing Company",
      subheading:"  It can be challenging to arrange good buyers for your book, as it's not always easy to get people to notice it. That’s where our adept book promotion services come in. Our offerings complement your book printing services, helping you share your book with an increased number of readers and heighten sales by promoting it on various platforms. ",
      items: [
  "Research with attention to detail",
  "Plan your promotion from start to finish",
  "Follow a clear strategy",
  "Promote on social media and build your brand",
  "Work with experienced marketers who know what works"
],

      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Choosing Our Book Marketing Services Is The Right Decision?",
      subheading:"Our book marketing company will not only get you professional book marketing services but also a companion who’s devoted to your success. We know that every author cherishes their story, and we’re here to help you shape it into an otherworldly experience with our experience, precision, and dedication to quality."
    },

  ];
const mainthreeparas = [
<>Create Your Dream Book With Our Book Promotion Services</>,
<>Let’s create a book that’s unforgettable in a world full of stories. With our remarkable eBook ghostwriting services and marketing facilities by your side, you can take the first steps to make your dreams real. We'll help you discover your unique voice and turn your idea into something truly special.</>
]



  const faqData =[
  {
    "question": "Why Choosing Our Book Marketing Services Is The Right Decision?",
    "answer": "Our team acts as more than just a service provider—we’re your dedicated partner in delivering quality, tailored marketing that treats your story as an immersive experience worth sharing."
  },
  {
    "question": "What kinds of marketing support do you offer?",
    "answer": "We provide personalized promotions, social media campaigns, website optimization, email marketing, launch events planning, influencer outreach, and engaging content tailored to your story’s unique voice." 
  },
  {
    "question": "Do I retain full ownership of my book?",
    "answer": "Absolutely! You maintain 100% ownership of your manuscript and marketing materials—our role is to help your story shine without taking control."
  },
  {
    "question": "How reliable is your delivery?",
    "answer": "Our team is timely and dependable, committed to delivering high-quality marketing materials ahead of schedule so you never miss a deadline." 
  }
]









const tabs = [
  {
    id: 1,
    label: "Social Media Campaigns",
    paragraph: "Our marketing assistance helps you elevate your social presence and connect with your readers. We make posts that grab attention, run ads to reach the right people and create fun, interactive content your audience will absolutely love.",

    img: img1, // main image shown below
    heading: "Social Media Campaigns",
  },
  {
    id: 2,
    label: "Author Website Development",
    paragraph: "We make sure your website looks great, is easily accessible, and helps you connect with your readers since this is where people will find you online. We focus on design, effective content, and ensuring search engines can find you in the blink of an eye.",
    img: img1, // main image shown below
    heading: "Author Website Development",
  },
   {
    id: 3,
    label: "Book Launch Events",
    paragraph: "We help you plan exciting events, either virtual or in-person, for your book. We work hard to certify that your launch gets attention, creates excitement, and builds a good community around your book.",
    img: img1, // main image shown below
    heading: "Book Launch Events",
  },
   {
    id: 4,
    label: "Influencer Collaborations",
    paragraph:"Rely on our book marketing for authors to find the right influencers for you who can spread the word about your work. By connecting you with celebrities who share your genre, you can reach a wider audience and gain more fans.",
    img: img1, // main image shown below
    heading: "Influencer Collaborations",
  },
   {
    id: 5,
    label: "Email Marketing Campaigns",
    paragraph: "We help you keep in touch with your readers through email. We send out newsletters, promotional emails, and special content that keeps your audience excited and updated on your book releases.",
    img: img1, // main image shown below
    heading: "Email Marketing Campaigns",
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


export default Bookmarket