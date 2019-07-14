import React, { useRef } from 'react'
import { createStore } from 'redux'
import { Typography, Button } from 'antd'
import { Description } from '@/components'

const { Paragraph } = Typography

function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

export const Basic = () => {
  const ref = useRef(null)
  const render = () => {
    ref.current && (ref.current.innerHTML = store.getState())
  }
  store.subscribe(render)
  const addCount = () => {
    store.dispatch({ type: 'INCREMENT' })
  }
  const reduceCount = () => {
    store.dispatch({ type: 'DECREMENT' })
  }
  return (
    <>
      <Description title="Basic Usage">
        <Paragraph>Basic Usage with native js and html.</Paragraph>
        <ul>
          <li>
            count: <span ref={ref}>{store.getState()}</span>
          </li>
        </ul>
      </Description>
      <Button onClick={addCount}>Add count</Button>
      <p />
      <Button onClick={reduceCount}>Reduce count</Button>
    </>
  )
}
