import axios from "../../axios";
import { IPizza } from "../../modules/pizzaInterface";
import { AppDispatch } from "..";
import { setLoading, fetchError, fetchItems } from '../splice/pizzaItemsSplice'

export const fetchPizzaItems = () => {
  return async (dispath:AppDispatch) => {
    try {
      dispath(setLoading(true))
      await axios.get<IPizza[]>("/items").then((res) => {
        dispath(setLoading(false))
        dispath(fetchItems(res.data)); 
      })
      
    } catch (error) {
      dispath(fetchError(error as Error))
      dispath(setLoading(false))
    }
  }
}

