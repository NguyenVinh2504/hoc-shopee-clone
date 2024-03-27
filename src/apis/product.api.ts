import {
  ProductConfigInterface,
  ProductInterface,
  ProductListInterface
} from 'src/types/product.type'
import { SuccessResponseApi } from 'src/types/utils.type'
import { http } from 'src/utils/http'

const URL = 'products'
export const productApis = {
  getProductList: (config: ProductConfigInterface) =>
    http.get<SuccessResponseApi<ProductListInterface>>(URL, { params: config }),
  getProduct: (id: string) =>
    http.get<SuccessResponseApi<ProductInterface>>(`${URL}/${id}`)
}
