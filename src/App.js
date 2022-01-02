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
      <div className="ClassHead">
        <Header></Header>
        <br></br>
      </div>
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
      <div className="ClassHead">
        <Header></Header>
        <br></br>
      </div>
      <div>
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
    </div>
  )
}

function ProductDetail() {
  const { id } = useParams()
  const [details, setDetail] = useState({})
  const [loading, setLoading] = useState(false)
  const [rating, setRating] = useState({})
  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://fakestoreapi.com',
      url: `/products/${id}`,
    })
      .then(({ data }) => {
        setDetail(data)
        console.log(data)
        setRating(data.rating)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])
  // const { rating } = details
  if (loading) return <Loading />
  return (
    <div>
      <div className="ClassHead">
        <Header></Header>
        <br></br>
      </div>
      <div className="ProductDetail">
        <section className="SectionImg">
          <img src={details.image} alt={details.id} />
        </section>
        <section className="SectionDetail">
          <h1>Id: {details.id}</h1>
          <h4>{details.title}</h4>
          <h4>Price: ${details.price}</h4>
          <h4>Category: {details.category}</h4>
          <h4>Rate: {rating.rate}</h4>
          <h4>Orders: {rating.count}</h4>
          <p>{details.description}</p>
        </section>
      </div>
    </div>
  )
}

function Header() {
  return (
    <div>
      <header className="header">
        <div className="containerHeader">
          <a href="/" className="logo">
            FakeMarket
          </a>
          <nav className="navbar">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
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
