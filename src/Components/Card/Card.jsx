import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import "./Card.scss";
import { useDispatch, useSelector } from "react-redux";

import {
  toggleSave,
  toggleLike
} from "../../app/slice/action";
 
export const Card = ({quoteData}) => {
  const { id,quote,author} = quoteData;
  const likedQuote = useSelector((state) => state.counter.likedQuotes.find((q)=>(q.quote===quote)));
  const isBookmarked = useSelector((state) => state.counter.savedQuotes.find((q)=>(q.quote===quote)));
   let dispatch = useDispatch();
  
  function saveToData() {
    dispatch(toggleSave(quoteData));
  }

  function likeButton() {
    dispatch(toggleLike(quoteData));
  }

  function shareQuote() {
    if (navigator.share) {
      navigator.share({
        title: 'Share this quote',
        text: `"${quote}" - ${author}`,
        url: window.location.href
      }).catch(alert(console.error));
    } else {
     alert('Web Share API not supported');
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
                style={{ color: `${likedQuote?.isLiked ? '#ff0000':'#cccccc'}` }}
                onClick={likeButton}
              />
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
  icon={ faBookmark }
  style={{ color: isBookmarked ? "yellow" : "#808080" }}
  onClick={saveToData}
/>
          </span>
        </div>
      
    </div>
  );
};
