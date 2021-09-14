import React, { Component } from 'react'

class ProductList extends Component {
   render() {
      return (
         <div className='panel'>
            <h3 className='panel-heading'>Products List</h3>
            <div className='panel-body'>
               <table className='table table-bordered table-hover'>
                  <thead>
                     <tr>
                        <th scope='col'>Number</th>
                        <th scope='col'>Product Id</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Action</th>
                     </tr>
                  </thead>
                  <tbody>{this.props.children}</tbody>
               </table>
            </div>
         </div>
      )
   }
}

export default ProductList
