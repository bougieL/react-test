import React from 'react'
import { Scaffold } from '@/components'
import { Compose } from './compose'
import { Connect } from './connect'

export const ReduxTest = () => {
  const config = [
    {
      name: 'Compose',
      path: '/',
      component: Compose,
      exact: true
    },
    {
      name: 'Connect',
      path: '/connect',
      component: Connect
    }
  ]
  return <Scaffold prefix="/redux-test" config={config} />
}
