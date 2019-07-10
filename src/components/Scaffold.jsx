import React from 'react'
import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom'
import { Button } from 'antd'

function CustomLink({ to, children, exact, ...rest }) {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => (
        <NavLink to={to} {...rest}>
          <Button
            type={match ? 'primary' : 'default'}
            style={{ marginRight: 8 }}
          >
            {children}
          </Button>
        </NavLink>
      )}
    />
  )
}

/**
 *
 * @param {string} prefix
 * @param {Array<{
 *   name: string
 *   path: string
 *   exact: boolean
 *   component: React.ReactNode
 * }>} config
 * @returns React.ReactNode
 */
export const Scaffold = ({ config, prefix = '' }) => {
  return (
    <Router>
      <header>
        {config.map(({ name, exact, path: to }, idx) => (
          <CustomLink key={idx} {...{ exact, to: prefix + to }}>
            {name}
          </CustomLink>
        ))}
      </header>
      <content>
        {config.map(({ exact, component, path }, idx) => (
          <Route {...{ exact, component, path: prefix + path }} key={idx} />
        ))}
      </content>
    </Router>
  )
}
