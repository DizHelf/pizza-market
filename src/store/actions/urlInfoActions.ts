import { AppDispatch} from ".."
import axios from "../../axios"
import { IPizza } from "../../modules/pizzaInterface"
import {setPizzaError, setPizzaItem, setPizzaLoading, setPizzaWisible } from '../../store/splice/urlInfoSplice'


export const fetchPizzaUrl = (pizzaName: string) => {
  return async (dispatch:AppDispatch) => {
    try {
      dispatch(setPizzaLoading(true))
      await axios.get<IPizza[]>(`/items/?${pizzaName && "name="+pizzaName}`).then(res=>{
        dispatch(setPizzaItem(res.data[0]))
        dispatch(setPizzaLoading(false))
        dispatch(setPizzaWisible(true))
      })
    } catch (error) {
      dispatch(setPizzaError(error as Error))
  }
} 
};

export const postPizzaItem = (pizzaItem:IPizza, size:string[], type:string[]) => {
  return async (dispatch:AppDispatch) => {
    try {
        axios.post<void>("/cartPizza", {
          id: pizzaItem.id,
          name: pizzaItem.name,
          description: pizzaItem.description,
          price: pizzaItem.price,
          type,
          size,
          ingredients:pizzaItem.ingredients,
          path: pizzaItem.path
        }).then(() => {
          dispatch(setPizzaWisible(false))
        })
      }
    catch (error){
      dispatch(setPizzaError(error as Error))
    }
  } 
}

