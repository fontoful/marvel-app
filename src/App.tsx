// import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom'
import routes from './config/config'

// Styles
import './App.scss'

//pages
import Layout from './hoc/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map((myRoute, index) => {
            return (
              <Route
                key={index}
                path={myRoute.path}
                exact={myRoute.exact}
                render={(props: RouteComponentProps<any>) => (
                  <myRoute.component
                    name={myRoute.name}
                    {...props}
                    {...myRoute.props}
                  />
                )}
              />
            )
          })}
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
