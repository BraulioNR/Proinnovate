import React from 'react'
import PropTypes from 'prop-types'
class ProductCard extends React.Component {
  render() {
    return (
      <div>
        <img
          className="ProductClass"
          src={this.props.image}
          alt={this.props.title}
        />
        <a href={`/detalle/:${this.props.id}`}>{this.props.id}</a>
      </div>
    )
  }

  static get propTypes() {
    return {
      image: PropTypes.any,
      title: PropTypes.any,
      id: PropTypes.any,
    }
  }
}

/*
function ProductCard(props) {
  const id = props.id
  return console.log(id)
} */

export default ProductCard
