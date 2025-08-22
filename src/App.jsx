
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Ghostwriting from './pages/gwriting/Ghostwriting';
import StoryWriting from './pages/gwriting/Story-writing';
import SongWriting from './pages/gwriting/Songwriting';
import MemoirWriting from './pages/gwriting/Memoir';
import NonFictionWritingServices from './pages/gwriting/Nonfiction';
import RhymeWriting from './pages/gwriting/Rhyme';
import ClimateBookWriting from './pages/gwriting/Climatebook';
import Biography from './pages/gwriting/Biography';
import Autobiography from "./pages/gwriting/Autobiography";
import Seocontent from './pages/gwriting/Seocontent';
import Script from './pages/gwriting/Script';
import Narrative from './pages/gwriting/Narrative';
import Novel from './pages/gwriting/Novel';
import Cookbook from './pages/gwriting/Cookbook';
import Wiki from "./pages/gwriting/Wiki";
import Speech from './pages/gwriting/Speech';
import Comedy from './pages/gwriting/Comedy';
import Movie from './pages/gwriting/Movie';
import Military from './pages/gwriting/Military';
import Comic from './pages/gwriting/Comic';
import EbookWriting from './pages/gwriting/EbookWriting';
import ChildrensBooks from './pages/gwriting/ChildrensBooks';
import FictionWriting from './pages/gwriting/FictionWriting';
import ScreenWriting from './pages/gwriting/ScreenWriting';
import BusinessBookWriting from './pages/gwriting/BusinessBookWriting';
import HiphopWriting from './pages/gwriting/HiphopWriting';

import Fiction from './pages/fiction/Fiction';
import Romance from './pages/fiction/Romance';
import Action from './pages/fiction/Action';
import Fantast from './pages/fiction/Fantast';
import SciFi from './pages/fiction/SciFi';
import Horror from './pages/fiction/Horror';

import Bookediting from "./pages/editing/Bookediting";
import Bookreview from "./pages/editing/Bookreview";
import Bookformating from "./pages/editing/Bookformating";
import Chicagoeditors from "./pages/editing/Chicagoeditors";
import Childrenedit from "./pages/editing/Childrenedit";
import Christianbookedit from "./pages/editing/Christianbookedit";
import Cookbookedit from "./pages/editing/Cookbookedit";
import Editsforself from "./pages/editing/Editsforself";
import Lineediting from "./pages/editing/Lineediting";
import Memoirediting from "./pages/editing/Memoirediting";
import Novelediting from "./pages/editing/Novelediting";
import Picturebookedit from "./pages/editing/Picturebookedit";
import Poetryediting from "./pages/editing/Poetryediting";
import Romanceedit from "./pages/editing/Romanceedit";
import Screenplayediting from "./pages/editing/Screenplayediting";
import Shortstoryeditor from "./pages/editing/Shortstoryeditor";

import Amazonbook from "./pages/publishing/Amazonbook";
import Ebookpub from "./pages/publishing/Ebookpub";
import Selfpub from "./pages/publishing/Selfpub";
import Publishingcompany from "./pages/publishing/Publishingcompany";


import Bookcover from "./pages/design/Bookcover";
import Illustration from "./pages/design/Illustration";
import Booktrailer from "./pages/design/Booktrailer";
import Childrenillustration from "./pages/design/Childrenillust";
import Comicillust from "./pages/design/Comicillust";
import Authorwebsite from "./pages/design/Authwebdesign"; 
import Childrenprinting from "./pages/design/Childrenprinting";

import Arabictrans from "./pages/services/Arabictrans";
import Frenchtrans from "./pages/services/Frenchtrans";
import Spanishtrans from "./pages/services/Spanishtrans";
import Germantrans from "./pages/services/Germantrans";
import Audiobook from "./pages/services/Audiobook";
import Chinesetrans from "./pages/services/Chinesetrans";
import Comictrans from "./pages/services/Comictrans";
import Booktrans from "./pages/services/Booktrans";
import Bookprint from "./pages/services/Bookprint";
import Bookmarket from "./pages/services/Bookmarket";
import Japtrans from "./pages/services/Japtrans";
import Russiantrans from "./pages/services/Russiantrans";

import Blog from "./pages/More/Blog";
import About from "./pages/More/About";
import Contactpage from "./pages/More/Contactpage";
import Cont from './pages/More/Cont'

import Austin from "./pages/location/Austin";
import Dallas from "./pages/location/Dallas";
import Atlanta from "./pages/location/Atlanta";
import Berkley from "./pages/location/Berkeley";
import Boston from "./pages/location/Boston";
import Chicago from "./pages/location/Chicago";
import Boulder from "./pages/location/Boulder";
import Denver from "./pages/location/Denver";
import Brooklyn from "./pages/location/Brooklyn";
import LosAngeles from "./pages/location/LosAngeles";
import Charlotte from "./pages/location/Charlotte";
import Miami from "./pages/location/Miami";
import Coloradosprings from "./pages/location/Coloradosprings";
import Columbus from "./pages/location/Columbus";
import Fairoaks from "./pages/location/Fairoaks";
import Fortworth from "./pages/location/Fortworth";
import Indianapolis from "./pages/location/Indianapolis";
import KansasCity from "./pages/location/Kansas";
import Nashville from "./pages/location/Nashville";
import Phoenix from "./pages/location/Phoenix";
import Portland from "./pages/location/Portland";
import Saltlake from "./pages/location/Saltlake";
import Sanfrancisco from "./pages/location/SanFrancisco";
import Sarasota from "./pages/location/Sarasota";


import BlogsPage from './pages/blog/BlogsPage';
import BlogPost from './pages/blog/BlogPost';

const App = () => {

  return (
    <Router>
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Ghostwriting" element={<Ghostwriting />} />
      <Route path="/Story-writing" element={<StoryWriting />} />
      <Route path="/song-writing-services" element={<SongWriting />} />
      <Route path="/memoir-writing" element={<MemoirWriting />} />
      <Route path="/non-fiction-writing-services" element={<NonFictionWritingServices />} />
      <Route path="/rhyme-writing" element={<RhymeWriting />} />
      <Route path="/climate-book-writing" element={<ClimateBookWriting />} />   
      <Route path="/biography-writing" element={<Biography />} />
      <Route path="/autobiography" element={<Autobiography />} />
      <Route path="/seo-content-writing" element={<Seocontent />} />
      <Route path="/script-writing" element={<Script />} />
      <Route path="/narrative-writing" element={<Narrative />} />
      <Route path="/novel-writing" element={<Novel />} />
      <Route path="/cook-book-writing" element={<Cookbook />} />
      <Route path="/wiki-writing" element={<Wiki />} />
      <Route path="/speech-writing" element={<Speech />} />
      <Route path="/comedy-writing" element={<Comedy />} />
      <Route path="/movie-writing" element={<Movie />} />
      <Route path="/military-fiction-writing" element={<Military />} />
      <Route path="/comic-book-writing" element={<Comic />} />
      <Route path="/ebook-writing-services" element={<EbookWriting />} />
      <Route path="/childrens-books" element={<ChildrensBooks />} />
      <Route path="/fiction-writing" element={<FictionWriting />} />
      <Route path="/screen-writing" element={<ScreenWriting />} />
      <Route path="/business-book-writing" element={<BusinessBookWriting />} />
      <Route path="/hiphop-writing" element={<HiphopWriting />} />

      {/* Add other routes as needed */}    
      <Route path="/fiction-writing" element={<Fiction />} />
      <Route path="/romance-writing" element={<Romance />} />
      <Route path="/action-adventure" element={<Action />} />
      <Route path="/fantasy-writing" element={<Fantast />} />
      <Route path="/sci-fi-writing" element={<SciFi />} />
      <Route path="/horror-writing" element={<Horror />} />



     
      <Route path="/books-editing" element={<Bookediting />} />
      <Route path="/book-review" element={<Bookreview />} />  
      <Route path="/book-formatting" element={<Bookformating />} />
      <Route path="/chicago-editors" element={<Chicagoeditors />} />
      <Route path="/children-edit" element={<Childrenedit />} />
      <Route path="/christian-book-editors" element={<Christianbookedit />} />
      <Route path="/cookbook-editors" element={<Cookbookedit />} />
      <Route path="/editors-for-self-publishing-authors" element={<Editsforself />} />
      <Route path="/line-editing-service" element={<Lineediting />} />
      <Route path="/memoir-editing-service" element={<Memoirediting />} />
      <Route path="/novel-editing-service" element={<Novelediting />} />
      <Route path="/picture-book-editors" element={<Picturebookedit />} /> 
    <Route path="/poetry-editing-service" element={<Poetryediting />} />
      <Route path="/romance-book-editors" element={<Romanceedit />} />
      <Route path="/screenplay-editing-service" element={<Screenplayediting />} />
      <Route path="/short-story-editors" element={<Shortstoryeditor />} />

      <Route path="/amazon-book-publishing" element={<Amazonbook />} />
      <Route path="/ebook-publishing-services" element={<Ebookpub />} />
      <Route path="/self-publishing-services" element={<Selfpub />} />
      <Route path="/book-publishing-company" element={<Publishingcompany />} />


      <Route path="/book-cover-designer" element={<Bookcover />} />
      <Route path="/illustration-services" element={<Illustration />} />
      <Route path="/book-trailer" element={<Booktrailer />} />
      <Route path="/children-book-illustration" element={<Childrenillustration />} />
      <Route path="/comic-book-illustration" element={<Comicillust />} />
      <Route path="/author-website-design" element={<Authorwebsite />} />
      <Route path="/children-book-printing" element={<Childrenprinting />} />

      <Route path="/arabic-translation" element={<Arabictrans />} />
      <Route path="/french-translation" element={<Frenchtrans />} />
      <Route path="/spanish-translation" element={<Spanishtrans />} />
      <Route path="/german-book-translation" element={<Germantrans />} />
      <Route path="/audio-book-narrators" element={<Audiobook />} />
      <Route path="/chinese-book-translation" element={<Chinesetrans />} />
      <Route path="/comic-book-translation" element={<Comictrans />} />
      <Route path="/book-translation-services" element={<Booktrans />} />
      <Route path="/book-printing" element={<Bookprint />} />
      <Route path="/book-marketing" element={<Bookmarket />} />
      <Route path="/japanese-book-translation" element={<Japtrans />} />
      <Route path="/russian-translation-book-services" element={<Russiantrans />} />  
 
      <Route path="/about-us" element={<About />} />
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/contact-us" element={<Cont />} />
     
      <Route path="/austin" element={<Austin />} />
      <Route path="/dallas" element={<Dallas />} />
      <Route path="/atlanta" element={<Atlanta />} />
      <Route path="/berkeley" element={<Berkley />} />
      <Route path="/boston" element={<Boston />} />
      <Route path="/chicago" element={<Chicago />} />
      <Route path="/boulder" element={<Boulder />} />
      <Route path="/denver" element={<Denver />} />
      <Route path="/brooklyn" element={<Brooklyn />} />
      <Route path="/los-angeles" element={<LosAngeles />} />
      <Route path="/charlotte" element={<Charlotte />} />
      <Route path="/miami" element={<Miami />} />
      <Route path="/colorado-springs" element={<Coloradosprings />} />
      <Route path="/columbus" element={<Columbus />} />
      <Route path="/fair-oaks" element={<Fairoaks />} />
      <Route path="/fort-worth" element={<Fortworth />} />
      <Route path="/indianapolis" element={<Indianapolis />} />
      <Route path="/kansas-city" element={<KansasCity />} />
      <Route path="/nashville" element={<Nashville />} />
      <Route path="/phoenix" element={<Phoenix />} />
      <Route path="/portland" element={<Portland />} />
      <Route path="/salt-lake-city" element={<Saltlake />} />
      <Route path="/san-francisco" element={<Sanfrancisco />} />
      <Route path="/sarasota" element={<Sarasota />} />

              <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/post/:id" element={<BlogPost />} />
      
      </Routes>
    </Router>
  )
}

export default App