import WidgetContext, { WidgetContextValues } from './WidgetContext'

import React from 'react'
import useLoadRewardItems from '../../domains/Reward/hooks/useLoadRewardItems'

export interface WidgetProviderProps {
  children: React.ReactElement | React.ReactElement[] | string
  rewardsSliderProps: WidgetContextValues['rewardsSliderProps']
  env: string
}

const WidgetProvider: React.FC<WidgetProviderProps> = ({
  children,
  env,
  rewardsSliderProps
}) => {
  const [rewards, loading] = useLoadRewardItems(env)

  return (
    <WidgetContext.Provider
      value={{ env, rewardsSliderProps, rewards, loading }}
    >
      {children}
    </WidgetContext.Provider>
  )
}

export default WidgetProvider
