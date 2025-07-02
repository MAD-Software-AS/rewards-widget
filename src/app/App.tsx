import WidgetProvider, {
  WidgetProviderProps
} from './contexts/Widget/WidgetProvider'

import React from 'react'
import Widget from './features/Widget/Widget'

interface AppProps {
  rewardsSliderProps: WidgetProviderProps['rewardsSliderProps']
  env: string
}

const App: React.FC<AppProps> = ({ env, rewardsSliderProps }) => {
  return (
    <WidgetProvider env={env} rewardsSliderProps={rewardsSliderProps}>
      <Widget />
    </WidgetProvider>
  )
}

export default App
