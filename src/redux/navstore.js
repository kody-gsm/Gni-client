import { configureStore, createSlice } from "@reduxjs/toolkit";

const mapslice = createSlice({
  name: 'mapslice',
  initialState: [],
  reducers: {
    setScroll: (state, action) => {
      console.log(state, action);
      return action.payload;
    },
  }
})

export const { setScroll } = mapslice.actions;


export default configureStore({ reducer: mapslice.reducer });
