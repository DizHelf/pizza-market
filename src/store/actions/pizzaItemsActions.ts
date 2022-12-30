import axios from "../../axios";
import { IPizza } from "../../modules/pizzaInterface";
import { AppDispatch } from "..";
import { setLoading, fetchError, fetchItems } from '../splice/pizzaItemsSplice'

export const fetchPizzaItems = (page: number, paginationItems: number) => {
  return async (dispath:AppDispatch) => {
    try {
      dispath(setLoading(true))
      await axios.get<IPizza[]>("/items", {
        params:{
          p: page,
          l: paginationItems,
        }
      }).then((res) => {
        dispath(fetchItems(res.data));
        dispath(setLoading(false)) 
      })
    } catch (error) {
      dispath(fetchError(error as Error))
      dispath(setLoading(false))
    }
  }
}

