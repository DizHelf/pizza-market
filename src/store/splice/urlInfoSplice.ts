import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPizza } from '../../modules/pizzaInterface';


interface InitialState {
  pizzaName: string;
  pizzaItem: IPizza;
  pizzaLoading: boolean;
  pizzaError: string;
  pizzaWisible: boolean;
  pizzaType: string[];
  pizzaSize: string[];
  pizzaPrice: number; 
}

const initialState:InitialState = {
  pizzaItem: {
    id: "",
    name: "",
    description: "",
    price: [],
    types:[],
    size: [],
    ingredients: [],
    path: ""
  },
  pizzaName: "",
  pizzaError: "",
  pizzaType: [],
  pizzaSize: [], 
  pizzaPrice: 0,
  pizzaLoading: false,
  pizzaWisible: false,
}

const urlInfoSplice = createSlice({
  name: 'aeroportSplice',
  initialState,
  reducers: {
    setPizzaName: (state, actions: PayloadAction<string>) => {
      state.pizzaName = actions.payload
    },
    setPizzaItem: (state, actions: PayloadAction<IPizza>) => {
      state.pizzaItem = actions.payload
    },
    setPizzaError: (state, actions: PayloadAction<Error>) => {
      state.pizzaError = actions.payload.message
    },
    setPizzaLoading: (state, actions: PayloadAction<boolean>) => {
      state.pizzaLoading = actions.payload
    },
    setPizzaWisible: (state, actions: PayloadAction<boolean>) => {
      state.pizzaWisible = actions.payload;
    },
    setPizzaSize: (state, actions: PayloadAction<string>) => {
      state.pizzaSize[0] = actions.payload;
    },
    setPizzaType: (state, actions: PayloadAction<string>) => {
      state.pizzaType[0] = actions.payload;
    },
    setPizzaPrice: (state, actions: PayloadAction<number>) => {
      state.pizzaPrice = state.pizzaItem.price[actions.payload];
    },
  }
})

export const { setPizzaName, setPizzaItem, setPizzaError, setPizzaLoading, setPizzaWisible, setPizzaSize, setPizzaType, setPizzaPrice } = urlInfoSplice.actions

export default urlInfoSplice.reducer