export enum REWARD_CHAIN_VISIBILITY_TYPE {
  ALL = 'all',
  SELECTED = 'selected'
}

export enum REWARD_TYPES {
  BUY = 'buy',
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  YEARLY = 'yearly'
}

export type Reward = {
  createdAt: any //Timestamp
  objectId: string
  imageUrl: string
  imagePath: string
  name: string
  description: string
  expire: any //Timestamp | null
  quantity: number
  price: number
  type: REWARD_TYPES
  period: string | null
  createdByRole: string // USER_TYPES
  chainVisibilityType: REWARD_CHAIN_VISIBILITY_TYPE
  selectedChains: string[] | null
}
