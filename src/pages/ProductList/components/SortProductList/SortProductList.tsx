import { Link } from 'react-router-dom'
import Button from 'src/components/Button'
import { ArrowLeft, ArrowRight } from 'src/components/Icon'
import Select from 'src/components/Selector'

function SortProductList() {
  return (
    <div className='bg-[#191919] px-3 py-4 flex flex-wrap items-center gap-2 rounded'>
      <span>Sắp xếp theo</span>
      <Button
        className='bg-[#FFFFFF22]  hover:!bg-[#484848] active:!bg-[#606060]'
        size='small'
      >
        Phổ Biến
      </Button>
      <Button
        className='bg-[#FFFFFF22] hover:!bg-[#484848] active:!bg-[#606060]'
        size='small'
      >
        Mới Nhất
      </Button>
      <Button
        className='bg-[#FFFFFF22] hover:!bg-[#484848] active:!bg-[#606060]'
        size='small'
      >
        Bán Chạy
      </Button>
      <Select
        itemElement={(value, selectedIndex, activeIndex) => {
          return (
            <div
              className={`px-3 py-3 rounded ${activeIndex ? 'bg-orange' : 'bg-transparent'} cursor-pointer`}
            >
              <div className='mr-2 w-3 inline-block'>
                {selectedIndex ? '✓' : ''}
              </div>
              {value}
            </div>
          )
        }}
        options={['Giá: Thấp Đến cao', 'Giá: Cao đến thấp']}
        trigger={(textLabel) => (
          <Button
            className='!bg-[#FFFFFF22] hover:!bg-[#484848] active:!bg-[#606060]'
            size='small'
          >
            {textLabel}
          </Button>
        )}
      />
      <div className='flex items-center flex-1 justify-end'>
        <div className='flex'>
          <span className='text-orange'>1</span>
          <span>/3</span>
        </div>
        <div className='flex ml-1'>
          <Link
            to={'/'}
            className='h-8 w-9 flex items-center justify-center bg-[#FFFFFF22] rounded-bl-sm rounded-tl-sm shadow hover:!bg-[#484848] cursor-pointer'
          >
            <ArrowLeft />
          </Link>
          <Link
            to={'/'}
            className='h-8 w-9 flex items-center justify-center bg-[#FFFFFF22] rounded-bl-sm rounded-tl-sm shadow hover:!bg-[#484848] cursor-pointer'
          >
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SortProductList
