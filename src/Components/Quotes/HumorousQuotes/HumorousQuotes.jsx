import React from 'react'
import { humorousquotes } from '../QuotesData'
import { Card } from '../../Card/Card'
export const Humorousquotes = () => {
  return (
    <div className='humorousquotes'> 
     
 <div className="cards-container">
  {humorousquotes.length>0 && humorousquotes.map((quote,idx)=>{
     return <Card quoteData={quote}/>
  }
       
      )}
  

</div>
    </div>
  )
}
