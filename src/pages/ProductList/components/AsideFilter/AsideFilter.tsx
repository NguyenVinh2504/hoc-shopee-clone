import { Link } from 'react-router-dom'
import Button from 'src/components/Button'
import { FilterIcon, ListIcon, StartIcon } from 'src/components/Icon'
import Input from 'src/components/Input'
import path from 'src/constants/path'

function AsideFilter() {
  return (
    <div>
      <div>
        <div className='flex items-center py-4 gap-3 text-base font-bold border-b-[1px] border-gray-5'>
          <ListIcon />
          <span>Tất cả danh mục</span>
        </div>
        <ul className='mt-3'>
          <li className='py-2 pl-2'>
            <Link className='relative px-2 font-semibold text-[#E54D2E]' to={path.home}>
              <svg
                viewBox='0 0 4 7'
                className='absolute left-[-10px] top-[48%] -translate-y-1/2 h-2 w-2 fill-[#E54D2E]'
              >
                <polygon points='4 3.5 0 0 0 7'></polygon>
              </svg>
              Áo thun
            </Link>
          </li>
          <li className='py-2 pl-2'>
            <Link className='relative px-2 font-semibold text-[#E54D2E]' to={path.home}>
              <svg
                viewBox='0 0 4 7'
                className='absolute left-[-10px] top-[48%] -translate-y-1/2 h-2 w-2 fill-[#E54D2E]'
              >
                <polygon points='4 3.5 0 0 0 7'></polygon>
              </svg>
              Đồng Hồ
            </Link>
          </li>
          <li className='py-2 pl-2'>
            <Link className='relative px-2 font-semibold text-[#E54D2E]' to={path.home}>
              <svg
                viewBox='0 0 4 7'
                className='absolute left-[-10px] top-[48%] -translate-y-1/2 h-2 w-2 fill-[#E54D2E]'
              >
                <polygon points='4 3.5 0 0 0 7'></polygon>
              </svg>
              Điện Thoại
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div className='flex items-center py-4 gap-3 text-base font-bold border-b-[1px] border-gray-5'>
          <FilterIcon />
          <span>Bộ lọc tìm kiếm</span>
        </div>
        <div className='py-5 border-b-[1px] border-gray-5'>
          <span>Khoảng giá</span>
          <form className='mt-2'>
            <div className='flex'>
              <Input placeholder='đ Từ' className='mb-[0px] [&_input]:bg-[#222222]' classNameErrorMessage='h-[0px]' />
              <div className='m-2'>-</div>
              <Input placeholder='đ Đến' className='mb-[0px] [&_input]:bg-[#222222]' classNameErrorMessage='h-[0px]' />
            </div>
            <div className='text-red-500 text-md mt-1 min-h-4 text-center'>Đây là lỗi</div>
            <Button className='w-full'>Áp Dụng</Button>
          </form>
        </div>
        <div className='py-5 border-b-[1px] border-gray-5'>
          <span>Đánh giá</span>
          <ul className='mt-3'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <li className='pl-2 py-1' key={index}>
                  <Link to={path.home} className='flex items-center text-sm'>
                    {Array(5)
                      .fill(0)
                      .map((_, index) => {
                        return (
                          <div key={index} className='[&_svg]:w-4 [&_svg]:h-4 [&_svg]:fill-yellow-500 mr-0.5'>
                            <StartIcon />
                          </div>
                        )
                      })}
                    <span>Trở lên</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <Button className='mt-4 w-full'>Xóa tất cả</Button>
      </div>
    </div>
  )
}

export default AsideFilter
