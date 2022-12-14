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
}

const initialState:InitialState = {
  pizzaItem: {
    id: "",
    name: "",
    description: "",
    price: 0,
    types:[],
    size: [],
    ingredients: [],
    path: ""
  },
  pizzaName: "",
  pizzaError: "",
  pizzaType: [],
  pizzaSize: [], 
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
    setClearing: (state) => {
      state.pizzaItem = {
        id: "",
        name: "",
        description: "",
        price: 0,
        types:[],
        size: [],
        ingredients: [],
        path: ""
      };
      state.pizzaName = ""
    },
    setPizzaSize: (state, actions: PayloadAction<string>) => {
      state.pizzaSize[0] = actions.payload;
    },
    setPizzaType: (state, actions: PayloadAction<string>) => {
      state.pizzaType[0] = actions.payload;
    },
  }
})

export const { setPizzaName, setPizzaItem, setPizzaError, setPizzaLoading, setPizzaWisible, setClearing, setPizzaSize, setPizzaType } = urlInfoSplice.actions

export default urlInfoSplice.reducer