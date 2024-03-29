import { configureStore } from '@reduxjs/toolkit'
import pizzaItemsSplice from './splice/pizzaItemsSplice';
import urlInfoSplice from './splice/urlInfoSplice';
import cartPizzaSplice from './splice/cartPizzaSplice';
import filterSplice from './splice/filterSplice'

const store = configureStore({
  reducer: {pizzaItemsSplice, urlInfoSplice, cartPizzaSplice, filterSplice}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;