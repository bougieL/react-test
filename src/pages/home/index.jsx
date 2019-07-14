import React from 'react'
import { Typography } from 'antd'

const { Title, Paragraph } = Typography

export const Home = () => {
  return (
    <Typography>
      <Title>React</Title>
      <Paragraph>A JavaScript library for building user interfaces</Paragraph>
      <Title level={2}>Declarative</Title>
      <Paragraph>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application, and React will efficiently update
        and render just the right components when your data changes.
      </Paragraph>
      <Paragraph>
        Declarative views make your code more predictable and easier to debug.
      </Paragraph>
      <Title level={2}>Component-Based</Title>
      <Paragraph>
        Build encapsulated components that manage their own state, then compose
        them to make complex UIs.
      </Paragraph>
      <Paragraph>
        Since component logic is written in JavaScript instead of templates, you
        can easily pass rich data through your app and keep state out of the
        DOM.
      </Paragraph>
      <Title level={2}>Learn Once, Write Anywhere</Title>
      <Paragraph>
        We don’t make assumptions about the rest of your technology stack, so
        you can develop new features in React without rewriting existing code.
      </Paragraph>
      <Paragraph>
        React can also render on the server using Node and power mobile apps
        using React Native.
      </Paragraph>
    </Typography>
  )
}
