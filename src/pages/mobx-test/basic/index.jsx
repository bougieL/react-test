import React, { useRef } from 'react'
import { observable, computed, action, reaction } from 'mobx'
import { Typography, Button } from 'antd'
import { Description } from '@/components'

const { Paragraph } = Typography

const store = new (class {
  @observable store = {
    count: 0
  }
  @computed get count() {
    return this.store.count
  }
  @action addcount = () => {
    this.store.count++
  }
})()

export const Basic = () => {
  const ref = useRef(null)
  reaction(
    () => store.count,
    (count, reaction) => {
      ref.current && (ref.current.innerHTML = count)
      // reaction.dispose() // 只响应一次
    }
  )
  const addcount = () => {
    store.addcount()
  }
  return (
    <>
      <Description title="Basic Usage">
        <Paragraph>Basic Usage with native js and html.</Paragraph>
        <ul>
          <li>
            count: <span ref={ref}>{store.count}</span>
          </li>
        </ul>
      </Description>
      <Button onClick={addcount}>Add count</Button>
    </>
  )
}
