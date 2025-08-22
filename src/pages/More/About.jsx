
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Sidebook from '../../assets/edir.png'
import Rightbook from '../../assets/edil.png'




const About = () => {
    
  const paras = [
    <>About Us</>,
    <>If you are looking for bestselling ghostwriters, editors, or proof-readers</>,
   <></>
  ]
  const sectionData = [
    {
      heading: "Your Story, Our Words",
      subheading: " Book writing is an art not everyone excels at. There are times when you really want to write it on your own, but a busy schedule does not allow you to do so.In such times, the team behind Writers Of USA is your savior. Our ghostwriters can compose the best-selling book you have always envisioned.",
      items: [
 "Ghostwriting",
  "Proofreading",
  "Book Editing",
  "Book Printing",
  "Book Formatting",

],

      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Premium Ghostwriting Services Tailored To Your Needs",
      subheading:"Are you looking for professional ghostwriting services to help share your story? Our ghostwriting company is here to make it happen. We have a team of the best ghostwriters for hire who excel at crafting everything from detailed narratives to tales of adventure or stories of struggle and success. We’ll help give your story the voice it deserves—one that inspires and resonates with your audience.",
      items: [
  "Our team brings clarity and creativity to the content.",
  "We offer fresh ideas for writing, marketing, promoting, and book publishing services.",
  "We elevate the book’s quality by blending professional expertise with your objectives.",
  "We provide affordable ghostwriting services to help structure your ideas into a cohesive book.",
  "Our ghostwriting company offers new perspectives that make the book feel unique and mesmerizing.",
  "We refine and trim unnecessary content to improve the overall flow and quality."
],


      img: Rightbook
    },
  ];
    



  return (
    <div>
              <Nav />
     <Hero paras={paras} sections={sectionData} secsections={section2Data} />
    <Footer />
    </div>
  )
}

export default About