import Card from "react-bootstrap/Card";

function ImgCard(props) {
	return (
		<div className="Imgcard">
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://i.pinimg.com/564x/64/ad/3f/64ad3f422dc6e94fa3644e2790de0d2d.jpg"
				/>
				<Card.Body>
					<Card.Title>Image Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default ImgCard;
