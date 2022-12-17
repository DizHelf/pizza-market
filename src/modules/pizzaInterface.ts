export interface IPizza {
  id: string,
  name: string,
  description: string,
  price: number[],
  types:string[] ,
  size: string[]
  ingredients: string[],
  path: string
}

export interface IResponcePizza{
  id: string,
  name: string,
  description: string,
  price: number,
  types:string,
  size: string,
  ingredients: string[],
  path: string
}
