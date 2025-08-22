
import Hero from '../../components/Hero.jsx';

import Nav from '../../components/nav.jsx';
import FAQ from '../../components/Faq.jsx';
import Sidebook from '../../assets/side-books.png'
import Rightbook from '../../assets/book-right.png'
import Main from '../../components/Main.jsx';
import img1 from '../../assets/action.png';
import img2 from '../../assets/children.png'; 
import img3 from '../../assets/fantasy.png';
import img4 from '../../assets/erotic.png';
import img5 from '../../assets/suspense.png';
import img6 from '../../assets/drama.png';
import img7 from '../../assets/novel.png';
import img8 from '../../assets/fiction.png'
import img9 from '../../assets/romance.png'
import Slides from '../../components/slides.jsx';
import Footer from '../../components/Footer.jsx';
import Testimonials from '../../components/Testimonials.jsx';
import Location from '../../components/Location.jsx';

const Ghostwriting = () => {
  const paras = [
    <>Professional <strong>Ghost Writing Services</strong>!</>,
    <>We create masterpieces and help you become a <strong>bestseller</strong>.</>,
    <>Our <strong>book writing service</strong> is dedicated to helping authors turn their dreams into published reality. Are you one of the dreamers? Allow us to transform your dreams into reality with the expertise of our professional book writers! Our <strong>Ghost book writing services</strong> aren’t limited to any genre or style, and we try our best to cater to your needs.</>
  ];
  const sectionData = [
    {
      heading: "Premium Ghostwriting Services Tailored To Your Needs",
      subheading:"Are you looking for professional ghostwriting services to help share your story? Our ghostwriting company is here to make it happen. We have a team of the best ghostwriters for hire who excel at crafting everything from detailed narratives to tales of adventure or stories of struggle and success. We’ll help give your story the voice it deserves—one that inspires and resonates with your audience.",
      items: [
        "Ghostwriting",
        "Book Formatting",
        "Book Cover Designs",
        "eBook Writing"
      ],
      img: Sidebook
    },
  ];
const mainthreeparas = [
  <>Make Your Story Shine With The Expertise Of A Ghostwriter</>,
  <>Are you ready to write your book but need a little help? A ghostwriter can help you compose a professionally written book that stands out and gets noticed.</>
]
  const section2Data = [
    {
      heading: "What Makes Our Ghostwriting Company The Top Choice Today?",
      subheading:"Even the best authors occasionally rely on ghostwriters sometimes to meet strict deadlines or tackle the demands of their projects. In fact, you might be surprised to learn that certain parts of your favorite books were actually penned with the help of a ghostwriter.",
      items: [
        "Our team brings clarity and creativity to the content.",
        "We offer fresh ideas for writing, marketing, promoting, and book publishing services.",
        "We elevate the book’s quality by blending professional expertise with your objectives.",
        "We provide affordable ghostwriting services to help structure your ideas into a cohesive book.",
        "Our ghostwriting company offers new perspectives that make the book feel unique and mesmerizing."
      ],
      img: Rightbook
    },
  ];


  const faqData = [
  {
    "question": "What Is A Christian Ghostwriter, And How Can They Help With My Book?",
    "answer": "A professional writer who produces writing that reflects Christian principles and ideals is known as a Christian ghostwriter. They help you develop your thoughts, write, and refine your book."
  },
  {
    "question": "Will I Retain The Rights To My Book If I Use A Christian Ghostwriter?",
    "answer": "If you and the ghostwriter have a clear agreement, you will often keep the rights to your work. Before the project begins, make sure to talk about ownership and rights."
  },
  {
    "question": "Will My Voice And Beliefs Be Preserved In The Writing?",
    "answer": "Our ghostwriters take your input into account throughout the process to ensure that your message and beliefs are perfectly represented in the content."
  },
  {
    "question": "Can I Use Christian Ghostwriting For Fiction And Non-Fiction Books?",
    "answer": "Yes, since our Christian ghostwriting services can be personalized according to each individual client’s needs, you can reach out to us with all your fiction and non-fiction book projects."
  },
  {
    "question": "Are There Any Guarantees Of Confidentiality?",
    "answer": "Yes, our ghostwriting services have confidentiality agreements in place to keep our clients’ projects as safe and secure as possible."
  },
  {
    "question": "Can I Self-Publish The Material A Ghostwriter Produces?",
    "answer": "Absolutely, our clients are given 100% control over how their book, in parts or entirety, is both published whether it be traditional, self or hybrid."
  },
  {
    "question": "What If I'm Not Fully Satisfied With The Final Result?",
    "answer": "You can request as many revisions as you want until you are fully satisfied."
  },
  {
    "question": "How Much Do Christian Ghostwriting Services Cost?",
    "answer": "The length of the task and the writer's experience determine how much these services cost. The common range for a full project lies between 15,000 to 50,000 USD."
  }
]


   const mainoneData = [
    {
      heading: "Make Your Story Shine With The Expertise Of A Ghostwriter",
      subheading:"Are you ready to write your book but need a little help? A ghostwriter can help you compose a professionally written book that stands out and gets noticed."
    },
  ];

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
    label: "Erotic",
    paragraph: "Are you a fan of erotic novels and want to write one? We can assist you in writing your erotic novel. If you have a plot in mind, drop us a message, and we'll take over your project and put your thoughts into words.",
    img: img4,
    heading: "EROTIC",
  },
  {
    id: 5,
    label: "Suspense",
    paragraph: "A well-written suspense or thriller is the only thing that can keep a reader up at night. If renowned authors like Stephan King inspire you, you can publish a book that fits this genre's requirements. Get in touch with us.",
    img: img5,
    heading: "SUSPENSE",
  },
  
   {
    id: 6,
    label: "Drama",
    paragraph: "You never want to miss a good drama. A sizable audience prefers to read drama over fantasy and fiction. Let's share your good drama with the world if you have one in mind. Publish a drama book with our help today. ",
    img: img6,
    heading: "DRAMA",
  },
   {
    id: 7,
    label: "Novel",
    paragraph: " Would you like to pen a narrative-based book? We can assist you in drafting novels on a variety of subjects. We specialize in novel writing services understand what's necessary to produce content on various subjects.",
    img: img7,
    heading: "NOVEL",
  },
   {
    id: 8,
    label: "Fiction",
    paragraph: "Writing a fiction novel takes time, effort, and a captivating storyline. Let our writers know if you have brilliant concepts for a fiction or nonfiction book. We'll bring your concepts to life and reveal the world of endearing and magical fictional characters. ",
    img: img8,
    heading: "FICTION",
  },
    {
    id: 9,
    label: "Romantic",
    paragraph: " John Green, Stephanie Meyer, and Daniel Steel served as inspirations. You can hire a writer for your love novel. Over the years, our writers have read and written about several romantic novels for clients; they can do the same for you!",
    img: img9,
    heading: "ROMANTIC",
  }
];


const servicehead = {
  heading: "The Process Behind Our Expert Ghost Writing Services",
}




  return (
    <div>

      <Nav />
      
      <Hero paras={paras} sections={sectionData} secsections={section2Data} />
      <Main mainones={mainoneData} mainthrees={mainthreeparas}/>
      <Slides tabs={tabs} />
<Testimonials service={servicehead}/>
<FAQ data={faqData} />
       <Location />
    <Footer />
    </div>
  )
}

export default Ghostwriting;