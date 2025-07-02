import { useCallback, useEffect, useState } from 'react'

import { Reward } from '../Reward.model'
import getApiUrl from '../../../utils/getApiUrl'

const useLoadRewardItems = (env: string) => {
  const [state, setState] = useState<{
    items: Reward[]
    loading: boolean
    isLoaded: boolean
    error: string | null
  }>({
    items: [],
    loading: true,
    isLoaded: false,
    error: null
  })

  const fetchRewardItems = useCallback(async () => {
    try {
      const API_URL = getApiUrl(env)
      const ENDPOINT = 'rewards'

      const response = await fetch(API_URL + '/' + ENDPOINT, {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET'
      })

      if (!response.ok) {
        throw new Error('Failed to fetch reward items')
      }

      const data: Reward[] = (await response.json())?.data || []
      setState({ items: data, loading: false, isLoaded: true, error: null })
    } catch (error) {
      console.error('Error loading reward items:', error)
      setState({
        items: [],
        loading: false,
        isLoaded: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    }
  }, [env])

  useEffect(() => {
    if (state.isLoaded) return // Prevent refetching if already loaded
    fetchRewardItems()
  }, [state.isLoaded, fetchRewardItems])

  return [state.items, state.loading, state.error] as const
}

export default useLoadRewardItems
