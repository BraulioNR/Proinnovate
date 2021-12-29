import React from 'react'
import PropTypes from 'prop-types'
class ProductCard extends React.Component {
  render() {
    return (
      <div>
        <img
          className="ProductClassImg"
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

export default ProductCard
