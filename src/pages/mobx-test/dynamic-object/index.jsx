import React from 'react'
import { Provider } from 'mobx-react'
import * as stores from './store'
import { Form } from './Form'

export function DynamicObject() {
  return (
    <Provider {...stores}>
      <>
        <h1>Dynamic Object</h1>
        <Form />
      </>
    </Provider>
  )
}
