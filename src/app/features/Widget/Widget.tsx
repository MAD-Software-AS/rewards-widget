import React, { useEffect, useRef } from 'react'

import RewardsSlider from '../RewardsSlider/RewardsSlider'

export interface WidgetProps {}

const Widget: React.FC<WidgetProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = React.useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    handleResize() // Initial call to set width
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [containerRef])

  return (
    <div
      className="section-content"
      ref={containerRef}
      style={{ maxWidth: '100%' }}
    >
      <RewardsSlider containerWidth={`${containerWidth}px`} />
    </div>
  )
}

export default Widget
