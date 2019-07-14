import React from 'react'
import { Scaffold } from '@/components'
import { Basic } from './basic'
import { FullSet } from './full-set'

export const ReduxTest = () => {
  const config = [
    {
      name: 'Basic',
      path: '/',
      component: Basic,
      exact: true
    },
    {
      name: 'Full Set',
      path: '/full-set',
      component: FullSet
    }
  ]
  return <Scaffold prefix="/redux-test" config={config} />
}
