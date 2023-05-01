import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
// { task: "", completed: false }

// Reducers
export const todoSlice = new createSlice({
	name: "todo",
	initialState,
	reducers: {
		saveTodo: (state, action) => {
			const newTodo = {
				id: Date.now(),
				task: action.payload,
				completed: false,
			};
			state.push(newTodo);
		},
		deleteTodo: (state, action) => {
			const newTodo = state.filter((data) => data.id !== action.payload);
			return newTodo;
		},
		editTodo: (state, action) => {},
		completedTodo: (state, action) => {
			const { id, completed } = action.payload;
			console.log(`Id: ${id} Completed: ${completed}`);

			return state.map((data) => {
				if (data.id === id) {
					return { ...data, completed: !completed };
				}
				return data;
			});

			// return state.map((data) => {
			// 	if (data.id === id) {
			// 		state = { ...state, completed };
			// 	}
			// 	return state;
			// });
			// return newTodo;
		},
	},
});

// Actions
export const { saveTodo, deleteTodo, editTodo, completedTodo } =
	todoSlice.actions;
export default todoSlice.reducer;
