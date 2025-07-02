import { Reward } from '../../domains/Reward/Reward.model'
import { createContext } from 'react'

export interface WidgetContextValues {
  env: string
  rewards: Reward[]
  loading: boolean
  rewardsSliderProps: {
    minItemSize: number
    maxWidth: string
  }
}

const WidgetContext = createContext<WidgetContextValues>({
  rewardsSliderProps: {
    maxWidth: '1100px',
    minItemSize: 300
  },
  rewards: [],
  loading: true,
  env: 'dev'
})

export default WidgetContext
