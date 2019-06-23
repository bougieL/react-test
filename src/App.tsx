import * as React from 'react'
import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom'
import { Button } from 'bougie-design'
import * as Pages from './pages'

function Header() {
  return (
    <header>
      <CustomLink to="/" exact>
        Page One
      </CustomLink>
      <CustomLink to="/pagetwo">Page Two</CustomLink>
      <CustomLink to="/pagethree">Page Three</CustomLink>
    </header>
  )
}

function CustomLink({
  to,
  children,
  exact,
  ...rest
}: {
  to: string
  children: React.ReactNode
  exact?: boolean
  [rest: string]: any
}) {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => (
        <NavLink to={to} {...rest}>
          <Button type={match ? 'primary' : 'default'}>{children}</Button>
        </NavLink>
      )}
    />
  )
}

const App: React.FC = () => {
  const routes = [
    {
      path: '/',
      component: Pages.PageOne,
      exact: true
    },
    {
      path: '/pagetwo',
      component: Pages.PageTwo
    },
    {
      path: '/pagethree',
      component: Pages.PageThree
    }
  ]
  return (
    <Router>
      <Header />
      {routes.map(({ exact, ...props }) => (
        <Route {...props} exact={exact} />
      ))}
    </Router>
  )
}

export default App
