import React from "react";
import { Card } from "react-bootstrap";
import TodoContent from "./TodoContent";
import { useSelector } from "react-redux";

const Todo = () => {
	const todoList = useSelector((state) => state.todos);
	return (
		<Card className="container-md">
			<Card.Header>Todo list</Card.Header>
			<br />
			{todoList.map((data) => {
				console.log(data);
				return <TodoContent data={data} key={data.id}></TodoContent>;
			})}
		</Card>
	);
};

export default Todo;
