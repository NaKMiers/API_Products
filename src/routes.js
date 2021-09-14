import { Route } from 'react-router'
import Path from './CONSTANTS/Path'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ProductListPageContainer from './containers/ProductListPageContainer'
import ProductActionPageContainer from './containers/ProductActionPageContainer'

const routes = [
   {
      path: `${Path.EDIT_PRODUCT}/:id`,
      exact: false,
      content: ({ match, history }) => (
         <ProductActionPageContainer match={match} history={history} />
      )
   },
   {
      path: Path.ADD_PRODUCT,
      exact: false,
      content: ({ history }) => <ProductActionPageContainer history={history} />
   },
   {
      path: Path.PRODUCTS,
      exact: false,
      content: () => <ProductListPageContainer />
   },
   {
      path: Path.HOME,
      exact: true,
      content: () => <HomePage />
   },
   {
      path: Path.NOT_FOUND,
      exact: false,
      content: () => <NotFoundPage />
   }
]

function showContent(routes) {
   return routes.map((route, i) => {
      return (
         <Route
            key={i}
            path={route.path}
            exact={route.exact}
            component={route.content}
         />
      )
   })
}

export default showContent(routes)
