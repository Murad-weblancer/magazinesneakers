import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    single: null,
    categoryId:0,
    search:'',
    creator:null
  },
  reducers:{
    getSingle(state,action){
        state.single = action.payload
    },
    getCategory(state,action){
      state.categoryId = action.payload
    },
    getSearch(state,action){
      state.search = action.payload
    },
    getCreator(state,action){
      state.creator = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const {  getSingle,getCategory,getSearch,getCreator } = filterSlice.actions

export default filterSlice.reducer