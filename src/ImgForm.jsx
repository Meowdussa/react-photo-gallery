import { useState } from "react";
import Form from "react-bootstrap/Form";

function ImgForm() {
	// single hook object instead of multiple state hooks
	const [image, setImage] = useState({
		link: "",
		title: "",
		description: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Data entered is ${image.link}");
		alert("Data entered is ${image.title}");
	};

	// to capture the changes that's happening and update it
	const handleChange = (e) => {
		//variable for the targetted input
		const { name, value } = e.target;

		setImage((previousState) => ({
			// to show the previous letter or state hence the  ...
			...previousState,
			// name is the input name
			// value is the input value
			[name]: value,
		}));
		console.log(name, value);
	};

	return (
		<div className="Form">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Image Link</Form.Label>
					<Form.Control
						value={image.link}
						name="link"
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Image Title</Form.Label>
					<Form.Control
						value={image.title}
						name="title"
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Why I like this picture</Form.Label>
					<Form.Control
						value={image.description}
						name="description"
						as="textarea"
						rows={3}
					/>
				</Form.Group>
			</Form>
		</div>
	);
}

export default ImgForm;
