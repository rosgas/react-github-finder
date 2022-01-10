import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Background from "./components/assets/main-bg.png";

function App() {
  const divStyle = {
    background: "url(" + Background + ") center center/cover",
  };

  return (
    <Router>
      <div
        className="flex flex-col items-center justify-between h-screen"
        style={divStyle}
      >
        <Navbar />

        <main>Main Content</main>
        <footer>Footer</footer>
      </div>
    </Router>
  );
}

export default App;
