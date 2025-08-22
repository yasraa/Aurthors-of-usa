import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/Slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/uniquel.png'
import Rightbook from '../../assets/uniquer.png'

import img1 from '../../assets/urban.png';



const Fantast = () => {
    
  const paras = [
    <>Exceptional Fantasy Writing Services </>,
<>To Bring Your Imagination To Reality</>,
<>Do you have an amazing fantasy story in your mind and want your audience to enjoy that whimsical experience? Our fantasy writing services are designed to bring your vision to life. Our skilled fantasy ghostwriters can help you exactly with that. They specialize in creating unique, interactive stories that transport readers to extraordinary worlds. </>
  ];
  const sectionData = [
    {
      heading: "Top Fantasy Writers For Hire To Write Your Next Best Seller",
      subheading: "Fantasy writing has always been a special part of literature, and it’s exciting to see it grow beyond traditional legends. Our fantasy ghostwriters share your passion for this genre and are here to help you create a story that stands out in the competitive book market.",
      items: [
       "Ghostwriting",
       "Proofreading",
       "Audiobook Services",
       "Book Marketing",
       "Book Editing"
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Bespoke Fantasy Ghostwriting Services For Unique Worlds",
      subheading:"We state with immense pride and assurance that our fantasy ghostwriting services are what you need for your magical boom to succeed. Mastering a skill takes either passion or years of practice but our remarkable fantasy writers for hire bring both as they’re not only creative and experienced but also have the right qualifications to back it up.",
      items: [
        "Make sure they’re qualified and experienced.",
        " Look for positive reviews to gauge their credibility.",
        "Your privacy should always be a priority.",
        "Their writing style should match your ideas and tone since they’ll be expressing your thoughts."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "What Sets Our Fantasy Ghostwriters Apart From Others",
      subheading:"We offer a full range of services, from ebook ghostwriting services to editing and publishing support. If you need help building a strong story or polishing your manuscript, our experienced team of fantasy ghostwriters is here for you. We’re dedicated to creating something you’ll be proud of. With our fantasy writing services, here’s what you can expect:"
    },

  ];
const mainthreeparas = [
  <>Create The Book Of Your Dreams With Fantasy Writers For Hire</>,
  <>This is your cue for hiring a fantasy writer today to create a book about your fantasy world. Let us help you tap into your creative potential and compose a story that stands out in the fantasy genre and is ready to enthrall readers.</>
]



  const faqData =[
  {
    "question": "What Are Fantasy Writing Services, And How Can They Help Me?",
    "answer": "Fantasy writing services create unique stories set in imaginative worlds, with compelling plots and characters. They can assist with everything from world-building to character development."
  },
  {
    "question": "What Experience Do Your Writers Have In Fantasy Storytelling?",
    "answer": "Our fantasy ghostwriters specialize in various fantasy genres, with years of experience in creating intriguing and original stories. They understand the nuances of world-building and creating immersive narratives."
  },
  {
    "question": "Do You Charge Extra For Revisions Or Edits?",
    "answer": "Revisions and edits are usually included in the price, but extensive changes may come with an additional fee. We ensure clear communication about costs beforehand."
  },
  {
    "question": "How Much Does It Cost To Hire A Fantasy Ghostwriter?",
    "answer": "Prices vary depending on complexity and length, but getting a fantasy writer for hire generally costs between $5,000 to $30,000 or more for a full book."
  },
  {
    "question": "How Long Does It Take To Complete A Fantasy Book Or Story?",
    "answer": "It typically takes a few months to complete a full fantasy book, depending on the length and scope of the project. Short stories can be finished in a few weeks."
  },
  {
    "question": "Do You Provide Regular Updates During The Writing Process?",
    "answer": "Yes, we provide regular updates to keep you in the loop and ensure the story is heading in the right direction. We prioritize communication throughout the process."
  }
]









const tabs = [
  {
    id: 1,
    label: "Epic Fantasy",
    paragraph: "Avail our fantasy and story writing services to step into exciting worlds full of magic, mythical creatures, and ancient prophecies. Our writers create detailed settings with rich histories, unique cultures, and heroes who are ready to shape their world’s destiny.",
    img: img1, // main image shown below
    heading: "Epic Fantasy: Journeys Through Enchanted Lands",
  },
  {
    id: 2,
    label: "Urban Fantasy",
    paragraph: "Our fantasy writers blend magic with everyday life. We create stories having secret magical societies, supernatural creatures, and some exciting mysteries that bring the extraordinary into modern settings.",
    img: img1, // main image shown below
    heading: "Urban Fantasy: Magic in Everyday Life",
  },
   {
    id: 3,
    label: "High Fantasy",
    paragraph: "High fantasy involves the struggles of kingdoms, magic users, and heroes who challenge fate. Our fantasy ghostwriters create detailed worlds with complex politics, unique magic systems, and characters that are shaped by their goals, desires, and crucial responsibilities.",
    img: img1, // main image shown below
    heading: "High Fantasy: Thrones and Sorcery",
  },
   {
    id: 4,
    label: "Dark Fantasy",
    paragraph: "Dark fantasy takes readers to worlds where shadows dominate, and the line between good and evil gets blurred. Our fantasy writers, including talented science fiction ghostwriters, create gripping stories with flawed heroes, tough moral choices, and eerie supernatural twists to pull readers into shadowy realms filled with mystery and even futuristic worlds where science and the unknown collide.",
    img: img1, // main image shown below
    heading: "Dark Fantasy: Exploring Shadows and Depths",
  },
   {
    id: 5,
    label: "Historical Fantasy",
    paragraph: "The world of historical fantasy has real events and settings that are reimagined with a touch of magic. Our fantasy ghostwriters create rich, immersive stories that blend history with fantastical elements, offering fresh takes on the past and exciting twists that reshape familiar timelines.",
    img: img1, // main image shown below
    heading: "Historical Fantasy: Magic in the Past",
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


export default Fantast