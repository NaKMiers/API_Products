import types from '../CONSTANTS/ActionTypes'

let initialState = []

function productEditingReducer(state = initialState, action) {
   switch (action.type) {
      case types.EDIT_PRODUCT:
         return action.product

      default:
         return state
   }
}

export default productEditingReducer
