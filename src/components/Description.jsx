import React from 'react'
import { Typography } from 'antd'

const { Title, Paragraph } = Typography

export const Description = ({ title, children }) => {
  return (
    <Typography>
      <Title level={1}>{title}</Title>
      <Paragraph>{children}</Paragraph>
    </Typography>
  )
}
