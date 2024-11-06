import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  likedQuotes: JSON.parse(localStorage.getItem("quotes")) || [],
  savedQuotes: JSON.parse(localStorage.getItem("savedQuotes")) || []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
 
    toggleSave: (state, action) => {
      let {quote} = action.payload
 
      const savedQuotes = state.savedQuotes.slice();
      const storedIndex = savedQuotes.findIndex((q)=>q.quote===quote)
   
       if(storedIndex!==-1){
        savedQuotes.splice(storedIndex,1)
       }
       else {
        savedQuotes.push({
          ...action.payload,isSaved: true
        })
       }
       localStorage.setItem("savedQuotes",JSON.stringify(savedQuotes))
       state.savedQuotes = savedQuotes
    },
    toggleLike:(state,action)=>{
      const {quote} = action.payload

      const likedQuotes = state.likedQuotes.slice();
      const storedIndex = likedQuotes.findIndex((q)=>q.quote===quote)
 
        if(storedIndex!==-1){
          likedQuotes.splice(storedIndex,1)
        }
        else{
        likedQuotes.push({...action.payload,
          isLiked: true,})
        }
 
        localStorage.setItem("quotes",JSON.stringify(likedQuotes))
        state.likedQuotes = likedQuotes
   
},
  },
})

export const { toggleSave,toggleLike } = counterSlice.actions

export default counterSlice.reducer