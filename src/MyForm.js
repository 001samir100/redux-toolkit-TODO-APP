import React, { useState, useCallback } from "react";

function MyForm() {
	const [formData, setFormData] = useState("");

	const handleInputChange = useCallback((event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	}, []);

	return (
		<form>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleInputChange}
				/>
			</label>
			<label>
				Email:
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleInputChange}
				/>
			</label>
			<button type="submit">Submit</button>
		</form>
	);
}

export default MyForm;
