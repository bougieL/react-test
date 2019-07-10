import React from 'react'
import { Provider } from 'mobx-react'
import * as stores from './store'
import { Form } from './Form'

export function DeepWatch() {
  return (
    <Provider {...stores}>
      <>
        <h1>Mobx Test</h1>
        <Form />
      </>
    </Provider>
  )
}