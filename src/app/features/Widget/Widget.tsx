import React from 'react'
import RewardsSlider from '../RewardsSlider/RewardsSlider'

export interface WidgetProps {}

const Widget: React.FC<WidgetProps> = () => {
  return (
    <div className="section-content">
      <RewardsSlider />
    </div>
  )
}

export default Widget
