import React from 'react'
import { Scaffold } from '@/components'
import { Basic } from './basic'
import { DeepWatch } from './deep-watch'
import { DynamicObject } from './dynamic-object'

export const MobxTest = () => {
  const config = [
    {
      name: 'Basic',
      path: '/',
      component: Basic,
      exact: true
    },
    {
      name: 'Deep Watch',
      path: '/deep-watch',
      component: DeepWatch
    },
    {
      name: 'Dynamic Object',
      path: '/dynamic-object',
      component: DynamicObject
    }
  ]
  return <Scaffold prefix="/mobx-test" config={config} />
}
