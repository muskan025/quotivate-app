import { createSlice } from '@reduxjs/toolkit'
import { happyquotes,sadquotes,angryquotes,afraidquotes,myquotes,friendshipquotes,humorousquotes,insanityquotes } from '../../Components/Quotes/QuotesData'

const initialState = {
  happyquotes,
  sadquotes,
  angryquotes,
  afraidquotes,
  myquotes,
  friendshipquotes,
  humorousquotes,
  insanityquotes,
  savedQuotes:[]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
 
    toggleSave: (state, action) => {
      let {quote} = action.payload
 
      const storedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || []
      const storedIndex = storedQuotes.findIndex((q)=>q.quote===quote)
   
      
       if(storedIndex!==-1){
        storedQuotes.splice(storedIndex,1)
       }
       else {
        storedQuotes.push({
          ...action.payload,isSaved: true
        })
       }
       localStorage.setItem("savedQuotes",JSON.stringify(storedQuotes))
       state.savedQuotes = storedQuotes
    },
    toggleLike:(state,action)=>{
      const {category,id} = action.payload
      const quote = state[category].find((q)=> q.id === id)
      const likedQuotes = JSON.parse(localStorage.getItem("quotes")) || []
      if(quote){
        quote.isLiked = !quote.isLiked
        quote.likes += quote.isLiked ? 1:-1
      }
      
      if(quote.isLiked){
        likedQuotes.push({
          id:quote.id,
          quote:quote.quote,
          category,
          likes:quote.likes,
          isLiked: true
        })
       }
       else{
        const storedIndex = likedQuotes.findIndex((q)=>q.quote===quote.quote)
        if(storedIndex!==-1){

        likedQuotes.splice(storedIndex,1)
      }
            }

        localStorage.setItem("quotes",JSON.stringify(likedQuotes))
      
},
  },
})

export const { toggleSave,toggleLike } = counterSlice.actions

export default counterSlice.reducer