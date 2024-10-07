import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
 import "./Card.scss";
import { useDispatch } from "react-redux";

import {
  collection,
  likeCountAfraid,
  likeCountHappy,
  likeCountAngry,
} from "../../app/slice/action";
 
export const Card = ({ quoteData, mood }) => {
  const { id, quote, like, author } = quoteData;
  
  let dispatch = useDispatch();

  function saveToData() {
    dispatch(collection(quoteData));

   }

  function likeButton() {
    if (mood === "happy") {
      dispatch(likeCountHappy(id - 1));
    } else if (mood === "angry") {
      dispatch(likeCountAngry(id - 1));
    } else if (mood === "afraid") {
      dispatch(likeCountAfraid(id - 1));
    }
  }

  function shareQuote() {
    if (navigator.share) {
      navigator.share({
        title: 'Share this quote',
        text: `"${quote}" - ${author}`,
        url: window.location.href
      }).catch(console.error);
    } else {
      console.log('Web Share API not supported');
    }
  }

  return (
    <div
      className="card"
      key={id}
    >
      <div className="c-quote">
        <p className="quote">{quote}</p>
        <p className="author">~ {author}</p>
      </div>
      
        <div className="c-btm">
          <div className="c-lk-sh">
            <span className="like">
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "#ff0000" }}
                onClick={likeButton}
              />

              <span style={{ marginLeft: "0.3rem" }}>{like}</span>
            </span>
            <span className="share">
              <FontAwesomeIcon
                icon={faShareNodes}
                style={{ color: "#0080ff" }}
                onClick={shareQuote}
              />
            </span>
          </div>
          <span className="save">
            <FontAwesomeIcon
              icon={faBookmark}
              style={{ color: "#ffff00" }}
              onClick={saveToData}
            />
          </span>
        </div>
      
    </div>
  );
};
