import types from '../CONSTANTS/ActionTypes'

let initialState = []

function findIndex(products, productId) {
   let index = -1
   products.forEach((product, i) => {
      if (product.id === productId) {
         index = i
      }
   })
   return index
}

function productReducer(state = initialState, action) {
   let { product, productId } = action
   let index = -1

   switch (action.type) {
      case types.FETCH_PRODUCTS:
         return action.products

      case types.ADD_PRODUCT:
         state.push(product)
         return [...state]

      case types.DELETE_PRODUCT:
         index = findIndex(state, productId)
         state.splice(index, 1)
         return [...state]

      case types.SAVE_PRODUCT:
         index = findIndex(state, product.id)
         state.splice(index, 1, action.product)
         return [...state]

      case types.CHANGE_PRODUCT_STATUS:
         index = findIndex(state, productId)
         state[index].status = !state[index].status
         return [...state]

      default:
         return state
   }
}

export default productReducer
