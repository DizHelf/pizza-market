import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPizza } from '../../modules/pizzaInterface'

interface IInitialState {
  loading: boolean,
  items: IPizza[],
  error: string
}

const initialState:IInitialState = {
  loading: false,
  items: [],
  error: ""
}

const pizzaSplice = createSlice({
  name: 'pizzaSplice',
  initialState,
  reducers: {
    setLoading: (state, actions: PayloadAction<boolean>) => {
      state.loading = actions.payload
    },
    fetchError: (state, actions: PayloadAction<Error>) => {
      state.error = actions.payload.message
    },
    fetchItems: (state, actions: PayloadAction<IPizza[]>) => {
      state.items = actions.payload
    }
  }
})

export const { setLoading, fetchError, fetchItems } = pizzaSplice.actions

export default pizzaSplice.reducer