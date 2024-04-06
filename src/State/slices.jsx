import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      if (existingItem) {
        existingItem.quantity += newItem.quantity
      } else {
        state.items.push(newItem)
      }
    },
    removeItemFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    updateCartItemQuantity(state, action) {
      const { id, quantity } = action.payload
      const itemToUpdate = state.items.find((item) => item.id === id)
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity
      }
    },
  },
})

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToWishlist(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      if (!existingItem) {
        state.items.push(newItem)
      }
    },
    removeItemFromWishlist(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    updateWishlistItemQuantity(state, action) {
      const { id, quantity } = action.payload
      const itemToUpdate = state.items.find((item) => item.id === id)
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity
      }
    },
  },
})

export const { addItemToCart, removeItemFromCart, updateCartItemQuantity } =
  cartSlice.actions
export const {
  addItemToWishlist,
  removeItemFromWishlist,
  updateWishlistItemQuantity,
} = wishlistSlice.actions

export const cartReducer = cartSlice.reducer
export const wishlistReducer = wishlistSlice.reducer
