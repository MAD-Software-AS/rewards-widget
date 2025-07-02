import Loading from '../../components/Loading/Loading'
import React from 'react'
import Slider from '../../components/Slider/Slider'
import getMinItemSize from '../../utils/getMinItemSize'
import useWidgetContext from '../../contexts/Widget/useWidgetContext'

interface RewardsSliderProps {
  containerWidth: string
}

const RewardsSlider: React.FC<RewardsSliderProps> = ({ containerWidth }) => {
  const { rewardsSliderProps, rewards, loading } = useWidgetContext()

  if (loading) {
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: `${rewardsSliderProps.minItemSize}px`,
            width: '100%'
          }}
        >
          <Loading />
        </div>
      </div>
    )
  } else if (rewards.length === 0) return null

  const mappedRewards = rewards
    .filter((reward) => reward.createdByRole === 'superuser')
    .map((reward) => ({
      image: reward.imageUrl,
      title: reward.name,
      description: reward.description
    }))

  const minItemSize = getMinItemSize(
    rewardsSliderProps.minItemSize,
    containerWidth
  )

  return (
    <Slider
      items={mappedRewards}
      maxWidth={containerWidth}
      minItemSize={minItemSize}
    />
  )
}

export default RewardsSlider
