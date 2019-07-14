import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

const Link = ({ active, children, onClick }) => (
  <Button
    onClick={onClick}
    type={active ? 'primary' : ''}
    style={{
      marginLeft: 4
    }}
  >
    {children}
  </Button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
