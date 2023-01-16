import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface IInitialState {
  pizzaName: string;
  page: number;
}

const initialState:IInitialState = {
  pizzaName: "",
  page: 1
}

const filterSplice = createSlice({
  name: 'filterSplice',
  initialState,
  reducers: {
    setPage: (state, actions: PayloadAction<number>) => {
      state.page = actions.payload;
    },
    setPizzaName: (state, actions: PayloadAction<string>) => {
      state.pizzaName = actions.payload;
    },
    resetInfo: (state) => {
      state.pizzaName = "";
      state.page = 1;
    }
  }
})

export const { setPage, setPizzaName, resetInfo } = filterSplice.actions

export default filterSplice.reducer