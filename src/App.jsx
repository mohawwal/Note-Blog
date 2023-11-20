import NavBar from "./component/page/NavBar/NavBar";
import Home from "./component/page/Home/Home";
import Create from "./component/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import BlogDetails from "./component/page/Home/BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
