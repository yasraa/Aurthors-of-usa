import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/Slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/side-books.png'
import Rightbook from '../../assets/cookr.jpg'

import img1 from '../../assets/action.png';
import img2 from '../../assets/children.png'; 
import img3 from '../../assets/fantasy.png';
import img4 from '../../assets/erotic.png';
import img5 from '../../assets/suspense.png';


const Cookbook = () => {
    
  const paras = [
    <>Professional Cookbook Writing Services - The Awesomeness Of Delicious Cooking!</>,
<> Are you still wondering about recipe book writer near me? </>,
<> Writers Of USA offers cookbook writing services for a variety of meals, quick fixes, delicious recipes, and on other subjects. Through adept word choice, the recipe book writer help in USA arouse and captivate the taste senses of our audience. Also, we prudently study how to syndicate recipes, procure skills in the kitchen, and create scrumptious cookbooks that will charm cooks.</>
  ];
  const sectionData = [
    {
      heading: "Our Ghost Recipe Book Writing Services: Irresistibly Delicious!",
      subheading: "Make your own cookbook to spread the love of cooking and share enjoyable recipes with the world! Of course, there are limitless meals in the culinary industry that are relished by folks of all ages. Our brilliant cookbook writer has fashioned books for a variety of audiences, including serving meals and leaving customers with drooling desires.",
      items: [
       "Our writers who provide book writing services are also experts in marketing cookbooks, covering all of their features and technical specifics. The ‘’recipe book writer services near me’’ classify the target audience and then produce effective content especially for cook book writing. "
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Cookbook Ghost Writer For Hire – The Go-To Cook Book Ghostwriting Company",
      subheading:"Our recipe book writing services may transmute your ideas into best-sellers with the help of our veteran cook book writers for hire! So, do you need backing as an aspiring cooking writer with our cook book writing help? To create favorite recipes for your audience or to engage your foody onlookers with the delicious cooking content, you can ask our team of expert book authors for help. Our cook author services treasure excellent cookbook writing, which is why our cookbook-writing service is committed to chefs, cooking experts and passionate writers who love writing about cooking or their own splendid culinary tastes.",
      items: [
        "Comprehensive cook book writing services are provided by our talented staff of authors.",
        "Write an engrossing tale relevant to delicious food and cooking that will hold readers' attention.",
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Should Your Cook Book Ghostwriting Help Be Of Writers Of USA?",
      subheading:"Everything a book writing company offers is included in our cookbook writing services, from writing and editing to publishing. Your ideas shouldn't be left on the shelf; our cook author services work on the same! Reach out to our top recipe book writing services in the US right now, and let us help you in making your cookbook a masterpiece! Have the professional cookbook writers for hire by your side! As a cook book ghostwriting company, we take the lead!"
    },

  ];
const mainthreeparas = [
  <>Have The Professional Cookbook Ghostwriters In The USA!</>,
  <>You have a great opportunity to involve with your readers and familiarize yourself through your cookbook writing! Crafting a cookbook is an admirable technique to launch a relationship with your readers and make yourself known to their homes! Make sure your dish tastes just as fantastic in the kitchen of your reader as it does in yours.</>
]



  const faqData =
[
  {
    "question": "What Should I Look For When Hiring A Cookbook Ghostwriter?",
    "answer": "Look for someone who can translate your cooking expertise into clear, engaging writing—especially important when the audience may not have culinary experience; often it takes both a cook and a writer working together to achieve this effectively."
  },
  {
    "question": "What Are Publishers Looking For In A Cookbook Proposal?",
    "answer": "Publishers expect proposals to outline your target audience, competing titles, content topics, core concept, and marketing or promotional strategies."
  },
  {
    "question": "How Long Does It Take To Write A Cookbook Proposal?",
    "answer": "It typically takes about two to three months to develop a polished proposal ready for submission, after the writer reviews the first draft."
  },
  {
    "question": "What Is The Cost Of Writing A Cookbook?",
    "answer": "A standard 226-page cookbook typically costs between $3,000 and $4,000, with prices rising when there are more recipes, charts, or complex layouts involved."
  },
  {
    "question": "Can You Help Create A Recipes EBook From Scratch?",
    "answer": "Yes—our service includes end-to-end recipe eBook creation: topic selection, content writing, layout and styling, imagery, eBook formatting (e.g., PDF), landing page creation, and promotion."
  },
  {
    "question": "How Do You Document The Results Of Recipe Testing?",
    "answer": "Recipe testing is meticulously recorded—including observations, adjustments, and clarifications—ensuring the recipe is reliable and fully understandable to readers."
  }
]










const tabs = [
  {
    id: 1,
    label: "By Course Or Type of Recipe",
    paragraph: "It includes breads, salads, pasta and grains, chicken and meat, soups, pies, cakes, and cookies, amongst other options. It's the arrangement that makes reading cookbooks the calmest. It's also the most common and, for many cookbooks, the finest choice for one that will be used frequently. It works well with aromatic recipes, multipurpose cookbooks, engaging books, and baking books, causing an extensive range of baked products—as you name it.",
    img: img1, // main image shown below
    heading: "By Course Or Type of Recipe",
  },
  {
    id: 2,
    label: "By Seasonal Recipes",
    paragraph: "The four seasons (spring, summer, fall, and winter) are set accordingly. This may be the best way to organize the book if it's exactly meant for detailed studies of produce or if the season plays a big title role in the book's topic. For example, the book Six Seasons is aristocratic after the seasons, and the arrangement of the book reproduces this idea. It is a great idea because it is stress-free to remember and recall!",
    img: img2,
heading: "By Seasonal Recipes",
  },
 
  {
    id: 3,
    label: "By Menu",
    paragraph: "It includes meals, theme menus, and entertainment. Certainly, such cookbooks are appropriate for numerous types of occasions or ceremonies. These cookbooks might be a go-to source for years, whether someone is arranging a party, searching for a muse when cooking for a large gathering, or just wanting to make weekend dinners more exceptional. Events like Christmas, Black Friday or New Year's eve are protuberant when it comes to creating a recipe book based on the occasions.",
    img: img3,
    heading: "By Menu",
  },
  {
    id: 4,
    label: "By Location",
    paragraph: "It depends on certain towns, areas, nations, restaurants, or areas, whether near or far. There is no scarcity of storyline and scene launching throughout the framework. These cookbooks fit the description of an armchair traveler Choosing places that people sincerely want to visit—or, at the out-and-out least, experience virtually through the recipes and images—is advantageous. Keeping the book well-ordered and practical for kitchen usage while steering clear of overly detailed content.",
    img: img4,
    heading: "By Location",
  },
  {
    id:5,
    label:"By Technique",
    paragraph:"This type of recipe book also goes a long way because it focuses on cooking techniques such as pickling, frying, steaming, grilling etc. Contrasting to other cookbook forms, it offers an excellent arrangement for teaching techniques. It's also an admirable way to teach traditional cooking methods to a new audience that may not be renowned outside of their state or area. However, getting the book usable can be challenging.",
    img:img5,
    heading:"By Technique"
  }
  
 
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
export default Cookbook