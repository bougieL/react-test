import React from 'react'
import { Scaffold } from '@/components'
import { DeepWatch } from './deep-watch'
import { DynamicObject } from './dynamic-object'

export const MobxTest = () => {
  const config = [
    {
      name: 'Deep Watch',
      path: '/',
      component: DeepWatch,
      exact: true
    },
    {
      name: 'Dynamic Object',
      path: '/dynamic-object',
      component: DynamicObject
    }
  ]
  return <Scaffold config={config} />
}
