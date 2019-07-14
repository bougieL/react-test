import React from 'react'
import { Provider } from 'mobx-react'
import { Description } from '@/components'
import * as stores from './store'
import { Form } from './Form'

export function DynamicObject() {
  return (
    <Provider {...stores}>
      <>
        <Description title="Dynamic Object">
          Observe a object with dynamic key.
        </Description>
        <Form />
      </>
    </Provider>
  )
}
