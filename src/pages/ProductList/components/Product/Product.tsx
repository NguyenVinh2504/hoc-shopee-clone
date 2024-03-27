import { StartIcon } from 'src/components/Icon'
import Rating from 'src/components/Rating'
import { ProductInterface } from 'src/types/product.type'
import { formatCurrency, formatNumberToSocialStyle } from 'src/utils/utils'

interface Props {
  product: ProductInterface
}
export default function Product({ product }: Props) {
  return (
    <div className='bg-[#191919] shadow-lg hover:translate-y-[-3px] duration-200 transition-transform overflow-hidden'>
      <div className='relative pt-[100%] w-full '>
        <img
          src={product.image}
          className='w-full h-full absolute top-0 left-0 object-cover'
        />
      </div>
      <div className='p-2'>
        <span className='line-clamp-2 text-xs'>{product.name}</span>
        <div className='flex mt-2 items-center'>
          <div className='text-sm mr-1 truncate flex items-center'>
            <span className='text-xs text-[#6E6E6E]'>₫</span>
            <span className='text-[#6E6E6E] line-through'>
              {formatCurrency(product.price)}
            </span>
          </div>
          <span className='text-orange text-sm'>
            {formatCurrency(product.price_before_discount)}
          </span>
        </div>
        <div className='flex mt-3 items-center justify-end'>
          <Rating rating={product.rating} />
          <div className='ml-2 text-sm'>
            <span>{formatNumberToSocialStyle(product.sold)}</span>
            <span className='ml-1'>Đã bán</span>
          </div>
        </div>
      </div>
    </div>
  )
}
