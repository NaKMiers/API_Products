import { combineReducers } from 'redux'
import products from './productReducer'
import productEditing from './productEditingReducer'

const reducer = combineReducers({ products, productEditing })

export default reducer
