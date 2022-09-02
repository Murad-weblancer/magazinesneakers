import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    shoes:[],
    totalPrice:0,
    shoe:null,
  },
  reducers:{
    getShoes(state,action){
        const findIndex = state.shoes.find(obj=>obj.id === action.payload.id)
        if(findIndex){
            findIndex.count++
        }else{
            state.shoes.push({
                ...action.payload,
                count:1
            })

        }
        state.totalPrice = state.shoes.reduce((sum,obj)=>(obj.price * obj.count)+sum,0)
    },
    getShoe(state,action){
        state.shoe = action.payload
    },
    removeShoes(state,action){
      state.shoes = state.shoes.filter(obj=>obj.id !== action.payload)
      state.totalPrice = state.shoes.reduce((sum,obj)=>(obj.price * obj.count)+sum,0)

    },
    increment(state,action){
      const findIndex = state.shoes.find(obj=>obj.id === action.payload)
      if(findIndex){
        findIndex.count++
      }
      state.totalPrice = state.shoes.reduce((sum,obj)=>(obj.price * obj.count)+sum,0)
    },
    decriment(state,action){
      const findIndex = state.shoes.find(obj=>obj.id === action.payload)
      if(findIndex.count > 1){
        findIndex.count--
      }
      state.totalPrice = state.shoes.reduce((sum,obj)=>(obj.price * obj.count)+sum,0)
    },
    clearShoes(state){
      state.shoes = []
    }
  }
})

// Action creators are generated for each case reducer function
export const { getShoes,getShoe,removeShoes,increment,decriment,clearShoes } = cartSlice.actions

export default cartSlice.reducer