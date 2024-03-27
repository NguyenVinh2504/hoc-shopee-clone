import { Link } from 'react-router-dom'
import { ArrowDownIcon, CategoriesIcon, EarthIcon, Logo, SearchIcon } from '../Icon'
import Popover from '../Popover'
import { useMutation } from '@tanstack/react-query'
import { logout } from 'src/apis/auth.api'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.contexts'
import path from 'src/constants/path'
export default function Header() {
  // console.log(
  //   x,
  //   x
  //     ? Number((context.elements.reference as HTMLElement)?.offsetLeft) -
  //         x +
  //         Number((context.elements.reference as HTMLElement)?.offsetWidth) / 2
  //     : undefined
  // )
  const { isAuthenticated, setIsAuthenticated, setProfile, profile } = useContext(AppContext)
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setIsAuthenticated(false)
      setProfile(null)
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  return (
    <div className='h-[119px] bg-slate-1 border-gray-5  border-b flex items-center'>
      <div className='container w-full'>
        <div className='flex justify-end'>
          <Popover
            renderFloating={
              <div className='bg-[#18191b] p-2 min-w-[200px] rounded-lg border-[1px] border-[#313131] shadow-lg shadow-black flex flex-col'>
                <button className='px-3 py-2 hover:bg-orange rounded text-start'>Tiếng Việt</button>
                <button className='px-3 py-2 hover:bg-orange rounded text-start'>English</button>
              </div>
            }
          >
            <div
              className={`flex items-center cursor-pointer [&>svg]:hover:stroke-white/70 [&>span]:hover:text-white/70`}
            >
              <EarthIcon />
              <span className='mx-1 '>Tiếng Việt</span>
              <ArrowDownIcon />
            </div>
          </Popover>
          {isAuthenticated && (
            <Popover
              renderFloating={
                <div className='bg-[#18191b] p-2 min-w-[200px] rounded-md border-[1px] border-[#313131] shadow-lg shadow-black'>
                  <div className='flex flex-col leading-none capitalize'>
                    <Link to={path.profile} className='px-3 py-3 hover:bg-orange rounded'>
                      Tài khoản của tôi
                    </Link>
                    <Link to={'/'} className='px-3 py-3 hover:bg-orange rounded'>
                      Đơn mua
                    </Link>
                    <button className='px-3 py-3 hover:bg-orange rounded text-start' onClick={handleLogout}>
                      Đăng xuất
                    </button>
                  </div>
                </div>
              }
            >
              <div className='mx-[10px] flex items-center gap-1 cursor-pointer'>
                <img
                  src='https://down-vn.img.susercontent.com/file/a4c9cbd1be053a53d3aeca30b2c5d138_tn'
                  className='w-[20px] h-[20px] rounded-full'
                />
                <span className='hover:text-white/70'>{profile?.email}</span>
              </div>
            </Popover>
          )}
          {!isAuthenticated && (
            <div className='flex mx-3'>
              <Link className='hover:text-white/70' to={path.register}>
                Đăng Ký
              </Link>
              <div className=' mx-2 relative before:absolute before:content[""] before:w-[1px] before:h-[70%] before:bg-gray-400 before:top-[50%] before:-translate-y-[50%]'></div>
              <Link className='hover:text-white/70' to={path.login}>
                Đăng Nhập
              </Link>
            </div>
          )}
        </div>
        <div className='grid grid-cols-12 items-end mt-4'>
          {/* <div className='flex justify-between items-end'> */}
          <div className='col-span-2'>
            <Logo />
          </div>
          <div className='col-span-9'>
            <form className='flex bg-[#606060] p-1 '>
              <input
                className='w-full bg-transparent outline-none py-[12px] px-[18px] placeholder:text-gray-300 flex-grow'
                placeholder='Shopee bao ship 0Đ - Đăng ký ngay!'
              />
              <button className='py-2 px-6 bg-slate-1' type='submit'>
                <SearchIcon />
              </button>
            </form>
          </div>
          <div className='col-span-1'>
            <div className='justify-end flex'>
              <CategoriesIcon />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
