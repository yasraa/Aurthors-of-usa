
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


const Childrenedit = () => {
    
  const paras = [
    <> </>,
<></>,
<> </>
  ];
  const sectionData = [
    {
      heading: "",
      subheading: "",
      items: [
       "",
       "",
       ""
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "",
      subheading:"",
      items: [
        ""
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "",
      subheading:""
    },

  ];
const mainthreeparas = [
  <></>,
  <></>
]



  const faqData =[

]








const tabs = [
  {
    id: 1,
    label: "",
    paragraph: "",
    img: img1, // main image shown below
    heading: "",
  },
  {
    id: 2,
    label: "",
    paragraph: "",
    img: img2, // main image shown below
    heading: "",
  },
   {
    id: 3,
    label: "",
    paragraph: "",
    img: img3, // main image shown below
    heading: "",
  },
   {
    id: 4,
    label: "",
    paragraph: "",
    img: img4, // main image shown below
    heading: "",
  },
   {
    id: 5,
    label: "",
    paragraph: "",
    img: img5, // main image shown below
    heading: "",
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


export default Childrenedit