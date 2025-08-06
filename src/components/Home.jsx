import React from "react"
import Item from "./Item.jsx"


function Home({ store , shouldDiscount}) {
  return (<>
  <h3>Store</h3>
  {store.map((item, index) => <Item data={item} key={index} discount={shouldDiscount}/>)}
  </>)
}

export default Home
