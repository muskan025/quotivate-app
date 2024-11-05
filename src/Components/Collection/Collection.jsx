import React, { useEffect, useState }  from "react";
import "./Collection.css";
import { Card } from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
 import trees from "../../images/images-quotes/trees.jpg";
 import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useSelector } from "react-redux";

export const Collection = () => {
  const savedQuotes = useSelector((state) => state.counter.savedQuotes);

   return (
    <div className="collection">
      <Header
        img={trees}
        heading="Collection !"
        para={
          <p>
            This is your treasure trove of inspiration! <br />
            Dive into our saved quotes—a collection of wisdom, humor, and
            motivation that we cherish.
            <br /> Let these words spark joy in your day!
          </p>
        }
      />

      <div className="saved-cards">
        {savedQuotes?.length > 0 ?
          savedQuotes.map((data, idx) => (
            <Card quoteData={data} key={idx}/>
          )) : (
            <div  className="no-collection"><FontAwesomeIcon icon={faFolderOpen} />
           <p>No collection yet!</p></div>
           )
          }
      </div>
      <Footer />
    </div>
  );
};
