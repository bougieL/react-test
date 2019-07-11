import React from 'react'
import { inject, observer } from 'mobx-react'
import { Input, Form as AntForm, Button } from 'antd'

const FormC = ({ store: { data, updateItem, maxKey, addItem } }) => {
  return (
    <AntForm>
      {Object.keys(data).map((key) => (
        <AntForm.Item label={key} key={key}>
          <Input
            value={data[key]}
            onChange={(e) => updateItem(key, e.target.value)}
          />
        </AntForm.Item>
      ))}
      <AntForm.Item label="add">
        <Button onClick={addItem}>new {maxKey + 1}</Button>
      </AntForm.Item>
    </AntForm>
  )
}

export const Form = inject('store')(observer(FormC))
