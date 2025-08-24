import React from 'react'
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import f1 from '../assets/1.png';
import f2 from '../assets/2.png';
import f3 from '../assets/3.png';
import f4 from '../assets/4.png';
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import trusticon from '../assets/payment-methods.webp'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-contact">

                <div className="right-footer">
                 <div className="con-foot">
                    <h2>Let's Get Started</h2>
                    <p>Schedule an appointment with our book writers and start writing your first draft.</p>
                    <form action="#" method="post">

                        <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required /><br /><br />


                        <input type="email" id="email" name="email" placeholder="Enter your email" required /><br /><br />


                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required /><br /><br />


                        <textarea id="project" name="project" rows="5" placeholder="Describe your project..." required></textarea><br /><br />
                           <div className="con-btn">
                        <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            <div className="ftop">
                <img src={f1} alt="" />
                <img src={f2} alt="" />
                <img src={f3} alt="" />
                <img src={f4} alt="" />
            </div>

            <div className="btom">
                <div className="first-top">
                    <div className="one">
                        <h2>Ghostwriting</h2>
                        <ul>

                            <li><Link to="/story-writing">Story Writing</Link></li>
                            <li><Link to="/song-writing-services">Song Writing</Link></li>
                            <li><Link to="/memoir-writing">Memoir Writing</Link></li>
                            <li><Link to="/rhyme-writing">Rhymes Writing</Link></li>
                            <li><Link to="/childrens-books">Childrens Book Writer</Link></li>
                            <li><Link to="/biography-writing">Biography Writing</Link></li>
                            <li><Link to="/non-fiction-writing-services">Non-Fiction Writing</Link></li>
                            <li><Link to="/san-diego-ghostwriting">San Diego Ghostwriting</Link></li>
                            <li><Link to="/christian-ghostwriters">Christian Ghostwriters</Link></li>
                        </ul>
                    </div>
                    <div className="two">

                        <ul>
                            <li><Link to="/seo-content-writing">SEO Content Writing</Link></li>
                            <li><Link to="/script-writing">Script Writing</Link></li>
                            <li><Link to="/narrative-writing">Narrative Writing</Link></li>
                            <li><Link to="/novel-writing">Novel Writing</Link></li>
                            <li><Link to="/wiki-writing">Wiki Writing</Link></li>
                            <li><Link to="/childrens-books">Children’s Books</Link></li>
                            <li><Link to="/speech-writing">Speech Writing</Link></li>
                            <li><Link to="/medical-ghostwriting">Medical Ghostwriting</Link></li>
                            <li><Link to="/beauty-ghostwriting">Beauty Ghostwriting</Link></li>
                        </ul>

                    </div>
                    <div className="three">
                        <ul>
                            <li><Link to="/fiction-writing">Science Fiction Writers</Link></li>
                            <li><Link to="/military-fiction-writing">Military Fiction writers</Link></li>
                            <li><Link to="/comic-book-writing">Comic Book writer</Link></li>
                            <li><Link to="/autobiography">Autobiography Writing</Link></li>
                            <li><Link to="/military-fiction-writing">Military Fiction writing</Link></li>
                            <li><Link to="/comic-book-writing">Comic Book writing</Link></li>
                            <li><Link to="/business-book-writing">Business writing</Link></li>
                            <li><Link to="/hiphop-writing">Hiphop Writing</Link></li>
                            <li><Link to="/cook-book-writing">Cook Book Writing</Link></li>
                            <li><Link to="/climate-book-writing">Climate Book Writing</Link></li>
                        </ul>


                    </div>
                    <div className="four">
                        <h2>Fiction Writing</h2>
                        <ul>
                            <li><Link to="/fiction-writing">Fiction Writers</Link></li>
                            <li><Link to="/romance-writing">Romance Writing Services</Link></li>
                            <li><Link to="/action-adventure-writing">Action Adventure</Link></li>
                            <li><Link to="/fantasy-writing">Fantasy Writing</Link></li>
                            <li><Link to="/sci-fi-writing">Sci-Fi writing</Link></li>
                            <li><Link to="/horror-writing">Horror Writing</Link></li>
                        </ul>

                    </div>
                
                    <div className="five">
                        <h2>Editing</h2>
                        <ul>
                            <li><Link to="/book-formatting">Book Formatting</Link></li>
                            <li><Link to="/childrens-book-editors">Children's Book Editors</Link></li>
                            <li><Link to="/book-proofreading">Book Proofreading</Link></li>
                            <li><Link to="/line-editing">Line Editing Services</Link></li>
                            <li><Link to="/memoir-editing">Memoir Editing Services</Link></li>
                            <li><Link to="/novel-editing">Novel Editing Services</Link></li>
                            <li><Link to="/poetry-editing">Poetry Editing Services</Link></li>
                            <li><Link to="/screenplay-editing">Screenplay Editing Services</Link></li>
                            <li><Link to="/short-story-editors">Short Story Editors</Link></li>
                            <li><Link to="/christian-book-editors">Christian Book Editors</Link></li>
                            <li><Link to="/self-publishing-editors">Editors For Self-Publishing <br /> Authors</Link></li>
                            <li><Link to="/chicago-editors">Chicago Editors</Link></li>
                            <li><Link to="/romance-book-editors">Romance Book Editors</Link></li>
                            <li><Link to="/picture-book-editors">Picture Book Editors</Link></li>
                            <li><Link to="/cookbook-editors">Cookbook Editors</Link></li>
                            <li><Link to="/book-binding">Book Binding Services</Link></li>
                            <li><Link to="/book-review">Book Review Services</Link></li>
                        </ul>


                    </div>
                    <div className="six">
                        <h2>Other Services</h2>
                        <ul>
                            <li><Link to="/book-cover-design">Book Cover Design</Link></li>
                            <li><Link to="/book-audio">Book Audio</Link></li>
                            <li><Link to="/book-trailer">Book Trailer</Link></li>
                            <li><Link to="/author-website-design">Author Website Design</Link></li>
                            <li><Link to="/book-publishing">Book Publishing</Link></li>
                            <li><Link to="/book-marketing">Book Marketing</Link></li>
                            <li><Link to="/childrens-book-printing">Children's Book Printing</Link></li>
                            <li><Link to="/book-publishing-services">Book Publishing <br /> Services</Link></li>
                            <li><Link to="/video-testimonials">Video Testimonials</Link></li>
                            <li><Link to="/ebook-publishing">Ebook Publishing<br /> Services</Link></li>
                            <li><Link to="/self-publishing">Self Publishing Services</Link></li>
                        </ul>


                    </div>
                    <div className="seven">
                        <h2>Translation</h2>
                        <ul>
                            <li><Link to="/translation-spanish">Spanish</Link></li>
                            <li><Link to="/translation-french">French</Link></li>
                            <li><Link to="/translation-arabic">Arabic</Link></li>
                            <li><Link to="/book-translation">Book Translation</Link></li>
                            <li><Link to="/german-book-translation">German Book Translation</Link></li>
                            <li><Link to="/chinese-book-translation">Chinese Book Translation</Link></li>
                            <li><Link to="/russian-book-translation">Russian Translation Book<br /> Services</Link></li>
                        </ul>


                    </div>
                    <div className="eight">
                        <h2>Locations</h2>
                        <ul>
                            <li><Link to="/publishers">Find Publishers around USA</Link></li>
                            <li><Link to="/california">California</Link></li>
                            <li><Link to="/new-york">New York</Link></li>
                            <li><Link to="/florida">Florida</Link></li>
                            <li><Link to="/texas">Texas</Link></li>
                            <li><Link to="/new-jersey">New Jersey</Link></li>
                            <li><Link to="/illinois">Illinois</Link></li>
                            <li><Link to="/colorado">Colorado</Link></li>
                            <li><Link to="/minnesota">Minnesota</Link></li>
                            <li><Link to="/michigan">Michigan</Link></li>
                            <li><Link to="/georgia">Georgia</Link></li>
                            <li><Link to="/pennsylvania">Pennsylvania</Link></li>
                            <li><Link to="/ohio">Ohio</Link></li>
                            <li><Link to="/massachusetts">Massachusetts</Link></li>
                            <li><Link to="/mississippi">Mississippi</Link></li>
                            <li><Link to="/south-carolina">South Carolina</Link></li>
                            <li><Link to="/north-carolina">North Carolina</Link></li>
                            <li><Link to="/virginia">Virginia</Link></li>
                            <li><Link to="/tennessee">Tennessee</Link></li>
                        </ul>


                    </div>
                </div>
            </div>
            <div className="logos">
                <span className="social-icon facebook"><a href=""><FaFacebook /></a></span>
                <span className="social-icon instagram"><a href=""><FaInstagram /></a></span>
                <span className="social-icon pinterest"><a href=""><FaPinterest /></a></span>
                <span className="social-icon linkedin"><a href=""><FaLinkedin /></a></span>
            </div>
            <div className="copy">
                <p>Copyright © Aurthors of USA</p>
                <p>Privacy Policy Terms & Conditions</p>
                <img src={trusticon} alt="" />
            </div>
        </div>
    )
}

export default Footer