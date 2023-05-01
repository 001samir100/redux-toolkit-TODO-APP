import React, { useCallback, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveTodo } from "../slices/todoSlice";

const TodoInput = () => {
	const [value, setValue] = useState("");
	const dispatch = useDispatch();
	// const inputRef = useRef();

	const handleOnChange = useCallback((e) => {
		setValue(e.target.value);
	}, []);

	return (
		<div>
			<Container>
				<Form>
					<Row>
						<Col sm={8}>
							<Form.Group controlId="formBasicEmail">
								<Form.Control
									type="text"
									// ref={inputRef}
									// value={value}
									onChange={handleOnChange}
								/>
								<Form.Text className="text-muted">
									Save all task that you need to do
								</Form.Text>
							</Form.Group>
						</Col>
						<Col sm={4} className="text-left align-items-start">
							<Button variant="dark" onClick={() => dispatch(saveTodo(value))}>
								Add TODO
							</Button>
						</Col>
					</Row>
				</Form>
				<hr />
			</Container>
		</div>
	);
};

export default TodoInput;
