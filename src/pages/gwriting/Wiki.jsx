
import Nav from '../../components/nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/wikir.png'
import Rightbook from '../../assets/wikil.png'

import img1 from '../../assets/trac.png';
import img2 from '../../assets/ceae.png'; 
import img3 from '../../assets/ts.png';
import img4 from '../../assets/pmam.png';
import img5 from '../../assets/wikiexp.png';


const Wiki = () => {
    
  const paras = [
    <>Your Gateway to Accurate and Professional Wikipedia Writing Services</>,
<>Our expert Wiki Writing service is here to help you create well-researched and meticulously crafted Wikipedia content that meets all the requirements!</>,
<> </>
  ];
  const sectionData = [
    {
      heading: "Experience the Power of Wikipedia with Our Expert Wikipedia Writers!",
      subheading: "It requires the expertise of seasoned Wikipedia writers who understand the platform's guidelines and have a flair for presenting unbiased information. Our team of skilled Wikipedia writers is here to make your presence on Wikipedia a reality. Why choose our WIKI Writing service:",
      items: [
       "Tailor-made Wikipedia content that adheres to Wikipedia's policies and guidelines.",
       "A proven track record of creating accurate and reliable Wikipedia articles across diverse topics.",
       "Years of experience in providing professional Wikipedia writing services."
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Wikipedia Writers For Hire",
      subheading:"Our Wikipedia writers have the necessary skills to create content aligned with Wikipedia's guidelines. Whether you need a new Wikipedia article or want to enhance an existing article, our writers have covered you.",
      items: [
        "Well-researched and factually accurate Wikipedia articles",
        "Neutral and unbiased presentation of information to meet Wikipedia's standards.",
        "Our writers are passionate about presenting complex topics in an easy-to-understand manner.",
        " Embrace the power of Wikipedia to establish yourself as an authoritative source of information.",
        "Trust our Wikipedia writers to make your Wikipedia presence impactful and reliable."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Should You Choose Our Professional Wiki Writing Services?",
      subheading:"Our Wikipedia writing services include wiki drafts, editing, and publishing assistance. We pride ourselves on providing exceptional service. Hire the best wiki writers today, and bring your website ranked. Trust us, as one of the top writing companies."
    },

  ];
const mainthreeparas = [
  <>Let Our Writers Write. Your Wikipage Shine!</>,
  <>With the perfect understanding of tone, factual knowledge, and the dedication to write the wiki-approved page. Hire a Wiki writer now. Shine through the wall of wiki guidlines.</>
]



  const faqData =[
  {
    "question": "What topics do your Wikipedia writers cover?",
    "answer": "Our Wikipedia writers are well-versed in various topics, including business, history, science, arts and culture, technology, health and medicine, environment, social issues, etc. Whatever your subject, we can create informative and reliable Wikipedia content for you."
  },
  {
    "question": "Can you edit an existing Wikipedia article?",
    "answer": "We can edit and enhance existing Wikipedia articles to improve their accuracy, neutrality, and overall quality."
  },
  {
    "question": "Will my Wikipedia article stay on the platform?",
    "answer": "We strive to create Wikipedia content that meets Wikipedia’s stringent guidelines. However, since Wikipedia’s editorial process is community-driven, we cannot guarantee that the article will remain on the platform indefinitely."
  },
  {
    "question": "Can you assist with the submission of the Wikipedia article?",
    "answer": "Yes, we can guide you through the submission process and provide support to ensure your Wikipedia article is submitted correctly."
  }
]








const tabs = [
  {
    id: 1,
    label: "Topic Research and Creation",
    paragraph: "Our writers dive deep into in-depth research to create comprehensive Wiki articles from scratch. Whether it's a biography, historical event, or scientific concept, we ensure accurate and well-sourced content that adds value to the Wiki platform.",
    img: img1, // main image shown below
    heading: "Topic Research and Creation",
  },
  {
    id: 2,
    label: "Content Expansion",
    paragraph: "Already have a Wiki page? Our experts can expand and enhance your existing content. We add new information, update references, and improve the overall structure to make your Wiki entry more informative and engaging.",
    img: img2, // main image shown below
    heading: "Content Expansion",
  },
   {
    id: 3,
    label: "Translation Services",
    paragraph: "Our skilled translators proficiently translate your Wiki content into different languages, helping you reach a global audience and extend your online influence.",
    img: img3, // main image shown below
    heading: "Translation Services",
  },
   {
    id: 4,
    label: "Page Monitoring and Maintenance",
    paragraph: "A well-maintained Wiki page is essential for credibility. We offer regular monitoring and maintenance services, ensuring your Wiki content remains accurate, up-to-date, and aligned with the latest information.",
    img: img4, // main image shown below
    heading: "Page Monitoring and Maintenance",
  },
   {
    id: 5,
    label: "Expert Consultation and Editing",
    paragraph: "Not sure where to start with Wiki writing? Our team provides expert consultation, guiding you through the entire process. We also offer thorough editing to ensure your content adheres to Wiki's guidelines and maintains a professional standard.",
    img: img5, // main image shown below
    heading: "Expert Consultation and Editing",
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
export default Wiki