import React from 'react'
import { Provider } from 'mobx-react'
import { Description } from '@/components'
import * as stores from './store'
import { Form } from './Form'

export function DeepWatch() {
  return (
    <Provider {...stores}>
      <>
        <Description title="Deep Watch">Observe deep neseted data.</Description>
        <Form />
      </>
    </Provider>
  )
}
