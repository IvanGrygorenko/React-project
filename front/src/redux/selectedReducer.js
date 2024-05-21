import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedProducts: []
}

export const selectedSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        addToSelected: (state, action) => {
            const item = state.selectedProducts.find(item => item.id === action.payload.id)

            if (item) {
                item.quantity += action.payload.quantity
            } else {
                state.selectedProducts.push(action.payload)
            }
        },
        removeFromSelected: (state, action) => {
            state.selectedProducts = state.selectedProducts.filter(item => item.id !== action.payload)
        },
        resetSelected: (state) => {
            state.selectedProducts = []
        },
    },
})

export const { addToSelected, removeFromSelected, resetSelected } = selectedSlice.actions

export default selectedSlice.reducer