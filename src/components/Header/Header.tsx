import { Link } from 'react-router-dom'
import { ArrowDownIcon, CategoriesIcon, EarthIcon, Logo, SearchIcon } from '../Icon'
import { useState } from 'react'
import {
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useFloating,
  useHover,
  useInteractions,
  useRole
} from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles, context, x } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    placement: 'bottom-end',
    whileElementsMounted: autoUpdate
  })

  const hover = useHover(context, {
    handleClose: safePolygon(),
    delay: {
      close: 300
    }
  })
  const role = useRole(context, {
    role: 'menu'
  })
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, role])
  console.log(getReferenceProps())

  return (
    <div className='h-[119px] bg-slate-1 border-gray-5  border-b flex items-center'>
      <div className='container w-full'>
        <div className='flex justify-end'>
          <div className='flex items-center cursor-pointer' ref={refs.setReference} {...getReferenceProps()}>
            <EarthIcon />
            <span className='mx-1'>Tiếng Việt</span>
            <ArrowDownIcon />
          </div>
          <FloatingPortal>
            <AnimatePresence>
              {isOpen && (
                <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
                  <motion.div
                    className='bg-[#18191b] p-2 min-w-[200px] rounded border-[1px] border-[#313131] shadow-lg shadow-black '
                    initial={{
                      opacity: 0,
                      transform: 'scale(0)',
                      transformOrigin: `${Number((context.elements.reference as any)?.offsetLeft) - x + Number((context.elements.reference as any)?.offsetWidth) / 2}px top`
                    }}
                    animate={{
                      opacity: 1,
                      transform: 'scale(1)'
                    }}
                    exit={{ transform: 'scale(0)' }}
                    transition={{
                      duration: 0.2
                    }}
                  >
                    <div className='flex flex-col'>
                      <span className='px-3 py-2 hover:bg-orange rounded' onClick={() => setIsOpen(false)}>
                        Tiếng Việt
                      </span>
                      <span className='px-3 py-2 hover:bg-orange rounded'>English</span>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </FloatingPortal>
          <div className='flex items-center'>
            <Link to={'/register'}>
              <div className='mx-[12px] cursor-pointer'>Đăng ký</div>
            </Link>
            <div>|</div>
            <Link to={'/login'}>
              <div className='mx-[12px] cursor-pointer'>Đăng nhập</div>
            </Link>
          </div>
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
