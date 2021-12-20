import "../styles/App.css";
import Layout from "./Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
	return (
		<div className="App">
			<Layout>
				<Login />
				<Signup />
			</Layout>
		</div>
	);
}

export default App;
