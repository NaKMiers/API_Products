import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

const menu = [
   {
      label: 'Home',
      to: '/',
      exact: true
   },
   {
      label: 'Products',
      to: '/products',
      exact: false
   }
]

const MenuLink = ({ label, to, exact }) => (
   <Route
      path={to}
      exact={exact}
      children={({ match }) => {
         let active = match ? 'active nav-item' : 'nav-item'
         return (
            <li className={active}>
               <Link to={to} className='nav-link'>
                  {label}
               </Link>
            </li>
         )
      }}
   />
)

class Menu extends Component {
   showMenu = menu =>
      menu.map((item, i) => (
         <MenuLink key={i} label={item.label} to={item.to} exact={item.exact} />
      ))

   render() {
      return (
         <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
               <div
                  className='collapse navbar-collapse'
                  id='navbarSupportedContent'
               >
                  <ul className='navbar-nav mr-auto'>{this.showMenu(menu)}</ul>
               </div>
            </div>
         </nav>
      )
   }
}

export default Menu
