import "./App.css";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";

function App() {
	return (
		<div className="App">
			<h1>Todo App</h1>
			<hr />

			<TodoInput></TodoInput>
			<Todo></Todo>
		</div>
	);
}

export default App;
