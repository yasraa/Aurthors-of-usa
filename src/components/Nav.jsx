import '../styles/nav.css';
import React from 'react'
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navs">
 <div className="thead">
        <div className="phone-and-mail">
            <div className="phone">
                <div className="phone-icon">
                    <FaPhoneAlt />
                </div>
                <div className="phone-number">(855) 261-8981 </div>
            </div>
            <div className="mail">
                <div className="mail-icon">
                    <IoMdMail size={18}/>
                </div>
                <div className="mail-address">info@authorsofusa.com</div>
            </div>
        </div>
        <span className="socials">
            <span className="social-icon facebook"><a href=""><FaFacebook /></a></span>
            <span className="social-icon instagram"><a href=""><FaInstagram /></a></span>
            <span className="social-icon pinterest"><a href=""><FaPinterest /></a></span>
            <span className="social-icon linkedin"><a href=""><FaLinkedin /></a></span>  
        </span>
    </div>
      <nav className="navbar">
        <div className="logo">MyLogo</div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

          <li className="nav-item dropdown">
            <div className="he">
              Ghostwriting  <FaChevronDown style={{ marginLeft: "3px" }}  /></div>
            <ul className="dropdown-menu">
              <li><Link to="/Ghostwriting">Ghostwriting Services</Link></li>
              <li><Link to="/story-writing">Story Writing</Link></li>
              <li><Link to="/song-writing-services">Song Writing Services</Link></li>
              <li><Link to="/memoir-writing">Memoir Writing</Link></li>
              <li><Link to="/non-fiction-writing-services">Non-Fiction Writing Services</Link></li>
              <li><Link to="/rhyme-writing">Rhyme Writing</Link></li>
              <li><Link to="/climate-book-writing">Climate Book Writing</Link></li>
              <li><Link to="/biography-writing">Biography Writing</Link></li>
              <li><Link to="/autobiography">Autobiography</Link></li>
              <li><Link to="/seo-content-writing">SEO Content Writing</Link></li>
              <li><Link to="/script-writing">Script Writing</Link></li>
              <li><Link to="/narrative-writing">Narrative Writing</Link></li>
              <li><Link to="/novel-writing">Novel Writing</Link></li>
              <li><Link to="/cook-book-writing">Cook Book Writing</Link></li>
              <li><Link to="/wiki-writing">Wiki Writing</Link></li>
              <li><Link to="/speech-writing">Speech Writing</Link></li>
              <li><Link to="/comedy-writing">Comedy Writing</Link></li>
              <li><Link to="/movie-writing">Movie Writing</Link></li>
              <li><Link to="/military-fiction-writing">Military Fiction Writing</Link></li>
              <li><Link to="/comic-book-writing">Comic Book Writing</Link></li>
              <li><Link to="/ebook-writing-services">eBook Writing Services</Link></li>
              <li><Link to="/childrens-books">Children's Books</Link></li>
              <li><Link to="/fiction-writing">Fiction Writing</Link></li>
              <li><Link to="/screen-writing">Screen Writing</Link></li>
              <li><Link to="/business-book-writing">Business Book Writing</Link></li>
              <li><Link to="/hiphop-writing">Hiphop Writing</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <div className="he">
              Fiction Writing  <FaChevronDown style={{ marginLeft: "3px" }}/></div>
            <ul className="dropdown-menu">
              <li><Link to="/fiction-writing">Fiction Writing</Link></li>
              <li><Link to="/romance-writing">Romance Writing</Link></li>
              <li><Link to="/action-adventure">Action Adventure</Link></li>
              <li><Link to="/fantasy-writing">Fantasy Writing</Link></li>
              <li><Link to="/sci-fi-writing">Sci-Fi Writing</Link></li>
              <li><Link to="/horror-writing">Horror Writing</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <div className="he">
              Book Editing  <FaChevronDown style={{ marginLeft: "3px" }} /></div>
            <ul className="dropdown-menu">
              <li><Link to="/books-editing">Books Editing</Link></li>
              <li><Link to="/line-editing-service">Line Editing Service</Link></li>
              <li><Link to="/memoir-editing-service">Memoir Editing Service</Link></li>
              <li><Link to="/novel-editing-service">Novel Editing Service</Link></li>
              <li><Link to="/poetry-editing-service">Poetry Editing Service</Link></li>
              <li><Link to="/screenplay-editing-service">Screenplay Editing Service</Link></li>
              <li><Link to="/short-story-editors">Short Story Editors</Link></li>
              <li><Link to="/christian-book-editors">Christian Book Editors</Link></li>
              <li><Link to="/editors-for-self-publishing-authors">Editors For Self-Publishing Authors</Link></li>
              <li><Link to="/chicago-editors">Chicago Editors</Link></li>
              <li><Link to="/romance-book-editors">Romance Book Editors</Link></li>
              <li><Link to="/cookbook-editors">Cookbook Editors</Link></li>
              <li><Link to="/picture-book-editors">Picture Book Editors</Link></li>
              <li><Link to="/book-formatting">Book Formatting</Link></li>
              <li><Link to="/book-review">Book Review Services</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <div className="he">
              Publishing <FaChevronDown style={{ marginLeft: "3px" }} /></div>
            <ul className="dropdown-menu">
              <li><Link to="/amazon-book-publishing">Amazon Book Publishing</Link></li>
              <li><Link to="/book-publishing-company">Book Publishing Company</Link></li>
              <li><Link to="/ebook-publishing-services">Ebook Publishing Services</Link></li>
              <li><Link to="/self-publishing-services">Self Publishing Services</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            Video Testimonials
          </li>

          <li className="nav-item dropdown">
            <div className="he">
              Design  <FaChevronDown style={{ marginLeft: "3px" }} /></div>
            <ul className="dropdown-menu">
              <li><Link to="/book-cover-designer">Book Cover Designer</Link></li>
              <li><Link to="/illustration-services">Illustration Services</Link></li>
              <li><Link to="/book-trailer">Book Trailer</Link></li>
              <li><Link to="/children-book-illustration">Children Book Illustration</Link></li>
              <li><Link to="/comic-book-illustration">Comic Book Illustration</Link></li>
              <li><Link to="/author-website-design">Author Website Design</Link></li>
              <li><Link to="/children-book-printing">Children Book Printing</Link></li>

            </ul>
          </li>
          <li className="nav-item dropdown">
            <div className="he">
              Other Services <FaChevronDown style={{ marginLeft: "3px" }} /></div>
            <ul className="dropdown-menu">
              <li><Link to="/audio-book-narrators">Audio Book Narrators</Link></li>
              <li><Link to="/book-printing">Book Printing</Link></li>
              <li><Link to="/book-marketing">Book Marketing</Link></li>
              <li><Link to="/book-translation-services">Book Translation Services</Link></li>
              <li><Link to="/spanish-translation">Spanish Translation</Link></li>
              <li><Link to="/comic-book-translation">Comic Book Translation</Link></li>
              <li><Link to="/french-translation">French Translation</Link></li>
              <li><Link to="/arabic-translation">Arabic Translation</Link></li>
              <li><Link to="/german-book-translation">German Book Translation</Link></li>
              <li><Link to="/chinese-book-translation">Chinese Book Translation</Link></li>
              <li><Link to="/japanese-book-translation">Japanese Book Translation</Link></li>
              <li><Link to="/russian-translation-book-services">Russian Translation Book Services</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <div className="he">
              More  <FaChevronDown style={{ marginLeft: "3px" }}/></div>
            <ul className="dropdown-menu">
              <li><Link to="/blogs">Blog</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>

            </ul>
          </li>

          <button className='nav-btn'>call now</button>

        </ul>
        
      </nav>
    </div>
  )
}

export default Nav