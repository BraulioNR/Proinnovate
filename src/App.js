import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom'
import axios from 'axios'
import './App.css'
import ProductCard from './ProductCard'
import Loading from './Loading'

function Home() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState([false])
  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://fakestoreapi.com/',
      url: '/products',
      params: {
        // _limit:10,
      },
    })
      .then(({ data }) => {
        setImages(data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return <Loading />
  return (
    <div className="Home">
      <a href="/about">About</a>
      <h2>Home</h2>
      <div className="ProductList">
        {images.map((image) => {
          return (
            <ProductCard
              key={image.id}
              image={image.image}
              title={image.title}
              id={image.id}
            />
          )
        })}
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="About">
      <a href="/">Home</a>
      <h1>About</h1>
      <h2>Braulio Bramir Nole Ruiz</h2>
      <p>
        Hola! :) soy un amante de la tecnologia de 22 años. Soy de Perú,
        especificamente de Piura, un paraiso con lindas playas y un sol que
        quema como ningun otro lugar. Tambien soy egresado de Ingenieria
        Informatica
      </p>
      <img src={process.env.PUBLIC_URL + '/avataaars.png'} alt="avatar" />
      <h3>¿Que he aprendido gracias a Make It Real y ProInnovate?</h3>
      <ul>
        <li>He aprendido los conceptos basicos de JS</li>
        <li>POO en JS</li>
        <li>React basico</li>
        <li>Css Flexbox y Responsive basico</li>
      </ul>
      <h3>Correo</h3>
      <p>branoleruiz@gmail.com</p>
      <h3>Github</h3>
      <a href="https://github.com/BraulioNR/Proinnovate">
        https://github.com/BraulioNR/Proinnovate
      </a>
    </div>
  )
}

function ProductDetail() {
  const { id } = useParams()
  const [details, setDetail] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://fakestoreapi.com',
      url: `/products/${id}`,
    })
      .then(({ data }) => {
        setDetail(data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  if (loading) return <Loading />
  return (
    <div>
      <a href="/">Home</a>
      <br></br>
      <a href="/about">About</a>
      <h1>Product Detail </h1>
      <div className="ProductDetail">
        <h1>Id: {details.id}</h1>
        <h4>{details.title}</h4>
        <h4>Price: {details.price}</h4>
        <h4>Category: {details.category}</h4>
        <img src={details.image} alt={details.id} />

        <h4>{details.description}</h4>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detalle/::id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
