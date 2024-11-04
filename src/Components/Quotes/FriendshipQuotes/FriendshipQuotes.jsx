import React from 'react'
import { friendshipquotes } from '../QuotesData'
import { Card } from '../../Card/Card'
export const FriendshipQuotes = () => {
  return (
    <div className='friendshipQuotes' > 
 <div className="cards-container">
  {friendshipquotes.length>0 && friendshipquotes.map((quote,idx)=>{
     return <Card key={idx} quoteData={quote}/>
  }
       
      )}
  

</div>
    </div>
  )
}
