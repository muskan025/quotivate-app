import React  from "react";
import "./Collection.css";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
 import trees from "../../images/images-quotes/trees.jpg";
 import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Collection = () => {
    const quoteCollection = useSelector((state) => state.counter.savedQuotes);
 
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
     
        {quoteCollection.length > 0 ?
          quoteCollection.map((data, idx) => (
            <Card quoteData={data} key={idx} />
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
