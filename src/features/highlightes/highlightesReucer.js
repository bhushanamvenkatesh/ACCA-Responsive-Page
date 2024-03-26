import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  highlightes: [
    {
        logo:'bi bi-r-square',
        title:'Registrations',
        count:'12,418'
    },
    {
        logo:'bi bi-journal-check',
        title:'Joined',
        count:'10417'
    },
    {
        logo:'bi bi-book',
        title:'Materials',
        count:'Articles'
    },
    {
        logo:'bi bi-people-fill',
        title:'Faculty',
        count:'Experts'
    },


  ],
}

export const highlightesSlice=createSlice({
    name:'highlightes',
    initialState,
  
})

export default highlightesSlice.reducer