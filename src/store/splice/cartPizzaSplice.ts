import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IResponcePizza } from "../../modules/pizzaInterface";


interface IInitialState {
  items: IResponcePizza[];
  error: string;
  loading: boolean;
}

const initialState:IInitialState = {
  items: [],
  error: "",
  loading: false,
}

const aeroportSplice = createSlice({
  name: 'aeroportSplice',
  initialState,
  reducers: {
    fetchItems: (state, actions: PayloadAction<IResponcePizza[]>) => {
      state.items = actions.payload;
    },
    fetchError: (state, actions: PayloadAction<Error>) => {
      state.error = actions.payload.message;
    },
    fetchLoading: (state, actions: PayloadAction<boolean>) => {
      state.loading = actions.payload;
    },
  }
})

export const { fetchError, fetchItems,  fetchLoading} = aeroportSplice.actions

export default aeroportSplice.reducer