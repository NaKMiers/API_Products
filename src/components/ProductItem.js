import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Path from '../CONSTANTS/Path'

class ProductItem extends Component {
   render() {
      let { product, index, onDelete, onChangeStatus } = this.props
      let status = product.status ? 'Stocking' : 'Out of stock'
      let statusCLass = product.status ? 'label-success' : 'label-secondary'
      return (
         <tr>
            <th>{index + 1}</th>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}$</td>
            <td className='text-center'>
               <span
                  className={`${statusCLass} can-interact`}
                  onClick={() => onChangeStatus(product)}
               >
                  {status}
               </span>
            </td>
            <td>
               <Link
                  to={Path.EDIT_PRODUCT + '/' + product.id}
                  className='btn btn-primary mr-1'
               >
                  Edit
               </Link>
               <button
                  className='btn btn-danger ml-1'
                  onClick={() => onDelete(product.id)}
               >
                  Delete
               </button>
            </td>
         </tr>
      )
   }
}

export default ProductItem
