import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd'
import { addTodo } from '../actions'

const { Search } = Input

const AddTodo = ({ dispatch }) => {
  const [value, setValue] = useState('')
  return (
    <Search
      enterButton="Add Todo"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onSearch={() => {
        if (!value.trim()) {
          return
        }
        dispatch(addTodo(value))
        setValue('')
      }}
    />
  )
}

export default connect()(AddTodo)
