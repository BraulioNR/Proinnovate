import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
class ProductCard extends React.Component {
  goDetail() {
    return this.props.id
  }

  render() {
    return (
      <div className="ProductClassCard">
        <img
          className="ProductClassImg"
          src={this.props.image}
          alt={this.props.title}
        />
        <a href={`/detalle/:${this.props.id}`}>{this.props.title}</a>
        <Link to={`/detalle/:${this.props.id}`}>
          <button onClick="window.location.href='/page2'">Detalles</button>
        </Link>
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
