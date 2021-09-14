import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import ProductActionPage from '../pages/ProductActionPage'

class ProductActionPageContainer extends Component {
   constructor(props) {
      super(props)
      this.state = {
         id: '',
         name: '',
         price: '',
         status: true
      }
   }

   componentDidMount() {
      let { match } = this.props
      if (match) {
         let { id } = match.params
         this.props.onGetProductEditing(id)
      }
   }

   UNSAFE_componentWillReceiveProps(nextProps) {
      let { productEditing } = nextProps
      if (productEditing) {
         this.setState({ ...productEditing })
      }
   }

   onChange = e => {
      let t = e.target
      let key = t.name
      let value = t.value

      if (key === 'price') {
         value = parseFloat(value)
      }
      if (key === 'status') {
         value = value === 'true' ? true : false
      }

      this.setState({ [key]: value })
   }

   onSubmit = e => {
      e.preventDefault()
      const { history } = this.props
      let { id, name, price, status } = this.state
      let product = { id, name, price, status }

      if (!id) {
         this.props.onAddProduct(product)
      } else {
         this.props.onSaveProductEditing(product)
      }
      history.goBack()
   }

   render() {
      let { onSubmit, onChange, state } = this
      return (
         <ProductActionPage
            state={state}
            onSubmit={onSubmit}
            onChange={onChange}
         />
      )
   }
}

const mapStateToProps = state => ({ productEditing: state.productEditing })

const mapDispatchToProps = dispatch => ({
   onAddProduct: product => dispatch(actions.addProductRequest(product)),
   onGetProductEditing: productId =>
      dispatch(actions.getProductEditingRequest(productId)),
   onSaveProductEditing: product => {
      dispatch(actions.saveProductEditingRequest(product))
   }
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ProductActionPageContainer)
