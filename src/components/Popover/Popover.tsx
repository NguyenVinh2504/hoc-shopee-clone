import { useState, useId, ElementType } from 'react'
import {
  FloatingPortal,
  Placement,
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

interface Props {
  children: React.ReactNode
  renderFloating: React.ReactNode
  className?: string
  placement?: Placement
  as?: ElementType
}
export default function Popover({
  children,
  renderFloating,
  className = '',
  placement = 'bottom-end',
  as: Element = 'div'
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const id = useId()
  const { refs, floatingStyles, context, x, elements } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    placement: placement,
    whileElementsMounted: autoUpdate
  })
  const hover = useHover(context, {
    handleClose: safePolygon()
  })
  const role = useRole(context, {
    role: 'menu'
  })
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, role])
  return (
    <>
      <Element className={className} ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </Element>
      <FloatingPortal id={id}>
        <AnimatePresence>
          {isOpen && (
            <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()} onClick={() => setIsOpen(false)}>
              <motion.div
                style={{
                  transformOrigin: `${Number(elements.reference?.getBoundingClientRect().x) - x + Number(elements.reference?.getBoundingClientRect().width) / 2}px top`
                }}
                initial={{
                  opacity: 0,
                  transform: 'scale(0)'
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
                {renderFloating}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  )
}
