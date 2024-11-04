import React, { useEffect, useState } from "react";
import "./Quotes.css";
import { happyquotes,angryquotes,afraidquotes,sadquotes} from './QuotesData'
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
   const [quotesArr, setQuotesArr] = useState(happyquotes);  

  function fetchQuotes(quotes) {
    setQuotesArr(quotes)
  }
 
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
            onClick={() => fetchQuotes(happyquotes)}
          />
          <img
            src={sad}
            alt=""
            className="sad"
            onClick={() => fetchQuotes(sadquotes)}
          />
          <img
            src={angry}
            alt=""
            className="angry"
            onClick={() => fetchQuotes(angryquotes)}
          />
          <img
            src={afraid}
            alt=""
            className="afraid"
            onClick={() => fetchQuotes(afraidquotes)}
          />
        </div>
        <p>Choose your mood!</p>
      </div>

      <div className="cards-container">
        {quotesArr.length > 0 &&
          quotesArr.map((quote, idx) => {
            return <Card key={idx} quoteData={quote}  />;
          })}
      </div>

      <Footer />
    </div>
  );
};
