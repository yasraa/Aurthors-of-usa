
import Nav from '../../components/nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/speechr.png'
import Rightbook from '../../assets/speechl.png'

import img1 from '../../assets/inspis.png';
import img2 from '../../assets/edus.png'; 
import img3 from '../../assets/pers.png';
import img4 from '../../assets/sos.png';
import img5 from '../../assets/bandp.png';


const Speech = () => {
    
  const paras = [
    <>Memorable Speeches, Expertly Crafted With Our Speech Writers Services</>,
<>Memorable Speeches, Expertly Crafted With Our Speech Writers Services</>,
<>that follows so make yours powerful with our expert speech writing services. We will help you deliver a message that not only garners attention but also leaves a memorable impression. No matter the occasion, we'll work with you to ensure your speech reflects your personality, purpose, and message. </>
  ];
  const sectionData = [
    {
      heading: "Harness The Power Of Words With Our Best Speech Writing Services",
      subheading: "Words have this wonderful strength to inspire, motivate, and evoke change. Our team of expert speech writers knows how important it is to deliver a message that fits your vision and speaks to your audience. Here's why our speech writing company stands out:",
      items: [
       "Personalized speeches that speak directly to your audience’s heart",
       "A proven history of writing impactful speeches for all kinds of events and occasions.",
       "Years of experience in turning ideas into compelling messages that leave a mark."
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Speech Writing Company For Every Occasion",
      subheading:"Delivering a good speech requires more than just clear words. It is about creating a connection with your audience and making a significant impression. Our speech writing company includes experienced writers who know how to change your ideas into powerful words that resonate. We are always here to assist if you need a motivational address, a heartfelt toast, or a persuasive business proposal.",
      items: [
        "Speeches are designed to suit your event and audience perfectly.",
        "A perfect mix of storytelling, persuasion, and impactful language.",
        " We’re passionate about making your message clear, memorable, and engaging.",
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "The Benefits Of A Professional Speech Writers For Hire",
      subheading:"Are you looking for top-notch speech writing services? We’re here to help you make a lasting impact. Our team offers everything from drafting and editing to publishing support. We’re committed to delivering high-quality speeches that leave a significant mark. Hire our expert speechwriters today, and let’s make your message heard loud and clear."
    },

  ];
const mainthreeparas = [
  <>Let Us Write Your Speech, You Enjoy The Standing Ovation</>,
  <>Our expert speech writers will ensure your words are remembered for years to come. If you want to make your speech even more captivating, then our movie script writers can bring their cinematic flair to give your words even more depth and excitement.</>
]



  const faqData =[
  {
    question: "What’s The Difference Between Speech Writing And Content Writing?",
    answer: "Speech writing focuses on crafting words meant to be spoken aloud, with attention to tone, rhythm, pacing, and audience engagement. Content writing, on the other hand, is typically designed to be read, emphasizing clarity, structure, and searchability. While both require strong storytelling, speech writing prioritizes verbal impact and delivery."
  },
  {
    question: "Can Speech Writers Help Me With Both Formal And Informal Speeches?",
    answer: "Yes. Professional speech writers can adapt their style to suit your needs—whether you require a formal corporate presentation, a wedding toast, a motivational keynote, or an informal community address."
  },
  {
    question: "Can Speech Writing Services Help With Both Short And Long Speeches?",
    answer: "Absolutely. Whether you need a concise 2-minute opening remark or a detailed 30-minute keynote, experienced speech writers can tailor the content length and structure to keep the audience engaged from start to finish."
  },
  {
    question: "What Should I Look For When Hiring A Speech Writer?",
    answer: "Look for a writer with strong communication skills, proven experience in your type of speech, and the ability to capture your voice and personality. Reviewing samples, testimonials, and past work can also help you choose the right fit."
  },
  {
    question: "How Do I Communicate My Speech Goals Effectively To A Speech Writer?",
    answer: "Be clear about your audience, the event, the tone you want to convey, and any key messages or stories you want included. Sharing your personal speaking style, past speeches, or even a rough outline can help the writer tailor the work to your needs."
  },
  {
    question: "How Much Do Professional Speech Writing Services Cost?",
    answer: "Prices vary depending on length, complexity, and turnaround time. Shorter, simpler speeches may cost a few hundred dollars, while detailed, high-profile presentations may be priced higher. Many writers also offer revision packages to ensure your satisfaction."
  }
];







const tabs = [
  {
    id: 1,
    label: "Inspirational Speeches",
    paragraph: "Our speech writers for hire write powerful speeches that spark motivation, and confidence and energize your audience. Whether it’s for a graduation, business event, or personal milestone, we’ll help you deliver words that inspire and leave an impression for a long time.",
    img: img1, // main image shown below
    heading: "Inspirational Speeches",
  },
  {
    id: 2,
    label: "Educational Speeches",
    paragraph: "Explaining complex topics doesn’t have to be boring. Our educational speech writing service makes information clear, intriguing, and easy to understand. We’ll help you share knowledge for a seminar, workshop, or lecture in a way that keeps your audience interested.",
    img: img2, // main image shown below
    heading: "Educational Speeches",
  },
   {
    id: 3,
    label: "Persuasive Speeches",
    paragraph: "A great speech can positively change minds and rally people behind your idea. We create compelling arguments and strong messaging that make people listen, think, and take action.",
    img: img3, // main image shown below
    heading: "Persuasive Speeches",
  },
   {
    id: 4,
    label: "Special Occasion Speeches",
    paragraph: "A heartfelt speech can make any occasion unforgettable. Whether it’s a wedding toast, retirement speech, or anniversary message, we’ll help you express your feelings in a way that feels natural and meaningful. We also offer comic book writing services, so if you're working on a speech for a comic-related project or event, we've got you covered.",
    img: img4, // main image shown below
    heading: "Special Occasion Speeches",
  },
   {
    id: 5,
    label: "Business and Professional Speeches",
    paragraph: "Confidence and clarity matter a lot in the business world. We help you communicate with authority, professionalism, and impact when you are addressing a boardroom, leading a conference, or giving a keynote speech.",
    img: img5, // main image shown below
    heading: "Business and Professional Speeches",
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
export default Speech