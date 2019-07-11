import React from 'react'
import { Scaffold } from '@/components'
import * as Pages from './pages'

const App = () => {
  const config = [
    {
      name: 'Mobx Test',
      path: '/mobx-test',
      component: Pages.MobxTest,
      exact: true
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
