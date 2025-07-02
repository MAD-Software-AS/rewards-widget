import Loading from '../../components/Loading/Loading'
import React from 'react'
import Slider from '../../components/Slider/Slider'
import useWidgetContext from '../../contexts/Widget/useWidgetContext'

const RewardsSlider: React.FC = () => {
  const { rewardsSliderProps, rewards, loading } = useWidgetContext()

  if (loading) {
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: `${rewardsSliderProps.minItemSize}px`,
            width: rewardsSliderProps.maxWidth
          }}
        >
          <Loading />
        </div>
      </div>
    )
  } else if (rewards.length === 0) return null

  const mappedRewards = rewards.map((reward) => ({
    image: reward.imageUrl,
    title: reward.name,
    description: reward.description
  }))

  return (
    <Slider
      items={mappedRewards}
      maxWidth={rewardsSliderProps.maxWidth}
      minItemSize={rewardsSliderProps.minItemSize}
    />
  )
}

export default RewardsSlider
