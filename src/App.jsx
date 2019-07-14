import React from 'react'
import { Scaffold } from '@/components'
import * as Pages from './pages'

const App = () => {
  const config = [
    {
      name: 'Home',
      path: '/',
      component: Pages.Home,
      exact: true
    },
    {
      name: 'Mobx Test',
      path: '/mobx-test',
      component: Pages.MobxTest
    },
    {
      name: 'Redux Test',
      path: '/redux-test',
      component: Pages.ReduxTest
    }
  ]
  return (
    <main>
      <Scaffold config={config} />
    </main>
  )
}

export default App
