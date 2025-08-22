
import Nav from '../../components/nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/rhymer.png'
import Rightbook from '../../assets/rhymel.png'

import img1 from '../../assets/rhme.png';



const Songwriting = () => {
    
  const paras = [
    <>Master The Art Of Music With Expert Songwriting Services</>,
<>Ever get that tune stuck in your head, but you just can't place it?</>,
<>Or maybe you have a bunch of feelings and thoughts you want to put into a song, but you are not sure how? Our songwriting services have got you covered. We have a dynamic team of seriously talented songwriters for hire who can take those jumbled ideas and turn them into amazing songs. </>
  ];
  const sectionData = [
    {
      heading: "Partner With Expert Songwriters For Hire For Chart-Topping Tracks",
      subheading: "Whether you are aiming for your neighborhood or the whole world to hear your music, we can help you create songs that truly connect. Consider us as your musical partners who are all ears for you and are ready to take your thoughts and weave them into something amazing. We will work side-by-side with you, figuring out everything from the words and the tune to the vibe and the style.",
      items: [
       "Our songwriting services are here to make your whole album experience pop.",
       "We are talking about designing album art that shows what your music is about, the kind of cover that makes people stop and take notice.",
       "We will get your songs out there, too, making sure they land on all the right platforms, so your fans, and new ears, can find them. Plus, we'll help you get the word out,"

      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Find The Perfect Lyricist For Hire At The Right Price",
      subheading:"Whether you are vibing to hip-hop beats or feeling the pull of a timeless classic, you need to hire a songwriter who gets it. Someone who can jump into any style and nail it. It's like they have a special talent for translating what you feel into something you can sing along to.",
      items: [
        "You have this song idea brewing inside, and you want someone to treat it with the respect it deserves like it's their own, then you have found us.",
        "We are a team of writers who love to collaborate, to bounce ideas back and forth until we have something truly special.",
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "What Makes Our Songwriting Services the Best Choice?",
      subheading:"Making music is a real journey and who you team up with can change everything. At Writers Of USA, we see ourselves as more than just people who write songs. We are your partners, the folks who get your vision, and we are just as excited about your music as you are. Our songwriting services are here to champion your sound, and to help you unlock all the amazing things you can do with your music."
    },

  ];
const mainthreeparas = [
  <>Songwriting Services That Strike The Right Chord</>,
  <>Do you want to get those emotions out there and really make an impact with your music? Reach out to our songwriters for hire today.The kind that makes them hit repeat. And if you have a story you want to see on the big screen, we do that too. Let's make some music or a movie that truly connects.</>
]



  const faqData =[
  {
    "question": "What Are Songwriting Services?",
    "answer": "Songwriting services help you create original songs tailored to your style and message. Professional songwriters handle everything from lyrics and melodies to full musical arrangements, giving you a polished final product."
  },
  {
    "question": "Can I Hire A Songwriter For Just One Song?",
    "answer": "Yes, you can hire a songwriter for a single song. Many songwriters offer flexible services, so you can work with them on one project without committing to anything long-term."
  },
  {
    "question": "Do Songwriters Charge Per Song, Per Hour, Or Per Project?",
    "answer": "Songwriters may charge per song, per hour, or per project, depending on the complexity and scope. Rates can vary based on the songwriter’s experience and the level of detail involved."
  },
  {
    "question": "How Long Does It Take To Write A Custom Song?",
    "answer": "Writing a custom song can take anywhere from a few days to a few weeks. The timeline depends on the complexity of the song and how quickly feedback and revisions are handled."
  },
  {
    "question": "Do Songwriters Specialize In Specific Genres (E.g., Pop, Rock, Country)?",
    "answer": "Yes, many songwriters specialize in certain genres. It's important to find a songwriter whose style and experience match the sound and vibe you're looking for."
  },
  {
    "question": "Can I Collaborate With The Songwriter During The Process?",
    "answer": "Absolutely! Most songwriters welcome collaboration and input. Sharing your ideas and feedback helps ensure the song reflects your vision and feels authentic to you."
  }
]








const tabs = [
  {
    id: 1,
    label: "MELODY WRITING",
    paragraph: "We are all about creating songs that just get you. The ones that tap right into how you are feeling or the ideas you want to share. We take those thoughts and turn them into music that comes alive and makes your compositions not just heard, but truly remembered.",
    img: img1, // main image shown below
    heading: "MELODY WRITING",
  },
  {
    id: 2,
    label: "LYRICS COMPOSITION",
    paragraph: "Our lyricist for hire is not just writing words, they are crafting stories that really hit you in the feels. They will grab your story and turn it into lyrics that truly show who you are, making listeners feel something real. It's all about making your music a genuine you. And if you have a bigger story brewing, like a novel, we have novel writers for hire ready to help you tell that tale too.",
    img: img1, // main image shown below
    heading: "LYRICS COMPOSITION",
  },
   {
    id: 3,
    label: "LYRICS EDITING",
    paragraph: "Our team of editors will go through your lyrics with a fine-tooth comb. We will make sure the words flow smoothly, like a conversation, and that every single one hits the mark emotionally. It's all about making sure your message is clear and that your music really connects with people, hitting them right in the feels.",
    img: img1, // main image shown below
    heading: "LYRICS EDITING",
  },
   {
    id: 4,
    label: "SONG COMPOSITION",
    paragraph: "We are in the business of crafting songs that just click with you. We take all the musical pieces, the melody, the harmonies, and the words, and mix them up into something that's smooth and gripping. Our goal is to create songs that not only entertain but also leave a lasting impression, something you'll keep humming long after you have heard it.",
    img: img1, // main image shown below
    heading: "SONG COMPOSITION",
  },
   {
    id: 5,
    label: "VOCAL WRITING",
    paragraph: "Our writers are like the secret ingredient to making your music dazzle. They are masters at creating vocal lines that just fit perfectly with the music, genuinely bringing out the emotions and adding another layer of depth. They will take your songs and give them a unique voice and if you are looking to elevate your music, you can hire songwriter online who can bring this level of expertise to your project.",
    img: img1, // main image shown below
    heading: "VOCAL WRITING",
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
export default Songwriting