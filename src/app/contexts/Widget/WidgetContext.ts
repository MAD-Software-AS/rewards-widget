import { Reward } from '../../domains/Reward/Reward.model'
import { createContext } from 'react'

export interface WidgetContextValues {
  env: string
  rewards: Reward[]
  loading: boolean
  rewardsSliderProps: {
    minItemSize: number[]
  }
}

const WidgetContext = createContext<WidgetContextValues>({
  rewardsSliderProps: { minItemSize: [200, 200, 160, 140] },
  rewards: [],
  loading: true,
  env: 'dev'
})

export default WidgetContext
