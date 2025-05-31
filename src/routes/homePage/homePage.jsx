import { useContext } from "react";
import "./homePage.scss";
import React, { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/searchBar";
import { AuthContext } from "../../context/AuthContext";
import Card from "../../components/card/Card";
import { listData } from "../../lib/dummydata";
import Chat from "../../components/chat/Chat";
import Map from "../../components/map/Map";
import { Link } from "react-router-dom";
import Footer from "../../components/HomePageFooter/Footer";

const phrases = [
  "Shop",
  "Office spaces",
  "Shop in mall",
  "warehouse",
  "and more...!",
];

function HomePage() {
  const data = listData;
  const currentItems = listData.slice();

  const [text, setText] = useState("");
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = phrases[currentPhrase];

    if (typing) {
      if (charIndex < current.length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + current[charIndex]);
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setTyping(true);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }
    }
  }, [charIndex, typing, currentPhrase]);

  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  return (
    <>
      <div className="emeka">
        <div className="home_hero">
          <div className="hero_holder">
            <div className="heading">
              <h1>
                At <span>CheckBest,</span> You’ll Find All <br /> Kinds Of <span>Shops</span>
                {/* Tech to Local Markets — in one easy place. */}
                {/* <span className='typewriter-wrapper'>
              <span className="hidden-word">investment</span> 
              <span className="visible-word">{text}</span>
            </span> */}
              </h1>
              {/* <p>We’ve more than 745,000 shops avaliable for rent</p> */}
            </div>
            <SearchBar />
          </div>
        </div>
      </div>
     <div className="Hcard">
     {currentItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
     </div>

     <Footer />
    </>
  );
}

export default HomePage;

// import { useContext } from 'react'
// import SearchBar from '../../components/searchBar/searchBar'
// import './homePage.scss'
// import { AuthContext } from '../../context/AuthContext'

// function HomePage(){

//   const {currentUser} = useContext(AuthContext)

//   console.log(currentUser)
//   return (
//     <div className='homePage'>
//       <div className="textContainer">
//         <div className="wrapper">
//         <h1 className='title'>With CheckBest Get Your Dream place to thrive</h1>
//           <p>
//           the perfect place to grow your business. Whether you're
//           launching a startup or expanding your brand, we offer
//           prime retail shops in a vibrant, high-traffic location
//           {/* designed to drive success. */}
//           </p>
//           <div>
//           <SearchBar />
//           </div>

//           <div className="boxes">
//             <div className="box">
//               <h1>35+</h1>
//               <h2>Years of Experience</h2>
//             </div>
//             <div className="box">
//               <h1>200</h1>
//               <h2>Award Gained</h2>
//             </div>
//             <div className="box">
//               <h1>1200+</h1>
//               <h2>Property Ready</h2>
//             </div>
//           </div>
//         </div>

//       </div>
//       <div className='imgContainer'>
//         <img src="/bg.png" alt="" />
//       </div>
//     </div>
//   )
// }

// export default HomePage
