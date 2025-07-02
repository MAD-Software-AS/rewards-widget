import React, { useEffect, useRef, useState } from 'react'

export interface SliderItem {
  image: string
  title: string
  description: string
}

interface SliderProps {
  items: SliderItem[]
  maxWidth?: string
  minItemSize?: number
}

const Slider: React.FC<SliderProps> = ({
  items,
  maxWidth = '100%',
  minItemSize = 200
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [itemSize, setItemSize] = useState(minItemSize)

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return
      const containerWidth = containerRef.current.offsetWidth
      const itemsFit = Math.floor(containerWidth / minItemSize) || 1
      setItemSize(containerWidth / itemsFit)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [minItemSize])

  const scrollByOne = (dir: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: dir * itemSize,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="slider-outer" style={{ maxWidth }}>
      <button className="slider-arrow left" onClick={() => scrollByOne(-1)}>
        &#9664;
      </button>

      <div className="slider-container" ref={containerRef}>
        {items.map((item, index) => (
          <div
            className="slider-item"
            key={index}
            style={{ width: `${itemSize}px`, height: `${itemSize + 40}px` }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: `${itemSize - 20}px`,
                height: `${itemSize - 20}px`
              }}
            />
            <div className="item-title">{item.title}</div>
          </div>
        ))}
      </div>

      <button className="slider-arrow right" onClick={() => scrollByOne(1)}>
        &#9654;
      </button>
    </div>
  )
}

export default Slider
