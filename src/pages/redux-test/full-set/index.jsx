import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Description } from '@/components'
import App from './components/App'
import reducers from './reducers'

export const FullSet = () => {
  return (
    <>
      <Description title="Full Set">
        Redux full example with react. Use createStore, combineReducers, ...
      </Description>
      <Provider store={createStore(reducers)}>
        <App />
      </Provider>
    </>
  )
}
