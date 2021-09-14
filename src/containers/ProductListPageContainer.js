import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import Path from '../CONSTANTS/Path'
import ProductListPage from '../pages/ProductListPage'
import ProductList from '../components/ProductList'
import ProductItem from '../components/ProductItem'
import { Link } from 'react-router-dom'

class ProductListPageContainer extends Component {
   componentDidMount() {
      this.props.fetchProducts()
   }

   showProductList = products => {
      let productList = products.map((product, i) => (
         <ProductItem
            key={i}
            product={product}
            index={i}
            onDelete={this.onDelete}
            onChangeStatus={this.onChangeStatus}
         />
      ))

      return <ProductList>{productList}</ProductList>
   }

   checkHollowProducts = products => {
      let isHollow = products.length > 0 ? false : true
      let addProductButton = ''
      let productList = this.showProductList(products)

      if (!isHollow) {
         addProductButton = (
            <Link
               to={Path.ADD_PRODUCT}
               className='btn btn-warning mt-3 mb-3 text-white'
            >
               Add Product
            </Link>
         )
      } else {
         productList = (
            <div className='text-center mt-3'>
               Products is empty. <Link to={Path.ADD_PRODUCT}>Add Product</Link>
            </div>
         )
      }

      return { addProductButton, productList }
   }

   onDelete = productId => {
      if (window.confirm('DO YOU STILL WANT TO DELETE THIS PRODUCT ?')) {
         this.props.onDeleteProduct(productId)
      }
   }

   onChangeStatus = product => {
      this.props.onChangeProductStatus({ ...product, status: !product.status })
   }

   render() {
      let { products } = this.props
      let { addProductButton, productList } = this.checkHollowProducts(products)

      return (
         <ProductListPage>
            {addProductButton}
            {productList}
         </ProductListPage>
      )
   }
}

const mapStateToProps = state => ({
   products: state.products
})

const mapDispatchToProps = dispatch => ({
   fetchProducts: () => dispatch(actions.fetchProductsRequest()),
   onDeleteProduct: productId =>
      dispatch(actions.deleteProductRequest(productId)),
   onChangeProductStatus: product =>
      dispatch(actions.changProductStatusRequest(product))
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ProductListPageContainer)
