import { useState } from "react"
import { useReducer } from "react"

const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const newItems = [...state.items, { ...action.payload, id: Date.now() }]
      const total = newItems.reduce((sum, item) => sum + item.price, 0)
      return {
        items: newItems,
        total,
        itemCount: newItems.length,
      }
    }
    case "REMOVE_ITEM":
      const newItems = state.items.filter((item) => item.id !== action.payload)
      const total = newItems.reduce((sum, item) => sum + item.price, 0)
      return {
        items: newItems,
        total,
        itemCount: newItems.length,
      }
    case "CLEAR_CART":
      return initialState

    default:
      return state
  }
}

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  return (
    <div>
      <h2>
        Shopping Cart ({itemCount} items) - Total: ${total}
      </h2>
      {/* Render items */}
    </div>
  )
}

export default ShoppingCart
