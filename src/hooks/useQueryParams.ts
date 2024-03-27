import { useSearchParams } from 'react-router-dom'
import { ProductConfigInterface } from 'src/types/product.type'

export default function useQueryParams(): ProductConfigInterface {
  const [searchParams] = useSearchParams()
  return Object.fromEntries(searchParams)
}
