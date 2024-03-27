import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useListNavigation,
  useInteractions,
  FloatingFocusManager,
  offset,
  flip,
  size,
  autoUpdate,
  FloatingPortal,
  Placement
} from '@floating-ui/react'
import { ElementType, useRef, useState } from 'react'

// const options = ['Red', 'Orange', 'Yellow', 'Green', 'Cyan', 'Blue', 'Purple', 'Pink', 'Maroon', 'Black', 'White']
interface Props {
  trigger: (selectedItemLabel: string) => React.ReactNode
  itemElement: (value: string, selectedIndex: boolean, activeIndex: boolean) => React.ReactNode
  className?: string
  placement?: Placement
  as?: ElementType
  options: string[]
}
export default function Select({
  trigger,
  options,
  itemElement,
  placement = 'bottom-end',
  className = 'rounded-lg min-w-[100px] overflow-y-auto bg-[#18191b] outline-none border-[1px] border-[#313131] p-2 shadow-lg shadow-black'
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const { refs, floatingStyles, context } = useFloating<HTMLElement>({
    placement: placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(10),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`
          })
        },
        padding: 10
      })
    ]
  })
  // function getChildren(elements: HTMLElement | Element): Element | HTMLElement {
  // let children: Element | null = null
  //   while (elements.children[0]) {
  //     elements = elements.children[0]
  //   }
  //   return elements
  // }
  // if (elements.domReference) {
  //   console.log(getChildren(elements.domReference))
  // }
  // console.log(elements.domReference?.childNodes)

  const listRef = useRef<Array<HTMLElement | null>>([])

  const click = useClick(context, { event: 'mousedown' })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'select' })
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex
    // This is a large list, allow looping.
    // loop: true
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([dismiss, role, listNav, click])

  const handleSelect = (index: number) => {
    setSelectedIndex(index)
    setIsOpen(false)
  }

  const selectedItemLabel = selectedIndex !== null ? options[selectedIndex] : ''
  return (
    <>
      <div
        tabIndex={0}
        onClick={() => refs.domReference.current?.focus()}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {trigger(selectedItemLabel)}
      </div>
      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              style={{
                ...floatingStyles,
                outline: 'none'
              }}
              className={className}
              {...getFloatingProps()}
            >
              {options.map((value, i) => (
                <div
                  key={value}
                  ref={(node) => {
                    listRef.current[i] = node
                  }}
                  tabIndex={i === activeIndex ? 0 : -1}
                  aria-selected={i === selectedIndex && i === activeIndex}
                  role='option'
                  {...getItemProps({
                    // Handle pointer select.
                    onClick() {
                      handleSelect(i)
                    },
                    onKeyDown(event) {
                      if (event.key === 'Enter') {
                        event.preventDefault()
                        handleSelect(i)
                      }
                      if (event.key === ' ') {
                        event.preventDefault()
                        handleSelect(i)
                      }
                    }
                  })}
                >
                  {itemElement(value, i === selectedIndex, i === activeIndex)}
                </div>
              ))}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  )
}
