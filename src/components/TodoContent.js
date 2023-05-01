import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, completedTodo } from "../slices/todoSlice";

const TodoContent = ({ data }) => {
	const dispatch = useDispatch();

	const handleCheckboxChange = () => {
		dispatch(completedTodo({ id: data.id, completed: data.completed }));
		// setIsChecked(event.target.checked);
	};

	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};

	return (
		<Card.Body>
			<Row>
				<Col sm={8}>
					{data.completed ? (
						<Card.Title>
							<s>{data.task}</s>
						</Card.Title>
					) : (
						<Card.Title>{data.task}</Card.Title>
					)}
				</Col>
				<Col sm={4}>
					<input
						type="checkbox"
						checked={data.completed}
						onChange={handleCheckboxChange}
					/>{" "}
					Completed &nbsp;|&nbsp;
					<Button variant="danger" onClick={() => handleDelete(data.id)}>
						Delete
					</Button>
				</Col>
			</Row>
		</Card.Body>
	);
};

export default TodoContent;
