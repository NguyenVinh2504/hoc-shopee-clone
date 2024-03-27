import { useQueryParams } from 'src/hooks'
import AsideFilter from './components/AsideFilter'
import Product from './components/Product'
import SortProductList from './components/SortProductList'
import { useQuery } from '@tanstack/react-query'
import { productApis } from 'src/apis/product.api'

export default function ProductList() {
  const queryParams = useQueryParams()
  const { data, isFetching } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => productApis.getProductList(queryParams)
  })
  return (
    <div className='py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-8'>
          <div className='col-span-3'>
            <AsideFilter />
          </div>
          <div className='col-span-9'>
            <SortProductList />
            <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
              {data &&
                !isFetching &&
                data.data.data.products.map((product) => {
                  return (
                    <div className='col-span-1' key={product._id}>
                      <Product product={product} />
                    </div>
                  )
                })}
              {isFetching && <span>Loading...</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
