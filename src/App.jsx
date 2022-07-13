import "./App.css";
import ImgForm from "./ImgForm";
import SubmitButton from "./SubmitButton";
import "bootstrap/dist/css/bootstrap.min.css";
import ImgCard from "./ImgCard";

function App() {
	return (
		<div className="App">
			<h1 className="Heading">My First React Image Gallery</h1>
			<ImgForm />
			<SubmitButton />
			<ImgCard />
		</div>
	);
}

export default App;
