import callApi from '../utils/apiCaller'
import types from '../CONSTANTS/ActionTypes'

class Action {
   fetchProducts = products => ({ type: types.FETCH_PRODUCTS, products })
   fetchProductsRequest = () => dispatch =>
      callApi('products', 'GET', null).then(res =>
         dispatch(this.fetchProducts(res.data))
      )

   addProduct = product => ({ type: types.ADD_PRODUCT, product })
   addProductRequest = product => dispatch =>
      callApi('products', 'POST', product).then(res =>
         dispatch(this.addProduct(res.data))
      )

   deleteProduct = productId => ({ type: types.DELETE_PRODUCT, productId })
   deleteProductRequest = productId => dispatch =>
      callApi(`products/${productId}`, 'DELETE', null).then(res =>
         dispatch(this.deleteProduct(productId))
      )

   getProductEditing = product => ({ type: types.EDIT_PRODUCT, product })
   getProductEditingRequest = productId => dispatch =>
      callApi(`products/${productId}`, 'GET', null).then(res =>
         dispatch(this.getProductEditing(res.data))
      )

   saveProductEditing = product => ({ type: types.SAVE_PRODUCT, product })
   saveProductEditingRequest = product => dispatch =>
      callApi(`products/${product.id}`, 'PUT', product).then(res =>
         dispatch(this.saveProductEditing(res.data))
      )

   changProductStatus = productId => ({
      type: types.CHANGE_PRODUCT_STATUS,
      productId
   })
   changProductStatusRequest = product => dispatch =>
      callApi(`products/${product.id}`, 'PUT', product).then(res =>
         dispatch(this.changProductStatus(res.data.id))
      )
}

export default new Action()
