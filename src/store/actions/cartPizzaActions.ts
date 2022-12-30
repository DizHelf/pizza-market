import { AppDispatch } from "../../store";
import axios from "../../axios";
import { fetchError, fetchItems, fetchLoading } from "../splice/cartPizzaSplice";


export const cartPizzaItems = () => {
  return async(dispath:AppDispatch) => {
    try {
      axios.get("/cartPizza").then(res=>{
        dispath(fetchLoading(true))
        dispath(fetchItems(res.data));
        dispath(fetchLoading(false))
      })
    } catch (error) {
      dispath(fetchError(error as Error))
    }
  }
}

export const deleteCratItems = (id: string) => {
  return async(dispath:AppDispatch) => {
    try {
      axios.delete(`/cartPizza/${id}`)
    } catch (error) {
      dispath(fetchError(error as Error))
    }
  }
}

