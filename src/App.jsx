import { useState } from "react"
import "./App.css"
import Hudini from "./components/Hudini.jsx"
import Home from "./components/Home.jsx"
import Landing from "./components/Landing.jsx"

function App() {
  const d =   {
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  }

  const [data, setData] = useState(d)

  return (
    <>
      {/* <Hudini /> */}
      {/* <Landing data={data}/>
      <Home store={data.store} /> */}

      {data.currentPage === 'Landing' ? <Landing data={data}/> : <Home store={data.store} shouldDiscount={data.shouldDiscount}/>}
      <button onClick={() => {setData({...data, currentPage: data.currentPage === 'Landing' ? 'Home' : 'Landing'})}}>Switch page</button>
    </>
  )
}

export default App
