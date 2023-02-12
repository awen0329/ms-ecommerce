/** @format */

export interface IProduct {
  id: number
  brand: string
  price: number
  name: string
  image: string
}

export interface IPagination {
  more: boolean
  page: number
}

export interface IGetProductsResponse {
  active: boolean
  payload: {
    pagination: IPagination
    products: IProduct[]
    total: number
  }
}
