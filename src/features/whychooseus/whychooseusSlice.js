import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  highlightes: [
    {
        image:'https://media.istockphoto.com/id/1207763066/vector/hanging-light-bulb-icon-can-be-used-for-applications-or-websites.jpg?s=612x612&w=0&k=20&c=ETbjbsh5uhHJ_BRgyGjHuh1Cr1u9Q9d1GbQ12IBXIeA=',
        title:'Expert Faculty',
        descrption:'12,418'
    },
    {
        image:'https://cdn.pixabay.com/photo/2022/06/21/11/36/team-7275685_640.png',
        title:'Complete Sessions Package',
        descrption:'12,418'
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9wicc1Q3hVSUdB93eNsTI9ZG9sP0U6QzYkZRaV2nmGw&s',
        title:'Placements',
        descrption:'12,418'
    },


  ],
  levels:[
    {
      title:'Levels',
      logo:'bi bi-water',
      descriptions:"Three"
    },
    {
      title:'Duration',
      logo:'bi bi-alarm-fill',
      descriptions:"0-30 minutes"
    },
    {
      title:'Exams',
      logo:'bi bi-calendar-range',
      descriptions:"MCQ's"
    },
    {
      title:'Excemptions',
      logo:'bi bi-skip-end',
      descriptions:"Upto 9 papers"
    }
  ]

}

export const whychooseusSlice=createSlice({
    name:'whychooseus',
    initialState,
    reducers:{}
  
})

export default whychooseusSlice.reducer