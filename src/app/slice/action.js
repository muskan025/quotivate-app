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

    collection: (state, action) => {
      console.log(action.payload)
       state.savedQuotes = [...state.savedQuotes, action.payload]
       localStorage.setItem("savedQuotes",JSON.stringify(state.savedQuotes))
    },
    toggleLike:(state,action)=>{
      const {category,id} = action.payload
      const quote = state[category].find((q)=> q.id === id)
      const likedQuotes = JSON.parse(localStorage.getItem("quotes")) || []
      if(quote){
        quote.isLiked = !quote.isLiked
        quote.likes += quote.isLiked ? 1:-1
      }

      const storedIndex = likedQuotes.findIndex((q)=>q.quote===quote.quote)
      
      if(storedIndex!==-1){
        
        likedQuotes[storedIndex] = {
          id:quote.id,
          quote:quote.quote,
          category,
          likes:quote.likes,
          isLiked: quote.isLiked
        }

      }
      else{
       if(quote.isLiked){
        likedQuotes.push({
          id:quote.id,
          quote:quote.quote,
          category,
          likes:quote.likes,
          isLiked: true
        })
       }

      }
        
        localStorage.setItem("quotes",JSON.stringify(likedQuotes))
      

},
  },
})

export const { collection,toggleLike } = counterSlice.actions

export default counterSlice.reducer