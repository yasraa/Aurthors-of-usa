
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

import img1 from '../../assets/action.png';



const Comictrans = () => {
    
  const paras = [
    <>Professional Comic Book Spanish & French Translation Service!</>,
    <></>,
   <>Looking for a translation service that does not cost you an arm and a leg with an exceptional track record? Look no further because our team of comic book translators is at your disposal 24/7. You only have to take out your cell phone and call us. We provide comic book spanish & french translation services.</>
  ]
  const sectionData = [
    {
      heading: "Get Your Comic Book in Spanish Translation Today!",
      subheading:"We all grew up reading countless comic books, and it's the best thing to happen to us. However, for those who did not have access to comic books, it always made us wonder how they are even enjoying their lives. Having no access to books is one thing, and the language barrier is another. Hence, we decided to make a change for good. A book should not only be translated into English but other languages as well, such as Spanish.",
      items: [
 "Ghostwriting",
  "Proofreading",
  "Book Formatting",

],

      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Flawless Comic Book French Translation",
      subheading:"We don’t just turn comic books into Spanish but also offer this translation service in French. So if you are looking for a professional translator who can translate your comic book into French, you are at the right place. Our team of translators consists of native speakers because we believe in the work's authenticity. Our Comic Book Translators know how to make words work because they have a vast vocabulary.",
      items: [
  "Expert Translators In Diverse Fields",
  "Thorough Quality Control",
  "Support For Several Languages",
  " Faster Response Time With A Larger Team",
  "Cultural Sensitivity & Awareness"
],

      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Choose WritersOfUSA For Your eBook Translation Services?",
      subheading:"Our WritersOfUSA provides all-inclusive assistance for the full book creation process, ranging from formatting and marketing to ghostwriting and editing. Allow us to turn your thoughts into a well-written, powerful book that appeals to people everywhere."
    },

  ];
const mainthreeparas = [
<>Bring Your Story To Life With Our Book Translation Company</>,
<>Are you prepared to reach a wider audience and tell your story globally? Get in touch to avail our book German translation services right now to open up new avenues for communication with readers throughout the globe.</>
]



  const faqData =[
  {
    "question": "What Is Book Translation, And Why Is It Important For Authors?",
    "answer": "Book translation involves your original words being written in another language so that they can be understood by more people across the world."
  },
  {
    "question": "What’s The Difference Between Book Translation And Localization?",
    "answer": "The main difference is that translation turns your words into another language, while localization adjusts the content so it feels relatable to the target audience."
  },
  {
    "question": "Who Owns The Rights To The Translated Version Of My Book?",
    "answer": "As the author, you hold the rights to the translated version of your book, just as you do with the original."
  },
  {
    "question": "What If I Want To Make Changes To The Translated Book?",
    "answer": "We offer unlimited revisions until you're 100% pleased with the final version of your translated book, so if this is the case then all you have to do is let us know."
  },
  {
    "question": "Can You Format The Translated Text For Different eBook Platforms (Kindle, iBook’s, Etc.)?",
    "answer": "Yes, we format your translated book to meet the specific requirements of all of the top eBook platforms, ensuring your words can reach readers everywhere."
  },
  {
    "question": "Can I Receive The Translation In Multiple Formats (ePub, PDF, Mobi, Etc.)?",
    "answer": "Absolutely, WritersOfUSA will deliver your book translation in whatever formats you want, whether it be ePub, PDF, Mobi or other(s)."
  },
  {
    "question": "How Long Does It Take To Translate A Book?",
    "answer": "The rule for writing and translating a book is the same: the more the words, the longer the duration."
  },
  {
    "question": "How Much Does It Cost To Translate A Book?",
    "answer": "0.08 And 0.20 cents per word is the typical cost range for professional translation in the USA."
  },
  {
    "question": "Do I Need To Pay Upfront Or After The Translation Is Completed?",
    "answer": "When you work with WritersOfUSA, you can pay either in advance or after the completion of your book translation project."
  },
  {
    "question": "Are There Any Hidden Fees Beyond The Initial Quote?",
    "answer": "No hidden fees, the quotes we provide are straightforward and transparent, with no surprise charges. What you see is what you pay."
  }
]









const tabs = [
  {
    id: 1,
    label: "General Translation",
    paragraph: "Our translators ensure that the translation accurately conveys the original tone, style, and aim while capturing the essence of your tale. Our professional book translation services are ideal for both fiction and nonfiction, and it's a terrific way to reach new readers without sacrificing the core of your work.",
    img: img1, // main image shown below
    heading: "General Translation",
  },
  {
    id: 2,
    label: "Literary Translation",
    paragraph: "Our literary book French translation offers the thorough approach required to preserve your work's distinct style and feel, especially for works that call for a delicate touch with tone, phrasing, and nuance.",
    img: img1, // main image shown below
    heading: "Literary Translation ",
  },
   {
    id: 3,
    label: "Genre-Specific Translation",
    paragraph:"Every genre has a unique voice. Our team of translators is aware of this and adjusts translations to fit the unique linguistic norms and expectations of different genres, guaranteeing that every aspect of your book appeals to readers.",
    img: img1, // main image shown below
    heading: "Genre-Specific Translation",
  },
   {
    id: 4,
    label: "Technical Translation",
    paragraph: "Our expert translators are available to guarantee accuracy and clarity if your book deals with difficult, technical topics. We take great care when translating technical words so that your target audience can easily understand and use them.",
    img: img1, // main image shown below
    heading: "Technical Translation",
  },
   {
    id: 5,
    label: "Cultural Adaptation",
    paragraph:"In an attempt to make your content feel more relatable for your target readership, we tailor it according to their cultural references, idioms and norms.",
    img: img1, // main image shown below
    heading: "Cultural Adaptation",
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

export default Comictrans