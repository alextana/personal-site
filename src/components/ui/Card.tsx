import { JSX } from 'solid-js'
import { animate } from 'motion'

interface CardProps {
  children: JSX.Element
  highlight?: boolean
}

export default function Card({ children, highlight }: CardProps) {
  let ref: HTMLDivElement | undefined

  const handleHoverAnimation = (type: 'over' | 'leave') => {
    if (!highlight || !ref) return

    if (type === 'over') {
      animate(
        ref,
        { rotate: 2, scale: 1.02 },
        { type: 'spring', stiffness: 300 },
      )
    } else {
      animate(ref, { rotate: 0, scale: 1 }, { type: 'spring', stiffness: 300 })
    }
  }

  return (
    <div
      onMouseOver={() => handleHoverAnimation('over')}
      onMouseLeave={() => handleHoverAnimation('leave')}
      ref={ref}
      class={`border relative border-white/10 p-4 shadow-lg rounded-md cursor-pointer transition-all
        ${
          highlight
            ? 'hover:border-green-500/70 hover:bg-green-500/5 bg-lime-500/5 border-green-500/30'
            : 'hover:border-lime-500/70 hover:bg-lime-500/5'
        }`}
    >
      {children}
    </div>
  )
}
