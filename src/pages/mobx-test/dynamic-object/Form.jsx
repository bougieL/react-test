import React from 'react'
import { inject, observer } from 'mobx-react'
import { Input, Form as AntForm, Button } from 'antd'

const FormC = ({
  store: { username, password, updateUsername, updatePassword }
}) => {
  return (
    <AntForm>
      <AntForm.Item label="username">
        <Input
          value={username}
          onChange={(e) => updateUsername(e.target.value)}
        />
      </AntForm.Item>
      <AntForm.Item label="password">
        <Input
          value={password}
          onChange={(e) => updatePassword(e.target.value)}
        />
      </AntForm.Item>
      <AntForm.Item label="add field">
        <Button />
      </AntForm.Item>
    </AntForm>
  )
}

export const Form = inject('store')(observer(FormC))
