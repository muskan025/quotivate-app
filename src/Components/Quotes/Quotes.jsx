import React, { useEffect, useState} from "react";
import "./Quotes.css";
 import happy from "../../images/images-quotes/happy.png";
import sad from "../../images/images-quotes/sad.png";
import angry from "../../images/images-quotes/angry.png";
import afraid from "../../images/images-quotes/afraid.png";
import cat from "../../images/images-quotes/cat.jpg";
 import { Card } from "../Card/Card";
 import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useSelector } from "react-redux";

export const Quotes = () => {
   const [checkMood, setCheckMood] = useState("");
  //  const [quotes,setQuotes]=useState([])

  const happyQuotes = useSelector((state) => state.counter.happyQuotes);
  const angryQuotes = useSelector((state) => state.counter.angryQuotes);
  const afraidQuotes = useSelector((state) => state.counter.afraidQuotes);
  const [sadQuotes,setSadQuotes]=useState([]);
  const quotes= checkMood==="happy"?happyQuotes:(checkMood==="sad"? sadQuotes: checkMood==="angry"?angryQuotes:afraidQuotes)
   const sadURL =
    "https://653f87939e8bd3be29e0befa.mockapi.io/quotivate/v1/sadquotes";
 
  async function fetchQuotesAPI(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("The process is taking longer time");
      }
      const data = await response.json();
       setCheckMood("sad")
      setSadQuotes(data)
     } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  }

  function fetchQuotes(quotes,mood) {
    setCheckMood(mood);
    // setQuotes(quotes)
   }

  useEffect(() => {
    fetchQuotes(happyQuotes, "happy");
  }, []);

  

  return (
    <div className="quotes" id="quotes">
      <Header
        img={cat}
        heading="Quotes !"
        para={
          <p>
            Feeling down? Choose quotes that lift your spirits.
            <br />
            High on positivity? Find quotes that fuel your optimism.
            <br />
            <br />
            Our belief is simple:Quotes are like friends. They're better when
            they resonate with your current mood, making your day brighter.
          </p>
        }
      />

      <div className="quest">
        <div className="emojis">
          <img
            src={happy}
            alt=""
            className="happy"
            onClick={() => fetchQuotes(happyQuotes, "happy")}
          />
          <img
            src={sad}
            alt=""
            className="sad"
            onClick={() => fetchQuotesAPI(sadURL)}
          />
          <img
            src={angry}
            alt=""
            className="angry"
            onClick={() => fetchQuotes(angryQuotes, "angry")}
          />
          <img
            src={afraid}
            alt=""
            className="afraid"
            onClick={() => fetchQuotes(afraidQuotes, "afraid")}
          />
        </div>
        <p>Choose your mood!</p>
      </div>

      <div className="cards-container">
        {quotes.length > 0 &&
          quotes.map((quote, idx) => {
            return <Card quoteData={quote} mood={checkMood} />;
          })}
      </div>

      <Footer />
    </div>
  );
};
