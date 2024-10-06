import React from 'react';
import './Header.scss';
 import star from '../../images/star.png';

 
import { Headersvg } from '../svgs/headersvg/Headersvg';
export const Header = ({img,heading,para}) => {
  return (
    <div className="intro" >
   <div className="img-text-container">
   <img src={img} alt="" className='intro-img' />
   <div className="text-container">
   <span>{heading}</span>
      <p className='intro-text'>
      {para}
      </p>
   </div>
   </div>
      <Headersvg/>
       
    </div>
  )
}
