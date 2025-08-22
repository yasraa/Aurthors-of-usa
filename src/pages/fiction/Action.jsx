import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/Slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/actr.png'
import Rightbook from '../../assets/actl.png'

import img1 from '../../assets/acth.png';
import img2 from '../../assets/qandt.png'; 
import img3 from '../../assets/pira.png';
import img4 from '../../assets/sandm.png';



const Action = () => {
    
  const paras = [
    <>Professional Adventure Fiction Ghostwriters For Hire! </>,
<>If you are thinking about writing a novel that includes a lot of thrill, action, and adventure</>,
<> we’d like to welcome you aboard! Your ideas and our words can create magic, Our action fiction ghostwriters will set everything else on fire.</>
  ];
  const sectionData = [
    {
      heading: "Your Ultimate Source Of Action Adventure Writing Service",
      subheading: "What characteristics are present in good action and adventure fiction? Having a great deal of experience, professionalism, and passion for action adventure. Not sure how to accomplish that? Don't worry. Our skilled writing staff is quite knowledgeable on how to do this. Our talented Adventure Fiction Writers can bring your story concept to life thanks to their years of experience and impressive skill sets.",
      items: [
       "Moreover, we take care of everything for you, including book promotion, editing, and proofreading, all carried out by experienced editors. We write tales that captivate your viewers till the very last page. Hire a skilled adventure fiction book writer. If you want to share your narrative with the world, hire a skilled writer from our team. We will translate your ideal fictional action scenario onto paper and disseminate it to interest groups in a way that no one else can."
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "What Makes Our Action Adventure Ghostwriters Exceptional?",
      subheading:"Our writers can create thrilling stories in the genres of adventure fiction, action fiction, or a mix of both, using their creative imaginations. They know how to keep the reader interested in every aspect of the novel, from the characters and the plot to the setting. Our writers have a knack for making the reader visualize the action better than movies can.",
      items: [
        "Our Action and Adventure Fiction Writers provide their services in countless genres.",
        " We ensure to cater to your needs.",
        "Not a single team member is allowed to breach any client’s privacy by disclosing their identity."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Should You Hire Our Best Action Fiction Ghostwriters?",
      subheading:"Our team of experts is ready to assist you with any aspect of your writing project, from developing a captivating plot to refining your manuscript. We are committed to delivering excellent service and high-quality work. Don’t let your ideas gather dust on a shelf. Contact the best Action Fiction Writers for Hire today, and let us help you bring the best out of your creation."
    },

  ];
const mainthreeparas = [
  <>Bring Your Story to Life With a Book Writer by Your Side!</>,
  <>Hire a book writer now, and start working on your first book. Allow Us To Make You Realize Your Full Literary Potential and make you stand out in the crowd of millions with your bestseller book!</>
]



  const faqData =[
  {
    "question": "What is action fiction?",
    "answer": "Action fiction is a genre that frequently has brave characters overcoming great obstacles and foes. It blends exciting, fast-paced stories with dramatic physical interactions. It focuses on exciting action scenes, making reading a heart-pounding experience."
  },
  {
    "question": "How do you write a good action novel?",
    "answer": "To write a successful action novel, focus on creating interesting, multi-dimensional characters, including heroes and villains. Create exciting, tension-filled action scenes that are engaging and well-paced. Lastly, add emotional depth and stakes to make readers care about how the characters' battles turn out."
  },
  {
    "question": "How to hire a good adventure fiction writer?",
    "answer": "You can hire a good writer by reviewing each writing website and comparing their services; don’t forget to read testimonials before hiring an action-adventure writer for your project."
  },
  {
    "question": "What are the features of action writing?",
    "answer": "High stakes, a definite sense of danger, and potentially fatal circumstances are common elements of action fiction."
  }
]









const tabs = [
  {
    id: 1,
    label: "Action Thrillers",
    paragraph: "Are you ready to experience the thriller of your lifetime? Want to publish something that gives everyone goosebumps? Say no more! Our action authors are recognized for their best work in the field.",
    img: img1, // main image shown below
    heading: "Action Thrillers",
  },
  {
    id: 2,
    label: "Quests and Treasure Hunt",
    paragraph: "Adventure readings need to be mind-stimulating, and that’s what our writers are best known for. Whether your story concerns treasure hunts or quests, leave everything to our adventure writers.",
    img: img2, // main image shown below
    heading: "Quests and Treasure Hunt",
  },
   {
    id: 3,
    label: "Pirate adventures",
    paragraph: "Even if you are a pirate fan and have a great maritime story in your mind, our incredible team of adventure fiction authors will provide you with the best pirate stories.",
    img: img3, // main image shown below
    heading: "Pirate adventures",
  },
   {
    id: 4,
    label: "Supernatural And Mythical",
    paragraph: "Whether you want us to break your myths or create new ones, everything is possible if you hire an experienced and professional writer passionate about everything from urban legends to bigfoot or alien evasion.",
    img: img4, // main image shown below
    heading: "Supernatural And Mythical",
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

export default Action