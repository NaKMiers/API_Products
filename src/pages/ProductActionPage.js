import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Path from '../CONSTANTS/Path'

class ProductActionPage extends Component {
   render() {
      let { onSubmit, onChange, state } = this.props
      let { id, name, price, status } = state

      return (
         <form className='mt-4' onSubmit={onSubmit}>
            <div className='form-group'>
               <label htmlFor='name'>Name</label>
               <input
                  name='name'
                  type='text'
                  className='form-control'
                  id='name'
                  value={name}
                  placeholder='Enter product name'
                  onChange={onChange}
               />
            </div>
            <div className='form-group'>
               <label htmlFor='price'>Price</label>
               <input
                  name='price'
                  type='number'
                  className='form-control'
                  id='price'
                  value={price}
                  placeholder='Enter price'
                  onChange={onChange}
               />
            </div>
            <div className='form-group'>
               <label htmlFor='status'>Status</label>
               <select
                  className='form-control'
                  name='status'
                  value={status}
                  onChange={onChange}
               >
                  <option value={true}>Stocking</option>
                  <option value={false}>Out of stock</option>
               </select>
            </div>
            <button type='submit' className='btn btn-success text-white'>
               {id ? 'Save' : 'Add'}
            </button>
            <Link to={Path.PRODUCTS} className='btn btn-secondary ml-2'>
               Go Back
            </Link>
         </form>
      )
   }
}

export default ProductActionPage
