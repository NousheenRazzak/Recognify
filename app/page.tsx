import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/header";
import Arrow from "./public/arrow.png";
import Adobe from "./public/adobe.png";
import Google from "./public/google.png";
import Pinterest from "./public/pinterest.png";
import Zoom from "./public/zoom.png";
import Canva from "./public/canva.webp";
import Portfolio11 from "./public/portfolio11.jpg";
import Portfolio22 from "./public/portfolio22.png";
import Portfolio33 from "./public/portfolio33.jpg";

export default function Home() {
  return (
    <>
    <div className="main">
    <div className="hero-section">
      <Header />
      <div className="intro">
      <h1>RECOGNIZE
        <br />
        POTENTIAL
      </h1>
      <div>
      <p className="description">DISCOVER THE POWER OF INNOVATION 
        <br />
        AND EMBRACE GROWTH WITH BOLD
        <br />
        STRATEGIES</p>
      </div>
      <p className="contact-btn">GET IN TOUCH <Image src={Arrow} width={30} alt="arrow-image" /></p>
      </div>
    </div>
    
    <h3>ABOUT US</h3>
    <div className="second-para">
      <p className="para1">LET US WORK TOGETHER
        <br />
        TO RECOGNIZE YOUR
      </p>
      <p className="para2">POTENTIAL
        <br />
        AND SHAPE
      </p>
      <p className="para3">A FUTURE</p>
      <p className="para2">WHERE 
        <br />
        YOUR BRAND SHINES</p>
    </div>

    <div className="clients">
    <Image src={Adobe} width={200} alt="adobe"/>
      <Image src={Google} width={200} alt="google"/>
      <Image src={Pinterest} width={200} alt="pinterest"/>
      <Image src={Zoom} width={200} alt="zoom"/>
      <Image src={Canva} width={200} alt="canva"/>
    </div>

    <div>
      <h3>OUR PROJECTS</h3>
      <div className="project">
        <h3></h3>
        <h2>INNOVATIVE</h2>
        <h3>2023 <Image src={Arrow} width={30} alt="arrow image"/></h3>
      </div>
      <div className="project">
        <h3></h3>
        <h2>SERENE RESORT</h2>
        <h3>2022 <Image src={Arrow} width={30} alt="arrow image"/></h3>
      </div>
      <div className="project">
        <h3></h3>
        <h2>PORTFOLIO</h2>
        <h3>2024 <Image src={Arrow} width={30} alt="arrow image"/></h3>
      </div>
      <div className="project">
        <h3></h3>
        <h2>WH TRADE</h2>
        <h3>2023 <Image src={Arrow} width={30} alt="arrow image"/></h3>
      </div>
      <div className="project">
        <h3></h3>
        <h2>SUDS WINDOWS</h2>
        <h3>2024 <Image src={Arrow} width={30} alt="arrow image"/></h3>
      </div>
    </div>

    <h3>OUR AWARDS</h3>
    <div className="portfolio">
      <div><Image src={Portfolio11} width={470} alt="portfolio1" className="image1"/></div>
      <div><Image src={Portfolio22} width={470} alt="portfolio2" className="image2"/></div>
      <div className="award-text">
        <h3>THE
          <br />
          RECOGNIFY
          <br />
          IMPACT
          <br />
          AWARDS
          <br />
          2024
        </h3>
      </div>
      <div><Image src={Portfolio33} width={470} alt="portfolio3" className="image3 image4"/></div>
    </div>

    <div className="section-2">
    <h3>LET US GET STARTED</h3>
    <div className="second-para">
      <p className="para4">LET US TAKE YOUR BRAND
        <br />
        TO THE NEXT LEVEL
      </p>
      <p className="para5">WHETHER YOU ARE
        <br />
        LOOKING TO REBRAND
      </p>
      <p className="para6">STUNNING CAMPAIGN</p>
      <p className="para7">OR</p>
      <p className="para5">DEVELOP A DIGITAL
        <br />
        STRATEGY</p>
    </div>
    </div>

    <div className="text">
      <h3>MENU</h3>
      <div><h3>IG  /  LN  /  TW  /  WA</h3></div>
      <h3>CONTACT</h3>
    </div>

    <div className="cntct-btn"><a href="/contact">GET IN TOUCH</a></div>

    <div className="recognify"><p>RECOGNIFY</p></div>

    </div>
    </>
  );
}
