import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  highlightes: [
    {
        image:'a',
        title:'Expert Faculty',
        descrption:'12,418'
    },
    {
        image:'g',
        title:'Complete Sessions Package',
        descrption:'12,418'
    },
    {
        image:'a',
        title:'Placements',
        descrption:'12,418'
    },


  ],
  levels:[
    {
      title:'Levels',
      logo:'f',
      descriptions:"there"
    },
    {
      title:'Levels',
      logo:'f',
      descriptions:"there"
    },
    {
      title:'Levels',
      logo:'f',
      descriptions:"there"
    },
    {
      title:'Levels',
      logo:'f',
      descriptions:"there"
    }
  ]

}

export const whychooseusSlice=createSlice({
    name:'whychooseus',
    initialState,
    reducers:{}
  
})

export default whychooseusSlice.reducer