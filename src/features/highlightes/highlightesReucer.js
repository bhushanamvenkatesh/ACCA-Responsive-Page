import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  highlightes: [
    {
        logo:'a',
        title:'Registrations',
        count:'12,418'
    },
    {
        logo:'a',
        title:'Joined',
        count:'10417'
    },
    {
        logo:'a',
        title:'Completed',
        count:'8,718'
    },
    {
        logo:'a',
        title:'Placed',
        count:'8,125'
    },


  ],
}

export const highlightesSlice=createSlice({
    name:'highlightes',
    initialState,
  
})

export default highlightesSlice.reducer